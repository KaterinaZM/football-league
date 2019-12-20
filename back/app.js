const createError = require("http-errors");
const express = require("express");
const session = require("express-session");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const methodOverride = require("method-override");
const MongoStore = require("connect-mongo")(session);

const indexRouter = require("./routes/index");
const gamestartRouter = require("./routes/gamestart");
const loginRouter = require("./routes/login");
const signUpRouter = require("./routes/signup");
const leagueRouter = require("./routes/league");
const logoutRouter = require("./routes/logout");
const eventRouter = require("./routes/event");
const profileinfoRouter = require("./routes/profileinfo");
const currentleagueRouter = require("./routes/currentleague");
const resultRouter = require("./routes/result");
const userinleagueRouter = require("./routes/userinleague");
const app = express();

// Подключаем mongoose.
const mongoose = require("mongoose");
require("dotenv").config();

// задать имя базы монго
// mongoose.connect(process.env.ATLAS_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
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
      expires: 600000000000
    }
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "build")));

// Allows you to use PUT, DELETE with forms.
app.use(
  methodOverride(function(req, res) {
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
app.use("/", indexRouter);
app.use("/api/gamestart", gamestartRouter);
app.use("/api", leagueRouter);
app.use("/api/currentleague", currentleagueRouter);
app.use("/api/login", loginRouter);
app.use("/api/signup", signUpRouter);
app.use("/api/profileinfo", profileinfoRouter);
app.use("/api/logout", logoutRouter);
app.use("/api/event", eventRouter);
app.use("/api/result", resultRouter);
app.use("/api/userinleague", userinleagueRouter);

// Heroku deployment
if (process.env.NODE_ENV === "PRODUCTION") {
  app.get("*", function(req, res) {
    res.sendFile(__dirname + "/");
  });
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
