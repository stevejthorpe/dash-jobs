const express = require("express");
const app = express();
const compression = require("compression"); // Compress text files gzip
const cookieSession = require("cookie-session");
const db = require("./utils/db");
const helmet = require("helmet");
const csurf = require("csurf");
const { hash, compare } = require("./utils/bc");

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

app.use(
    cookieSession({
        secret: "I'm always angry.",
        maxAge: 1000 * 60 * 60 * 24 * 14
    })
);

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
        res.redirect("/");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

// LOGOUT //
app.get("/logout", (req, res) => {
    req.session.userId = null;
    res.redirect("/welcome");
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

app.listen(8080, function() {
    console.log("I'm listening.");
});
