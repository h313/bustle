const app = require('../app');
const request = require('supertest').agent(app.listen());

describe('General Functions', function() {
    it('/status should say "working"', function(done) {
        request
            .get('/status/')
            .expect(200)
            .expect('working')
            .end(function(err, res) {
                if (err)
                    return done(err);
                done();
            });
    });
    it('/student/test should say "student_working"', function(done) {
        request
            .get('/student/test')
            .expect(200)
            .expect('student_working')
            .end(function(err, res) {
                if (err)
                    return done(err);
                done();
            });
    });
    it('/driver/test should say "driver_working"', function(done) {
        request
            .get('/driver/test')
            .expect(200)
            .expect('driver_working')
            .end(function(err, res) {
                if (err)
                    return done(err);
                done();
            });
    });
    it('/school/test should say "school_working"', function(done) {
        request
            .get('/school/test')
            .expect(200)
            .expect('school_working')
            .end(function(err, res) {
                if (err)
                    return done(err);
                done();
            });
    });
});

