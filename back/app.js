const createError = require("http-errors");
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const methodOverride = require("method-override");
const MongoStore = require("connect-mongo")(session);

// Routers
const gamestartRouter = require("./routes/gamestart");
const loginRouter = require("./routes/login");
const signUpRouter = require("./routes/signup");
const leagueRouter = require("./routes/league");
const logoutRouter = require("./routes/logout");
const sessioncheckRouter = require("./routes/sessioncheck");
const currentleagueRouter = require("./routes/currentleague");

const app = express();

// Подключаем mongoose.
const mongoose = require("mongoose");
require("dotenv").config();

// задать имя базы монго


mongoose.Promise = global.Promise;
const db = mongoose.connection;
mongoose.connect(process.env.ATLAS_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(
  session({
    store: new MongoStore({
      mongooseConnection: db
    }),
    key: "user_sid",
    secret: "oh klahoma",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 99999999,
    }
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

// Allows you to use PUT, DELETE with forms.
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      // look in urlencoded POST bodies and delete it
      const method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// routes
app.use("/api", leagueRouter);
app.use("/api/login", loginRouter);
app.use("/api/signup", signUpRouter);
app.use("/api/gamestart", gamestartRouter);
app.use("/api/currentleague", currentleagueRouter);
app.use("/api/sessioncheck", sessioncheckRouter); //commented for now - attempting to merge with api/login
app.use("/api/logout", logoutRouter);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
