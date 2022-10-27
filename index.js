let express=require('express');
let app=express();


app.get('/hi',(req,res)=>{
    res.send('Hello World');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})