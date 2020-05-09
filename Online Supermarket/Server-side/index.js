const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');

const { User } = require('./models/user');
const { auth } = require('./middleware/auth');

// DB Connection
mongoose.connect(config.mongoURI,
                 { useNewUrlParser: true, useUnifiedTopology: true })
                .then(() => console.log("connected successfully "))
                .catch(err => console.error(err));

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(cookieParser());


// http method
app.get("/api/staff/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req._id,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role
    })
});

app.post('/api/staff/register', (req, res) => {
    const user = new User(req.body)

    user.save((err, userData) => {
        if(err) 
        return res.json({ 
            success: false, 
            err 
        })

        return res.status(200).json({ 
            success: true,
            data: userData
        })
    })
});

app.post('/api/staff/login', (req, res) => {
    //find email
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({ 
                loginSuccess: false,
                message: "Auth failed, email not found"
            });
        }    
    //compare password
    user.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch) {
            return res.json({ 
                loginSuccess: false,
                message: "Wrong password"
            });
        }        
    })
    //generate token
    user.generateToken((err, user) => {
        if(err) 
            return res.status(400).send(err);
        res.cookie("x_auth", user.token).status(200).json({
            loginSuccess: true
        })
    })
    
    })
});

app.get("/api/staff/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id}, { token: "" }, (err, doc) => {
        if(err) 
            return res.json({ 
                success: false, 
                err 
            });

        return res.status(200).send({
            success: true
        });    
    })
});

app.listen(5000);