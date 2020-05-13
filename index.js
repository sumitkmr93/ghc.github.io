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

app.get('/login',(req,res)=>{
    res.sendFile(__dirname + '/login.html');
});

app.get('/listsapp',(req,res)=>{
    res.sendFile(__dirname + '/listsapp.html');
});

app.get('/embeddedreport',(req,res)=>{
    res.sendFile(__dirname + '/report.html')
});

app.listen(4693);