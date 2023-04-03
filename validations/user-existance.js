const connection = require('../database/db');


exports.exist = (req, res , next) => {


    connection.query(`SELECT user_name FROM register WHERE user_name = ?`,[req.body.user_name] , (err , result) => {
        
        if(err){
            console.log("user not existed");
        }
        if(result.length !== 0 ){
            res.render('signup.ejs' , {alert: "user is existed"})
        }
        else{
            next();
        }
    })


}