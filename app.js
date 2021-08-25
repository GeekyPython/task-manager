const express = require('express');
const tasks = require('./routes/tasks');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const port = 4000;

const startDB = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        
        app.listen(port, () => {
            console.log(`listening to port ${port}...`);
        });
    }catch(err){
        console.log(err);
    }
}



app.use(express.json());
app.use(express.static('./public'));
app.use('/api/v1/tasks',tasks);


startDB();


