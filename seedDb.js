var mongoose   = require('mongoose'),
    Product    = require('./models/products'),
    Comment  = require('./models/comments')

// HARDCODED DATA
var data = [{
    name     : "HP LAPTOP",
    image    : "https://5.imimg.com/data5/JM/PC/MY-26541044/hp-pavilion-x360-14m-ba013dx-500x500.jpg",
    disc     : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    price    : 40000,
    category : "Electronics"
    },
    {
        name     : "DELL LAPTOP",
        image    : "https://5.imimg.com/data5/EF/VD/MY-4119045/dell-laptop-500x500.jpg",
        disc     : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        price    : 39999,
        category : "Electronics"
    }
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
