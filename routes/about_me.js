/*
---------------------------------
FILENAME: about_me.js
PURPOSE: To define the about_me router for the home router.
AUTHOR: Gang Liu
LAST MODIFIED: 03-10-2023
---------------------------------
*/

var express = require("express");
var router = express.Router();

/** Get about_me page */
router.get("/about", (req, res, next) => {
  res.render("about_me.ejs", { title: "about me" });
});

module.exports = router;
