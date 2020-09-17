// jshint esversion:6
const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello World</h1>")
});

app.get("/contact", function(req, res){
 res.send("Contact me at: kodchapong.best@mail.kmutt.ac.th")
});


app.get("/about", function(req, res){
  res.send("My name is Best and I love travelling.")
 });

 app.get("/hobbies", function(req, res){
  res.send("<ul><li>Coffee</><li>Code</><li>Beer</></ul>")
 });

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
