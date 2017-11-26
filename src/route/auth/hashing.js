const bcrypt = require('bcrypt');

const saltRounds = 13;

module.exports = {
  hash: password =>
    bcrypt.hash(password, saltRounds),
  compare: (password, hash) =>
    bcrypt.compare(password, hash),
};
