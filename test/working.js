var app = require('../app');
var request = require('supertest').agent(app.listen());

describe('Bustle', function() {
    it('/status should say "Im working!"', function(done) {
        request
            .get('/status')
            .expect(200)
            .expect("I'm working!", done);
    });
});
