const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passport = require("passport");

// Init app
const app = express();

// Middlewares

// Form Data Middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
// Json Body Middleware
app.use(bodyParser.json());

// Cors Middleware
app.use(cors());

// Set up the static directory
app.use(express.static(path.join(__dirname, "public")));

// Passport Middleware
app.use(passport.initialize());
require("./config/passport")(passport);

// Database Config
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Database connected ${db}`);
  })
  .catch((err) => {
    console.log(`Unable to connect ${err}`);
  });

// Users route
const users = require("./routes/api/users");
app.use("/api/users", users);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT} `);
});
