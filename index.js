const express = require("express"); 
const app = express();
const body_parser = require('body-parser');
const urlencoded_parser = body_parser.urlencoded({extended:true});
app.set('view engine','ejs');

console.log("Server Running on http://localhost:4693");

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.listen(4693);