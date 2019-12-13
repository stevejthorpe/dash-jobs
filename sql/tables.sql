DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
       id SERIAL PRIMARY KEY,
       image_id SERIAL UNIQUE,
       firstname VARCHAR(255) NOT NULL CHECK (firstname != ''),
       lastname VARCHAR(255) NOT NULL CHECK (lastname != ''),
       email VARCHAR(255) NOT NULL UNIQUE CHECK (email != ''),
       password VARCHAR(255) NOT NULL CHECK (password != ''),
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS contacts CASCADE;
CREATE TABLE users(
       id SERIAL PRIMARY KEY,
       user_id INT REFERENCES users(id) NOT NULL UNIQUE,
       company_id INT REFERENCES company(id),
       firstname VARCHAR(255) NOT NULL CHECK (firstname != ''),
       lastname VARCHAR(255) NOT NULL CHECK (lastname != ''),
       email VARCHAR(255) NOT NULL UNIQUE CHECK (email != ''),
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS company CASCADE;
CREATE TABLE users(
       id SERIAL PRIMARY KEY,
       user_id INT REFERENCES users(id) NOT NULL UNIQUE,
       contact_id INT REFERENCES contacts(id),
       company_name VARCHAR(255) NOT NULL CHECK (name != ''),
       url VARCHAR(255)  NOT NULL CHECK (url != ''),
       address1 VARCHAR(255),
       postcode VARCHAR(255),
       city VARCHAR(255),
       country VARCHAR(255),
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS application CASCADE;
CREATE TABLE users(
       id SERIAL PRIMARY KEY,
       user_id INT REFERENCES users(id) NOT NULL UNIQUE,
       company_id INT REFERENCES company(id),
       job_title VARCHAR(255) NOT NULL CHECK (name != ''),
       job_desc  VARCHAR(255),
       url VARCHAR(255)  NOT NULL CHECK (url != ''),
       city VARCHAR(255),
       country VARCHAR(255),
       cv_version INT,
       cl_version INT,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS progress CASCADE;
CREATE TABLE users(
       id SERIAL PRIMARY KEY,
       user_id INT REFERENCES users(id) NOT NULL UNIQUE,
       app_id INT REFERENCES application(id),
       applied BOOLEAN,
       app_response BOOLEAN,
       online_int BOOLEAN,
       inperson_int BOOLEAN,
       offer BOOLEAN,
       offer_declined BOOLEAN,
       offer_accepted BOOLEAN,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
