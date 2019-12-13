const bcrypt = require('bcryptjs');
const { promisify } = require('util');

const hash = promisify(bcrypt.hash);
const genSalt = promisify(bcrypt.genSalt);

// will be called in the POST REGISTRATION route
// Fist thing to do is run this function, and pass it the password.
// The result will be the hash.
// Then insert the hash in the database.
exports.hash = password =>
    genSalt().then(
        // Password from req.body
        salt => hash(password, salt)
    );

// Will be called in the POST LOGIN route.
exports.compare = promisify(bcrypt.compare);
// Compare takes 2 args.
// 1 is password user send from client browser.
// 2 is the hashed password from database.
// Will return a bool
