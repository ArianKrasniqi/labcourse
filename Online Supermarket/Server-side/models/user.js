const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = mongoose.Schema({
    
    name: {
        type: String,
        maxlengh: 50,
    },
    lastname: {
        type: String,
        maxlengh:50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    role: {
        type: Number,
        default: 0,
    },
    token: {
        type: String,
    },
    tokenExp: {
        type: Number,
    }
});

// funcion for hash password

userSchema.pre('save', function( next ) {
    var user = this;    

    if(user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) 
            return next(err);

            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) 
                return next(err);

                user.password = hash
            })
        })
    } else {
        next ()
    }
});

const User = mongoose.model('User', userSchema);

module.exports = { User }