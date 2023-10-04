/*
---------------------------------
FILENAME: projects.js
PURPOSE: To define the projects router for the home router.
AUTHOR: Gang Liu
LAST MODIFIED: 03-10-2023
---------------------------------
*/

const express = require("express");
const router = express.Router();

router.get("/projects", (req, res, next) => {
  res.render("./projects.ejs", { title: "projects" });
});

module.exports = router;
