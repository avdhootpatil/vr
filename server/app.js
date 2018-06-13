const express = require('express');
const graphHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();


// mongoose.connect('');
// mongoose.connection.once('open' , () => {
//     console.log("Connected to database");
// });

app.listen(4000, () => {
    console.log('Listening on port 4000.....');
});



app.use('/graphql',graphHTTP({
    schema : schema,
    graphiql :true
}));