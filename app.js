const express = require('express');
const app = express();
const port= 4500;
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const user_login = require('./Routes/user_login');
const vendor_login = require('./Routes/vendor_login');
const user_signup = require('./Routes/user_signup');
const vendor_signup = require('./Routes/vendor_signup');

mongoose.connect('mongodb://127.0.0.1:27017/g_store',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(cors());
app.use(express.json());

app.set('views', path.join(__dirname,'./Templates'));
app.set('view engine','hbs');

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static('public'));

app.use('/user-login',user_login);
app.use('/vendor-login',vendor_login);
app.use('/user-signup',user_signup);
app.use('/vendor-signup',vendor_signup);

app.listen(port,()=>{
    console.log(`App running localhost ${port}`);
});