const express = require('express');
const mongoose = require('mongoose');
const routes = require('../src/routes')

const app = express();


mongoose.connect('mongodb+srv://heldersantosc:heldersantos2020@mydatabase-lqs2l.azure.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

app.use(express.json()); /** express lê como json */
app.use(routes);



app.listen(3300);