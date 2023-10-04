/*
---------------------------------
FILENAME: contact_me.js
PURPOSE: To define the contact_me router for the home router.
AUTHOR: Gang Liu
LAST MODIFIED: 03-10-2023
---------------------------------
*/

const express = require("express");
const router = express.Router();

router.get("/contact_me", (req, res, next) => {
  res.render("contact_me.ejs", { title: "contact me" });
});

module.exports = router;
