const express = require("express");
const app = express();
const compression = require("compression"); // Compress text files gzip
// Security
const db = require("./utils/db");
const helmet = require("helmet");
const csurf = require("csurf");
// Passwords
const { hash, compare } = require("./utils/bc");

// Socket.io
const server = require("http").Server(app);
const io = require("socket.io")(server, { origins: "localhost:8080" });

////////////////
// Middleware //
////////////////
app.use(compression());
app.use(express.json());
app.use(express.static("./public"));
app.use(express.static("./assets"));
app.use(express.static("./utils"));

app.use(
    express.urlencoded({
        extended: false
    })
);

// COOKIE SESSION //
const cookieSession = require("cookie-session");
const cookieSessionMiddleware = cookieSession({
    secret: `I'm always angry.`,
    maxAge: 1000 * 60 * 60 * 24 * 90
});

app.use(cookieSessionMiddleware);
io.use(function(socket, next) {
    cookieSessionMiddleware(socket.request, socket.request.res, next);
});

app.use(helmet());

app.use(csurf());

app.use(function(req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

/////////////////
// Environment //
/////////////////

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

////////////
// Routes //
////////////

app.get("/welcome", function(req, res) {
    console.log("GET welcome route");
    if (req.session.userId) {
        console.log("Redirecting /");
        res.redirect("/");
    } else {
        console.log("No userId");
        res.sendFile(__dirname + "/index.html");
    }
});

// LOGOUT //
app.get("/logout", (req, res) => {
    req.session = null;
    res.redirect("/welcome");
});

// REGISTER
app.post("/register", (req, res) => {
    console.log("POST register route");
    console.log("pw: ", req.body.password);
    hash(req.body.password)
        .then(hashedPassword => {
            console.log("hashed pw: ", hashedPassword);
            console.log("firstname: ", req.body.firstName);

            return db
                .addUser(
                    req.body.firstName,
                    req.body.lastName,
                    req.body.email,
                    hashedPassword
                )
                .then(data => {
                    console.log("POST /register success!!");
                    console.log("data in addUser: ", data);

                    req.session.userId = data.rows[0].id;

                    console.log("hash addUser userId: ", req.session.userId);

                    res.json({
                        success: true
                    });

                    // res.redirect("/");
                })
                .catch(err => {
                    console.log("Error in POST /register: ", err);
                    res.json({
                        success: false
                    });
                });
        })
        .catch(err => {
            console.log("Error in hash pw: ", err);
        });
});

// LOGIN //

app.post("/login", async (req, res) => {
    console.log("POST login route");
    let { email, password } = req.body;
    console.log("Login req.body: ", req.body);

    try {
        let hashedPassword = await db.getUser(email);
        let correctPassword = await compare(
            password,
            hashedPassword.rows[0].password
        );

        if (correctPassword) {
            console.log("Passwords match");
            req.session.userId = hashedPassword.rows[0].id;
            console.log(
                "hashedPassword.rows[0].id: ",
                hashedPassword.rows[0].id
            );

            console.log("req.session.userId: ", req.session.userId);
            res.json({
                success: true
            });
        } else {
            res.json({
                success: false
            });
        }
    } catch (err) {
        console.log("Error POST/login route | compare", err);
        res.json({
            success: false
        });
    }
});

// FORMS //
app.post("/application", async (req, res) => {
    console.log("in POST /application");
    // console.log("Application req.body: ", req.body.appObj);

    const { appObj } = req.body;
    // console.log("appObj: ", appObj);

    try {
        let companyId = await db.addCompany(appObj.jobCompany);
        console.log("companyId: ", companyId.rows[0].id);

        let contactId = await db.addContact(
            companyId.rows[0].id,
            appObj.jobContactFirst,
            appObj.jobContactLast
        );

        console.log("contactId: ", contactId.rows[0].id);

        console.log("UserId: ", req.session.userId);
        let applicationId = await db.addApplication(
            req.session.userId,
            companyId.rows[0].id,
            contactId.rows[0].id,
            appObj.jobTitle,
            appObj.jobDesc,
            appObj.jobUrl,
            appObj.jobCity,
            appObj.jobCountry
        );

        let progressApplied = await db.addProgressApplied(
            req.session.userId,
            appObj.jobApplied,
            applicationId.rows[0].id
        );

        console.log("progress Id", progressApplied.rows[0].id);

        res.json({ success: true });
    } catch (err) {
        console.log("Error in POST /application: ", err);
        res.json({
            success: false
        });
    }
});

app.get("/allapplications", (req, res) => {
    console.log("in GET /allapplications");
    console.log("USER ID: ", req.session.userId);
    return db
        .getAllApplications(req.session.userId)
        .then(data => {
            // console.log("Resp in GET /allapplications: ", data.rows);
            let { rows } = data;
            res.json({
                success: true,
                rows
            });
        })
        .catch(err => {
            console.log("Error in GET /allapplications: ", err);
        });
});

app.get("/allpplicationslist", (req, res) => {
    console.log("In GET /allapplicationslist");
    console.log("NEW USER ID: ", req.session.userId);
    return db
        .getApplicationsList(req.session.userId)
        .then(data => {
            // console.log("DATA: ", data.rows);
            let { rows } = data;
            res.json({
                success: true,
                rows
            });
        })
        .catch(err => {
            console.log("Err in /allpplicationslist: ", err);
        });
});

app.post("/delete-application/:app_id", (req, res) => {
    console.log("In POST /delete-application: ", req.params.app_id);

    return db
        .deleteApplication(req.params.app_id)
        .then(data => {
            console.log("POST /deleteapplication success: ", data);
            res.json({ success: true });
        })
        .catch(err => {
            console.log("Error in db.deleteapplication: ", err);
        });
});

app.post("/progress-update", (req, res) => {
    console.log("In POST /progress-update: ", req.params);

    const {
        currentAppId,
        applied,
        app_response,
        online_int,
        inperson_int,
        offer,
        offer_declined,
        offer_accepted
    } = req.body;
    console.log(
        currentAppId,
        applied,
        app_response,
        online_int,
        inperson_int,
        offer,
        offer_declined,
        offer_accepted
    );
    return db
        .updateProgress(
            currentAppId,
            applied,
            app_response,
            online_int,
            inperson_int,
            offer,
            offer_declined,
            offer_accepted
        )
        .then(data => {
            console.log("data: ", data);
            res.json({ success: true });
        })
        .catch(err => {
            console.log("Error in POST updateProgress: ", err);
        });
});

// DEFAULT //
app.get("*", function(req, res) {
    console.log("GET * route");
    if (!req.session.userId) {
        res.redirect("/welcome");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.listen(process.env.PORT || 8080, function() {
    console.log("I'm listening.");
});
