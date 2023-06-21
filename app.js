const express = require('express');
const app = express();
const db = require('./config/db');
const routes = require('./routes/routes');

app.use(express.json());
app.use('/', routes);

// Start the server
const port = process.env.PORT || 5120;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(bodyParser.json());
//MongoDB connection
const dbConfig = require('./config/db');
const mongoose = require('mongoose');

mongoose.connect(dbConfig.url, {
    useNewUrlParser:true
}).then(()=>console.log("DB connection successful"))
    .catch(err =>{
        console.log("DB connection is not successful... ", err);
    })


app.get('/', (req, res)=>{
    res.json({  
        "message": "It is working!!"
    })
})

require('./routes/routes')(app)

app.listen(5120, ()=>{
    console.log('server is running!!!!!')
})

