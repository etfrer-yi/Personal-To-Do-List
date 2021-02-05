
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const stoic = require(__dirname + "/stoic-quotes.js");
const mongoose = require("mongoose");

const app = express();
app.set('view engine', 'ejs'); // assumes a views directory containing a .ejs file exists
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); // without this,
// AND without placing our CSS file within the publci folder, the server cannot serve up the link
// To serve static files such as images, CSS files, and JS files, use express.static

// my MongoDB Atlas account
mongoose.connect("mongodb+srv://rerfte:rerfte@9229656278@cluster0.nljcf.mongodb.net/mychorelistDB?retryWrites=true&w=majority/mychorelistDB", {useNewUrlParser:true, useUnifiedTopology: true});


const choreSchema = new mongoose.Schema({name: String}, {
        writeConcern: {
          j: true,
          wtimeout: 1000
        }
      })

const Chore = mongoose.model("Chore", choreSchema);

app.get("/", function(req, res) {
  let day = date(); // we're calling the constant date, which in fact is a function
  // notice how now, we are adding the brackets

  Chore.find({}, function(err, foundItems){
    res.render("list", {
      listTitle: day,
      newListItems: foundItems,
      randomStoicQuote: stoic.randomQuote,
      stoicAuthor: stoic.author
    });
  })
})

app.post("/", function(req, res) {
  // console.log(req.body);

  // we save the variable item, then
  // we trigger a redirect to app.get for the home page
  let itemName = req.body.newItem;
  let chore = new Chore ({
    name: itemName
  });
  chore.save(); // no need to insert the item, just save it

  res.redirect("/");
})

app.post("/delete", function(req, res){
  const checkedItemID = req.body.checkbox;
  //console.log(checkedItemID);
  Chore.deleteOne({_id: checkedItemID}, function(err){
    if (!err) {
      res.redirect("/");
    }
  })
});

app.post("/deleteAll", function(req, res){
  Chore.deleteMany({}, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  })
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() { // Allows Heroku to choose a port
  console.log("Server started successfully");
})
