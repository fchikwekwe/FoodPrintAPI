/*
*  FoodPrint API main server
*/
require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

/** Custom middleware */
const checkAuth = (req, res, next) => {
    // console.log('Checking authentication');
    if (typeof req.cookies.nToken === 'undefined' || req.cookies === null) {
        req.profile = null;
    } else {
        const token = req.cookies.nToken;
        const decodedToken = jwt.decode(token, { complete: true }) || {};
        req.profile = decodedToken.payload;
    }
    next();
}

/** Instantiate server */
const app = express();
const PORT = process.env.PORT || 3000;

/** Database connection */
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/envi', { useNewUrlParser: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected successfully.')
});

/** Middleware */
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(checkAuth);

/** Require controllers */
require('./controllers/foods.js')(app);
require('./controllers/profiles.js')(app);
require('./controllers/auth.js')(app);

/** Port listener */
app.listen(PORT, () => {
    console.log('Envi App listening on port', PORT)
})

module.exports = app;
