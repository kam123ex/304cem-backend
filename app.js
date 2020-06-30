const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const morgan = require("morgan");
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

app.use(morgan("dev"));

// Database Config
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`Database connected ${db}`);
  })
  .catch((err) => {
    console.log(`Unable to connect ${err}`);
  });
mongoose.Promise = global.Promise;

// Routers
const users = require("./routes/api/users");
const diaries = require("./routes/api/diaries");
app.use("/api/users", users);
app.use("/api/diaries", diaries);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT} `);
});
