const express = require("express");
const app = express();


app.set("view engine", "ejs");
app.get('/', (req, res)=>{
    res.render("home");
})

const port = 3000;

app.listen(port, ()=>
{
    console.log(`Server has been started and running in the port ${port}`);
})
