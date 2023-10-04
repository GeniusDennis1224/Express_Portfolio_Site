/*
---------------------------------
FILENAME: services.js
PURPOSE: To define the services router for the home router.
AUTHOR: Gang Liu
LAST MODIFIED: 03-10-2023
---------------------------------
*/

const express = require("express");
const router = express.Router();

router.get("/services", (req, res, next) => {
  res.render("services.ejs", { title: "services" });
});

module.exports = router;
