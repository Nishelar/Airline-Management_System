const express=require('express');
const { PORT, logger } = require('./config');
const ApiRouter = require('./Routes');

const app=express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use('/api',ApiRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`);
    //logger.info({level:"info",message:`Server is running on PORT : ${PORT}`})
})