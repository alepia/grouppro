//Modules
const express = require("express");
const knexFile = require("./knexfile").development;
const knex = require("knex")(knexFile);
const { engine } = require("express-handlebars");
const fs = require("fs");
const flash = require("express-flash");
const session = require("express-session");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const EcommerceRouter = require("./router/ecommerceRouter");
const EcommerceService = require("./service/ecommerceService");
const products = require("./public/js/products");
require("dotenv").config();

const ecommerceService = new EcommerceService(knex);
//port
const port = 8080;

// Express middleware set up
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

//flash
app.use(flash());

//Hnadlebars set up
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.use(express.static("public"));

//Set up passportJS
app.use(passport.initialize());
app.use(passport.session());

//Middleware to check if the user is authenticated
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

function notLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) return next();
  res.redirect("/");
}

//Set up Local Strategy
//SignUp
passport.use(
  "local-signup",
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      //Check if the user exists in the database
      let user = await knex("users").where({ email }).first(); // {id: 1, email..} | undefined
      if (user) {
        //if user exists then don't authenticate the user
        return done(null, false, {
          message: "Email already exists in the database",
        });
      }

      const hash = await bcrypt.hash(password, 10); //hash password
      let newUser = {
        email,
        password: hash,
      };
      //insert new user credentials to the database
      const id = await knex("users").insert(newUser).returning("id"); //[{id: 1}]
      newUser.id = id[0]["id"];
      //authenticate user
      return done(null, newUser);
    }
  )
);

//Login
passport.use(
  "local-login",
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      const user = await knex("users").where({ email }).first();

      if (!user) {
        return done(null, false, {
          message: "User does not exist in the database",
        });
      }
      const result = await bcrypt.compare(password, user.password);
      console.log("login", user);
      return result
        ? done(null, user)
        : done(null, false, { message: "Incorrect Password" });
    }
  )
);

//Serialize
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//Deserialize
passport.deserializeUser(async (id, done) => {
  const user = await knex("users").where({ id }).first();
  return user ? done(null, user) : done(null, false);
});

//Render
app.use(
  "/api/products",
  new EcommerceRouter(express, ecommerceService).router()
);

app.get("/test", (req, res) => {
  ecommerceService.userName().then((data) => {
    res.json(data);
  });
});

app.get("/", (req, res) => {
  ecommerceService.list().then((data) => {
    res.render("home", {
      title: "Home",
      style: "styles.css",
      homepro: data,
    });
  });
});

// // Products page
app.get("/shop", (req, res) => {
  ecommerceService.list().then((data) => {
    res.render("products", {
      title: "Shop",
      style: "styles.css",
      products: data,
    });
  });
});
// // products end

app.get("/login", notLoggedIn, (req, res) => {
  res.render("login", {
    title: "Login",
    style: "styles.css",
  });
});

app.get("/signup", notLoggedIn, (req, res) => {
  res.render("signup", {
    title: "SignUp",
    style: "styles.css",
  });
});

app.get("/account", isLoggedIn, (req, res) => {
  ecommerceService.userName().then((data) => {
    res.render("account", {
      title: "Account",
      style: "styles.css",
      user: data,
    });
  });
});

app.get("/checkout", isLoggedIn, (req, res) => {
  ecommerceService.getCart().then((data) => {
    res.render("checkout", {
      title: "Checkout",
      style: "styles.css",
      carro: data,
    });
  });
});

app.get("/checkout", notLoggedIn, (req, res) => {
  res.render("login", {
    title: "Login",
    style: "styles.css",
  });
});

//Handle Local Login/Signup
//Signup Request
app.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/account",
    failureRedirect: "/signup",
    failureFlash: true,
  })
);

//Login Request
app.post(
  "/login",
  passport.authenticate("local-login", {
    successRedirect: "/account",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

//Logout Request
app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return err;
    }
  });
  res.redirect("/login");
});

app.listen(port, () => {
  console.log("Listening to ", port);
});
