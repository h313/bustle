var app = require('./app');
var request = require('supertest').agent(app.listen());

describe('Bustle', function() {
    it('should say "Welcome to Bustle!"', function(done) {
        request
            .get('/')
            .expect(200)
            .expect('Hello World', done);
    });
});
