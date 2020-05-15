const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');

// DB Connection
mongoose.connect(config.mongoURI,
                { useNewUrlParser: true,
                    useUnifiedTopology: true,
                   useCreateIndex: true,
                   useFindAndModify: false
                })
                .then(() => console.log("connected successfully "))
                .catch(err => console.error(err));

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors());

app.use('/api', require('./routes/users'))

app.listen(5000);