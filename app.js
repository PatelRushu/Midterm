const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const student = require('./routes/student.routes')

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
//MongoDB connection
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.connect(dbConfig.url, {
    useNewUrlParser:true
}).then(() =>console.log("DB connection successful"))
   .catch(err =>{
     console.log("DB connection is not successful...", err);
   })


app.get('/', (req, res)=>{
    res.json({
        "message": "It is working!!"
    })
})


require('./routes/student.routes')(app)

app.listen(4010, ()=>{
    console.log('server is running!!!!!!!')
})
