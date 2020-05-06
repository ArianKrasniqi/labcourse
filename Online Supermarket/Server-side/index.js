const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ArdianFejzulli:12341234@onlinesupermarket-6y05b.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("connected successfully "))
.catch(err => console.error(err));

app.get('/', (req, res) => {
    res.send('hello worlddd')
});

app.listen(5000);