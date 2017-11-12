/* eslint no-undef: 0 */
const app = require('../app');
const request = require('supertest').agent(app.listen());

describe('General Functions', () => {
  it('/status should say "working"', (done) => {
    request
      .get('/status/')
      .expect(200)
      .expect('working')
      .end((err) => {
        if (err) { done(err); }
        done();
      });
  });
  it('/student/test should say "student_working"', (done) => {
    request
      .get('/student/test')
      .expect(200)
      .expect('student_working')
      .end((err) => {
        if (err) { done(err); }
        done();
      });
  });
  it('/driver/test should say "driver_working"', (done) => {
    request
      .get('/driver/test')
      .expect(200)
      .expect('driver_working')
      .end((err) => {
        if (err) { done(err); }
        done();
      });
  });
  it('/school/test should say "school_working"', (done) => {
    request
      .get('/school/test')
      .expect(200)
      .expect('school_working')
      .end((err) => {
        if (err) { done(err); }
        done();
      });
  });
});

