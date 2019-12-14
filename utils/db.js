var spicedPg = require("spiced-pg");
var db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/dashjobs"
);

exports.addUser = function(firstName, lastName, email, password) {
    console.log("In db.addUser");
    return db.query(
        "INSERT INTO users (firstName, lastName, email, password) VALUES ($1, $2, $3, $4) RETURNING id",
        [firstName, lastName, email, password]
    );
};

exports.getUser = function(email) {
    console.log("Email inside getUser: ", email);
    return db.query(
        `SELECT *
         FROM users
         WHERE email = $1`,
        [email]
    );
};
exports.getUserById = function(userId) {
    console.log("Email inside getUser: ", userId);
    return db.query(
        `SELECT *
         FROM users
         WHERE id = $1`,
        [userId]
    );
};
