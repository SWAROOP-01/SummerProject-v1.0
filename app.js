// REQUIRING THINGIES
var express = require('express'),
    app     = express(),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose'),
    passport   = require('passport'),
    LocalStategy = require('passport-local'),
    Product      = require('./models/products'),
    Comment      = require('./models/comments'),
    SeedDb       = require('./seedDb.js'),
    User         = require('./models/users')

// APP CONFIG
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
mongoose.connect('mongodb://localhost/AZkart', {useNewUrlParser: true, useUnifiedTopology: true});
    
// //Passport Config
app.use(require('express-session')({
    secret : "Gibrish",
    resave : false,
    saveUninitialized : false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// To Pass USer To All Routes
app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

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

app.get('/dev',function(req,res){
    res.render('developer');
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
    //finding the products with their provided id
    Product.findById(req.params.id).populate('comments').exec(function(err,foundProduct){
        if(err){
            console.log(err);
        } else{
            console.log(foundProduct);
            res.render("AZpages/show",{product : foundProduct});
        }
    });
});

// COMMENT ROUTES
app.get('/HomePage/:id/comments/new',isLoggedIn,function(req,res){
    // Find id And Name and pass it to the new page
    Product.findById(req.params.id).populate('comments').exec(function(err,foundProduct){
        if(err){
            console.log(err);
        } else{
            console.log(foundProduct);
            res.render("comments/new",{product : foundProduct});
        }
    });
});

app.post('/HomePage/:id/comments',isLoggedIn,function(req,res){
    Product.findById(req.params.id,function(err,foundProduct){
        if(err){
            console.log(err);
        } else{
            console.log(req.body.comment);
            Comment.create(req.body.comment,function(err,NewCommObj){
                if (err){
                    console.log(err);
                } else{
                    foundProduct.comments.push(NewCommObj);
                    foundProduct.save();
                    res.redirect('/HomePage/'+foundProduct._id);
                }
            });
        }
    });
});

//Authentication Routes

//REGISTER ROUTE
app.get('/register',function(req,res){
    res.render('auth/register'); 
});

app.post('/register',function(req,res){
   var UserId = { username: req.body.username};
    User.register(UserId,req.body.password,function(err,user){
        if (err) {
            return res.render('/register');
        } 
        passport.authenticate('local')(req,res,function(){
            res.redirect('/HomePage');
        })
    });
});

//LOGIN ROUTE
app.get('/login',function(req,res){
    res.render('auth/login'); 
});

app.post('/login',
passport.authenticate('local',{
    successRedirect : '/HomePage',
    failureRedirect : '/login'
})
,function(req,res){
    
});

// LOGOUT ROUTE
app.get('/logout',function(req,res){
    req.logout();
    res.redirect('/HomePage');
});



function isLoggedIn(req,res,next){
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}