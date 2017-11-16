/* eslint no-undef: 1 */
const app = require('../app');
const request = require('supertest').agent(app.listen());

describe('Student Functions', () => {
  it('Student sign up success', (done) => {
    this.timeout(30000);
    request
      .post('/student/signup')
      .send({
        username: 'johndough',
        password: 'generic',
        name: 'John Doe',
        school: 1,
      })
      .expect(200)
      .end((err) => {
        done(err);
      });
  });
});
