const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const Profile = require('../models/profile')
const Food = require('../models/food');

const testFood = {
    "name": "delicious food",
    "description": "the best food around",
    "CO2e": 1000
}
chai.use(chaiHttp);

describe('Foods', () => {

    // after(() => {
    //     Profile.findById('5c083a79abc27e1906854e5d')
    //     .then(profile => {
    //         Food.deleteMany({ name: "delicious food" })
    //             .exec((err, foods) => {
    //                 foods.remove();
    //         });
    //     });
    // });

    // FOOD INDEX
    it('should index all foods on /GET', (done) => {
        chai.request(server)
        .get('/profiles/5c083a79abc27e1906854e5d/foods')
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.html;
            done();
        });
    });

    // // TEST CREATE FOOD
    // it('should create a single food on /profiles/<id>/foods', (done) => {
    //     Profile.findById('5c083a79abc27e1906854e5d')
    //     .then(profile => {
    //         chai.request(server)
    //         .post(`/profiles/${profile._id}/foods`)
    //         .send(testFood)
    //         .end((err, res) => {
    //             console.log("success!")
    //             res.should.have.status(200);
    //             res.should.be.html;
    //             done();
    //         })
    //     });
    // }).timeout(4000);
})
