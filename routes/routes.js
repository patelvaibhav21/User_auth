const express = require('express');
const path = require('path')
const router = express.Router();
const validation = require('../validations/user-existance')
const {home ,errorPage , signup, getForm , loginForm , login} = require('../controller/auth_pages');



router.use(express.urlencoded({extended:true}));
router.use(express.json());

let staticPath = path.join(__dirname , ".." , 'public')
console.log(staticPath);
router.use(express.static(staticPath))



router.get('/home' , home)
// router.get('*' , errorPage)
router.get( '/signup' , getForm)
router.post('/register' , validation.exist , signup)
router.get('/loginform' ,loginForm);
router.post('/login' , validation.loginData ,login)




module.exports = router;