const express=require('express');
const exphnd=require('express-handlebars');


var app=express();

app.engine('handlebars',exphnd({defaultLayout:'mainpage'}));
app.set('view engine', 'handlebars');
app.use(express.static('views/static'));
app.use(express.urlencoded());


app.post('/getdata', (req,res)=>{
    var name=req.body.getname;
    var address=req.body.getaddress;
    var place=req.body.getplace;
    var mobile=req.body.getnumber;
    var email=req.body.getemail;
    console.log(name);
    console.log(address);
    console.log(place);
    console.log(email);
    console.log(mobile);
});

app.post('/login', (req,res)=>{

    var user=req.body.username;
    var pass=req.body.password;

    if(user=="admin"&&pass=="1234"){
        res.render("success");
    }
    else{
        res.render("failed");
    }
});

 app.get('/', (req,res)=>{
     res.render('index',{name:'Tom'});

 });
 app.get('/home', (req,res)=>{
     res.send(' [{"name":"Tom","Age":23},{"name":"Riya","Age":22},{"name":"Manu","Age":24}]');
 });
 app.get('/about',(req,res)=>{
     res.render('about');
 });
 app.get('/contact', (req,res)=>{
     res.render('contact');
 });
 app.get('/gallery', (req,res)=>{
     res.render('gallery');
 });

app.listen(process.env.PORT || 3000,()=>{
    console.log('web App running successfully');
});