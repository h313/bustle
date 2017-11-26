/* eslint no-undef: 1 */
const app = require('../src/app');
const request = require('supertest').agent(app.listen());
const sleepfor = require('sleepfor');

describe('Driver Functions', () => {
  it('Driver sign up success', (done) => {
    request
      .post('/driver/signup')
      .send({
        username: 'bobross',
        password: 'paintingmagic',
        name: 'Bob Ross',
        school: 1,
      })
      .expect(200)
      .end((err) => {
        done(err);
      });
  });
  it('driver set location success', (done) => {
    request
      .post('/driver/update_location')
      .field('id', '1')
      .field('lat', '3')
      .field('long', '3')
      .expect(200)
      .end((err) => {
        done(err);
      });
  });
});

