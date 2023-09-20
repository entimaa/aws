import express from 'express';

const app= express();


app.use('/',(req,res)=>{
    return res.status(200).json({message:"heloo ndsbj "});
})

app.use(express.urlencoded());
app.use(express.json());

app.listen(3001);