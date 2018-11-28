require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const passport = require("passport");
const cors = require("cors");
// const bodyParser = require("body-parser")
// const users = require("./routes/api/users");

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/coffeematch", {useNewUrlParser: true})
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));;

var Users = require("./routes/Users")

app.use('/users', Users)

// Passport middleware
// app.use(passport.initialize());
// // Passport config
// require("./config/passport")(passport);
// // Routes
// app.use("/api/users", users);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
