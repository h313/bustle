const app = require('../app');
const request = require('supertest').agent(app.listen());

describe('General Functions', function() {
    it('/status should say "working"', function() {
        request
            .get('/status')
            .expect(200)
            .expect('working');
    });
    it('/student should say "student_working"', function() {
        request
            .get('/student')
            .expect(200)
            .expect('student_working');
    });
    it('/driver should say "driver_working"', function(done) {
        request
            .get('/driver')
            .expect(200)
            .expect('driver_working', done);
    });
});