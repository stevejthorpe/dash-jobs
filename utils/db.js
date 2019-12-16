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

exports.addCompany = function(company_name) {
    console.log("Inside db.addCompany");
    return db.query(
        `INSERT INTO company (company_name)
        VALUES ($1)
        ON CONFLICT (company_name)
        DO UPDATE SET company_name = $1
        RETURNING id`,
        [company_name]
    );
};

exports.addContact = function(company_id, firstName, lastName) {
    console.log("Inside db.addContact");
    return db.query(
        `INSERT INTO contacts (company_id, firstName, lastName)
        VALUES ($1, $2, $3)
        RETURNING id`,
        [company_id, firstName, lastName]
    );
};

exports.addApplication = function(
    user_id,
    company_id,
    contact_id,
    job_title,
    job_desc,
    url,
    city,
    country
) {
    console.log("Inside db.addApplication");
    return db.query(
        `INSERT INTO application (user_id, contact_id, company_id, job_title, job_desc, url, city, country)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING id`,
        [
            user_id,
            contact_id,
            company_id,
            job_title,
            job_desc,
            url,
            city,
            country
        ]
    );
};

exports.addProgressApplied = function(user_id, applied, app_id) {
    console.log("Inside db.addProgressApplied");
    return db.query(
        `INSERT INTO progress (user_id, applied, app_id)
        VALUES ($1, $2, $3)
        RETURNING id`,
        [user_id, applied, app_id]
    );
};

// exports.getApplicationsData = function ()
