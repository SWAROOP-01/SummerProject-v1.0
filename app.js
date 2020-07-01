// REQUIRING THINGIES
var express = require('express'),
    app     = express(),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose'),
    passport   = require('passport'),
    LocalStategy = require('passport-local'),
    Product      = require('./models/products'),
    Comment      = require('./models/comments'),
    SeedDb       = require('./seedDb.js')

// APP CONFIG
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
mongoose.connect('mongodb://localhost/AZkart', {useNewUrlParser: true, useUnifiedTopology: true});
    
// //Passport Config
// app.use(require('express-session')({
//     secret : "Gibrish",
//     resave : false,
//     saveUninitialized : false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// To Pass USer To All Routes
app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

app.listen(process.env.PORT || 6969, process.env.IP, function () {
    console.log("AZ KART INITIATED");
});

app.get('/',function(req,res){
    res.render('LandingPage');
});

app.get('/HomePage',function(req,res){

    // FINDING ALL PRODUCTS AND PASSING THEM TO THE DATABASE
    Product.find({},function(err,allProducts){
        if (err) {
            console.log(err);
        } else {
            res.render('AZpages/index',{products : allProducts});            
        }
    });

});

app.get('/HomePage/:id',function(req,res){
    res.render('AZpages/show');
});