const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const Profile = require('../models/profile');

const testProfile = {
    "username": "testBob123",
    "password": "bestpassword123"
}

chai.use(chaiHttp);

describe('Profiles', () => {

    after(() => {
        Profile.deleteMany({ username: "testBob123"})
            .exec((err, profiles) => {
                console.log(profiles)
                profiles.remove();
            });
    });

    // TEST INDEX
    it('should display index form on / GET', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html
                done();
            });
        });

    // TEST SHOW PROFILE
    it('should show a single profile on /profiles/<id> GET', (done) => {
        var profile = new Profile(testProfile);
        profile.save((err, data) => {
            chai.request(server)
                .get(`/events/${data._id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html
                    done();
                });
        });
    });

})
