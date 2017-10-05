const app = require('../app');
const request = require('supertest').agent(app.listen());

describe('General Functions', function() {
    it('/status should say "working"', function(done) {
        request
            .get('/status')
            .expect(200)
            .expect('working', done);
    });
    it('/student should say "student_working"', function(done) {
        request
            .get('/student')
            .expect(200)
            .expect('student_working', done);
    });
    it('/driver should say "driver_working"', function(done) {
        request
            .get('/driver')
            .expect(200)
            .expect('driver_working', done);
    });
});