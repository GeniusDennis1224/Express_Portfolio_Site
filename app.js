var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var aboutmeRouter = require("./routes/about_me");
var projectsRouter = require("./routes/projects");
var servicesRouter = require("./routes/services");
var contactmeRouter = require("./routes/contact_me");
var submitRouter = require("./routes/submit");

var app = express();

const port = 3000;
let isDataCompleted = false;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//将routes里面的index.js路由挂在到主app中
app.use("/", indexRouter);
app.use("/", aboutmeRouter);
app.use("/", projectsRouter);
app.use("/", servicesRouter);
app.use("/", contactmeRouter);
app.use("/users", usersRouter);
app.use("/", submitRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
  next();
});

/* app.use(function checkSubmissionData(req, res, next) {
  const fName = req.body["fName"];
  const lName = req.body["lName"];
  const email = req.body["emails"];
  const phone = req.body["phone"];

  console.log(fName + lName + email + phone);

  if (fName != null && lName != null && email != null && phone != null) {
    isDataCompleted = true;
  } else {
    console.log(
      "Data missing! Please enter your first name, last name, email and phone number."
    );
  }
}); */

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
