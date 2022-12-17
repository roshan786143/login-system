const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuid = require('uuid');
const path = require('path');
const session = require('express-session');
const ejs = require('ejs');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views','views');

app.use('/static',express.static(path.join(__dirname,'public/css')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')));

app.get('/',(req,res)=>{
    res.render('base',{title:'instagram'});
})

app.listen(PORT,()=>console.log('Server has started.'))