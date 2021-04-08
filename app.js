const express = require('express');//imported the package

const app = express();//executed

//Routes the CRUD will be here - post,delete,pacth(updates),get
app.get('/',(req, res) =>{//using GET a message, post give submit, delete I want remove some post, PATCh updates
    res.send('We are on home');
});

//Connect to DB
// mongoose.connect(
//     process.env.DB_CONNECTION, { useNewUrlParser: true},//for avoid the deprecationWarning at the terminal
//     () => console.log('connected to DB!')
// );



//How to we start listening to the server
app.listen(3000);