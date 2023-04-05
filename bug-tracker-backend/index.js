const express = require('express');
const cors = require('cors');
const connection = require('./config/db');
const userController = require('./controllers/userController');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.send('welcome here')
})

app.use('/user', userController)

app.listen(5000, async (req, res)=>{
    try{
        await connection
        console.log('db is connected')
    }
    catch(err){
        console.log(err)
    }
    console.log('server is running')
})