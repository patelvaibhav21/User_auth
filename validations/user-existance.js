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



exports.loginData = (req, res , next) => {

    let {user_name , password} = req.body;

    connection.query(`SELECT user_name , password FROM register WHERE user_name = ? AND password = ?` , [user_name , password] , (err , result) => {


        if(err) throw err;
        console.log(result)
        if(result.length == 0){
            res.redirect('/')
        }else{
            next();
        }
    })


}
