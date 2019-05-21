var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");

module.exports = function(app) {
  //Get all examples
 app.get("/api/community", function(req, res) {
    db.Community.findAll().then(function(Community) {
      console.log(Community);
      res.json(Community);
   });
 });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
