/* eslint no-undef: 0 */
const app = require('../app');
const request = require('supertest').agent(app.listen());

describe('Driver Functions', () => {
  it('Driver sign up success', (done) => {
    request
      .post('/driver/signup')
      .field('username', 'bobross')
      .field('password', 'paintingmagic')
      .field('name', 'Bob Ross')
      .field('school', '1')
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

