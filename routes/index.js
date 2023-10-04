/*
---------------------------------
FILENAME: index.js
PURPOSE: To define the home router for the home router.
AUTHOR: Gang Liu
LAST MODIFIED: 03-10-2023
---------------------------------
*/

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index.ejs", { title: "homepage" });
});

module.exports = router;
