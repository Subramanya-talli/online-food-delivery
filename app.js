const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    res.send("Hello Here from App")
})

const port = 3000;

app.listen(port, ()=>
{
    console.log(`Server has been started and running in the port ${port}`);
})
