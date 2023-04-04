const connection = require("../database/db");
const path = require("path");

const staticPath = path.join(__dirname, "..", "public");

exports.home = (req, res) => {
  res.sendFile(`${staticPath}/home.html`);
};

exports.errorPage = (req, res) => {
  res.sendFile(`${staticPath}/404.html`);
};


//get signupForm
exports.getForm = (req, res) => {
  res.sendFile(`${staticPath}/signup.html`);
};


//store data in the sign in page
exports.signup = (req, res) => {
  console.log(req.body.user_name);
  const {
    full_name,
    user_name,
    email,
    phone,
    password,
    conf_password,
    gender,
  } = req.body;

  if (password !== conf_password) {
    res.render("signup.ejs", { alert: "Please Enter Valid Password" });
  } else {
    connection.query(
      "INSERT INTO register SET full_name = ? , user_name = ? , email = ? , phone = ? , password = ?  ,  gender = ?",
      [full_name, user_name, email, phone, password, gender],
      (err, result) => {
        if (err) throw err;
        res.redirect("/loginform");
      }
    );
  }
};

//get login form

exports.loginForm = (req, res) => {
  res.render("login.ejs");
};


//check data in login 
exports.login = (req, res) => {
  console.log("req body is \n");
  console.log(req.body);

  res.redirect("/home");
};
