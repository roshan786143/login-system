const express = require('express');
const router = express.Router();
const credential = {
    email : 'roshanbabu.kng@gmail.com',
    password : 98127634
}

router.post('/login',(req,res)=>{
    if(req.body.email==credential.email && req.body.password==credential.password){
        req.session.user=req.body.email;
        // res.end('login successful.');
    email : 'roshanbabu.kng@gmail.com',
        res.redirect('/route/dashboard');
    }else{
        res.send("<h3>invalid Username</h3>");
        res.end();
    }
})

router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user});
    }else{
        res.send('Unauthorised User');
    }
})

router.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
            res.send('Error');
        }else{
            res.render('base',{title:"Express",logout:"logout Successfully...!"});
        }
    })
})

module.exports = router;