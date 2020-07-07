var mongoose   = require('mongoose'),
    Product    = require('./models/products'),
    Comment  = require('./models/comments')

// HARDCODED DATA
var data = [{
    name     : "HP Pavilion Gaming 15-ec0026AX 15.6-inch Gaming Laptop (Ryzen 5 3550H/8GB/1TB HDD + 256GB SSD/Windows 10 Home/3GB NVIDIA GTX 1050 Graphics), Shadow Black",
    image    : "https://images-na.ssl-images-amazon.com/images/I/81R4e0-oQxL._SL1500_.jpg",
    disc     : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    price    : 40000,
    category : "AZElectronics"
    },
    {
        name     : "Dell Inspiron 5482 14-inch FHD 2in1 Laptop (8th Gen Core i3-8145U/4GB/512GB SSD/Windows 10 + MS Office/Intel HD Graphics/Platinum Silver)",
        image    : "https://images-na.ssl-images-amazon.com/images/I/51um1sWoFuL._SL1000_.jpg",
        disc     : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        price    : 49999,
        category : "AZElectronics"
    },
    {
        name     : "Lifebuoy Alcohol Based Hand Sanitizer 500ml",
        image    : "https://images-na.ssl-images-amazon.com/images/I/51yLIxvuKGL._SL1000_.jpg",
        disc     : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        price    : 500,
        category : "AZPantry"
    },
    {
        name     : "Maggi 2 Minutes Noodles Masala, 560g",
        image    : "https://images-na.ssl-images-amazon.com/images/I/81tiRzUBKEL._SL1500_.jpg",
        disc     : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        price    : 86,
        category : "AZPantry"
    },
    {
        name     : "Redmi Note 8 Pro (Halo White, 6GB RAM, 128GB Storage with Helio G90T Processor)",
        image    : "https://images-na.ssl-images-amazon.com/images/I/61ACGAKmw3L._SL1500_.jpg",
        disc     : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        price    : 17000,
        category : "AZMobile"
    },
    {
        name     : "Stories We Never Tell",
        image    : "https://images-na.ssl-images-amazon.com/images/I/41quwiKy+xL._SX316_BO1,204,203,200_.jpg",
        disc     : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        price    : 250,
        category : "AZBooks"
    },
    {
        name     : "The Pursuit of Happiness: A Book of Studies and Strowings",
        image    : "https://images-na.ssl-images-amazon.com/images/I/510dqZ+GPqL._SX321_BO1,204,203,200_.jpg",
        disc     : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        price    : 350,
        category : "AZBooks"
    },
    {
        name     : "Nivia 454O Synthetic Pro Carbonite Mens Football Stud (Orange)",
        image    : "https://images-na.ssl-images-amazon.com/images/I/71pZ3Pr8q%2BL._UL1500_.jpg",
        disc     : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        price    : 1999,
        category : "AZSports"
    },
    {
        name     : "Denill Latest Collection, Comfortable & Fashionable Sneaker Shoes for Women's and Girl's",
        image    : "https://images-na.ssl-images-amazon.com/images/I/61cDccOAn3L._UL1500_.jpg",
        disc     : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        price    : 1999,
        category : "AZFashion"
    },
    {
        name     : "Nutella Hazelnut Spread with Cocoa, 350g",
        image    : "https://images-na.ssl-images-amazon.com/images/I/715eSstP-ZL._SL1500_.jpg",
        disc     : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        price    : 380,
        category : "AZFood"
    },
    {
        name     : "Sony MDR-ZX110A On-Ear Stereo Headphones (White), without mic",
        image    : "https://images-na.ssl-images-amazon.com/images/I/51aIxM8tSoL._SL1016_.jpg",
        disc     : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        price    : 613,
        category : "AZElectronics"
    },
    {
        name     : "Sunfeast Dark Fantasy Choco Fills, 600g",
        image    : "https://images-na.ssl-images-amazon.com/images/I/71yR4SYp3iL._SL1500_.jpg",
        disc     : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        price    : 188,
        category : "AZFood"

    },   
    {
        name     : "Samsung 6.0 Kg Fully-Automatic 5 Star Front Loading Washing Machine (WW60R20GLMA/TL, White)",
        image    : "https://images-na.ssl-images-amazon.com/images/I/614-yYoVkUL._SL1500_.jpg",
        disc     : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        price    : 22800,
        category : "AZElectronics"

    },
    {
        name     : "D-Link Router and Resonate CRU12V2 Router UPS",
        image    : "https://images-na.ssl-images-amazon.com/images/I/41UuOorj0mL._SL1001_.jpg",
        disc     : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        price    :  3400,
        category : "AZElectronics"

    }   ,
    {
        name     : "HP X1000 Wired Mouse (Black/Grey)",
        image    : "https://images-na.ssl-images-amazon.com/images/I/61mucoT%2BifL._SL1500_.jpg",
        disc     : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        price    : 349,
        category : "AZElectronics"
    }  ,
    {
        name     : "Terabyte RJ45 CAT5E Ethernet Patch/LAN Cable (20M, Blue)",
        image    : "https://images-na.ssl-images-amazon.com/images/I/61OPx6JJ-9L._SL1000_.jpg",
        disc     : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        price    : 376,
        category : "AZElectronics"
    },
    {
        name     : "Blisstone Men's Slim Fit T-Shirt",
        image    : "https://images-na.ssl-images-amazon.com/images/I/51ZWmhfwN5L._UL1100_.jpg",
        disc     : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        price    : 379,
        category : "AZFashion"
    },
    
    
]

function seedDb(){    
    // REMOVE Products
    Product.remove({},function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("Product Removed!");
            // CREATE Products
            data.forEach(function(data){
                Product.create(data,function(err,NewProduct){
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("added a product");
                        // Create Comments
                        
                        Comment.create({
                                    text   : "i Wish This Place HAd This Amazing Product",
                                    author : "StonerGuy"
                        },function(err,NewComment){
                            if (err) {
                                console.log(err);
                            } else {
                                NewProduct.comments.push(NewComment);
                                NewProduct.save();   
                                console.log('created a new comment');
                            }
                        });
                    }
                });
            });
        }
    });
}

module.exports = seedDb();
