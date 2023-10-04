/*
---------------------------------
FILENAME: submit.js
PURPOSE: To define the submit router for the home router.
AUTHOR: Gang Liu
LAST MODIFIED: 03-10-2023
---------------------------------
*/

const express = require("express");
const router = express.Router();

router.post("/submit", (req, res, next) => {
  const fName = req.body["fName"];
  const lName = req.body["lName"];
  const email = req.body["emails"];
  const phone = req.body["phone"];

  if (fName != null && lName != null && email != null && phone != null) {
    console.log(fName + lName + email + phone);
    res.redirect("/index");
  } else {
    console.log(
      "Data missing! Please enter your first name, last name, email and phone number."
    );
    res.redirect("/contact_me");
  }
});

module.exports = router;
