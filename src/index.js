const express=require('express');
const { PORT, logger } = require('./config');
const ApiRouter = require('./Routes');
const {Flight} = require('./models');


const app=express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use('/api',ApiRouter)

app.listen(PORT,async ()=>{
    console.log(`Server is running on PORT : ${PORT}`);
})