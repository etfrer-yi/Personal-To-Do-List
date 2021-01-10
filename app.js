const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = [];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); // without this,
// AND without placing our CSS file within the publci folder, the server cannot serve up the link
// To serve static files such as images, CSS files, and JS files, use express.static

app.get("/", function(req, res){
  let day = date(); // we're calling the constant date, which in fact is a function
  // notice how now, we are adding the brackets
  res.render("list", {listTitle: day, newListItems: items});
})

app.post("/", function(req, res){
  // console.log(req.body);
  let item = req.body.newItem; // we save the variable item, then
  // we trigger a redirect to app.get for the home page

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
})

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
})

app.post("/work", function(req, res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.listen(3000, function(){
  console.log("Server started on port 3000");
})
