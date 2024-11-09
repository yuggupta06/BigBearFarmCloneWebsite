const ITEMS = require('./data.cjs');
require("dotenv").config()
const express=require('express');
const ejs=require('ejs');
const bodyparser=require('body-parser');
const path =require("path")
const mongoose = require('mongoose');
const lodash=require("lodash")
//  for sessions and google authentication system
const passport=require("passport")
const session=require("express-session")
const passportLocalMongoose=require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate=require("mongoose-findorcreate")


const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
    secret:"our little secret",
    resave:false,                                                     
    saveUninitialized:false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}))

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/bearFarm")

const userSchema=new mongoose.Schema({
    username:String,
    profile_img:String,
    googleId:String,
    items_list:[{
      name:String,
      price:Number,
      quantity:Number
    }]
})

userSchema.plugin(passportLocalMongoose); 
userSchema.plugin(findOrCreate); 

const User=mongoose.model("User",userSchema)

passport.use(User.createStrategy());

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user.id, username: user.username });
    });
});
  
passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
});


passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/farm",
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id ,username:profile.displayName,profile_img:profile.photos[0].value.slice(0,-6)}, function (err, user) {
      return cb(err, user);
    });
  }
));



app.get('/',function(req,res){
    res.render('home')
})

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));


app.get('/auth/google/farm', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get('/search',function(req,res){
    res.render('search')
})
app.get('/refund',function(req,res){
    res.render('refund')
})
app.get('/cart',function(req,res){
  res.render('cart')
})

app.get('/signin',function(req,res){
  res.render('signin')
})
app.get('/profile',function(req,res){
  res.render('profile')
})

app.get("/product/:item",(req,res)=>{
  if (req.isAuthenticated()){
    itemFound=false
    User.findById(req.user.id)
    .then((foundUser)=>{
      foundUser.items_list.forEach(items => {
        if (items.name==req.params.item){
          items.quantity+=1
          itemFound=true
        }
      });
      
      if(!itemFound){
      ITEMS.forEach(items=>{
        if (items.name==req.params.item){
          foundUser.items_list.unshift(items)           //unsfhift for push at st of the array
        }
      })
    }
    foundUser.save()
    setTimeout(()=>{
      res.redirect("/")
    },1500)
    })
  }else{
<<<<<<< HEAD
    res.redirect("/refund")
=======
    res.redirect("/auth/google")
>>>>>>> 8815499e7ae5d3546dd380269ffaf3b5e26c646f
  }
})





app.get('/search',function(req,res){
    res.render('search');
})

app.get('/refund',function(req,res){
    res.render('refund');
})
app.get('/aboutus',function(req,res){
    res.render('aboutus');
})

app.get('/contact',function(req,res){
    res.render('contact');
})

app.get("/:item",(req,res)=>{
  for (let i=0;i<ITEMS.length;i++) {
    if(req.params.item==lodash.toLower((ITEMS[i].name).replace(/ /g,"-"))){
      res.render("item",{Item:ITEMS[i]})
    }
  }
})

app.listen(3000,function(){
    console.log("app is running in port 3000");
})
