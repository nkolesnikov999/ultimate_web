var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop');

var Product = require('./model/product');
var WishList = require('./model/wishlist');

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/product', function(request, response) {
    var product = new Product();
    product.title = request.body.title;
    product.price = request.body.price;
    product.save(function(err, savedProduct) {
        if (err) {
            response.status(500).send({error:"Could not save product"}); 
        } else {
            response.status(200).send(savedProduct);
        }
    });
}); 

app.get('/product', function(request, response) {
    Product.find({}, function(err, findProducts) {
        if (err) {
            response.status(500).send({error:"Could not fetch products"}); 
        } else {
            response.status(200).send(findProducts);
        }
    });
});

app.get('/', function(request, response) {
    response.status(200).send("Good day");
});

app.post('/wishlist', function(request, response) {
    var wishList = new WishList();
    wishList.title = request.body.title;
    
    wishList.save(function(err, newWishList) {
        if (err) {
            response.status(500).send({error:"Could not create wishlist"}); 
        } else {
            response.status(200).send(newWishList);
        }
    });
});

app.get('/wishlist', function(request, response) {
    WishList.find({}).populate({path:'products',model:'Product'}).exec(function(err, wishlists) {
        if (err) {
            response.status(500).send({error:"Could not fetch wishlist"}); 
        } else {
            response.status(200).send(wishlists);
        }
    });
});

app.put('/wishlist/product/add', function(request, response) {
    Product.findOne({_id: request.body.productId}, function(err, product) {
        if (err) {
            response.status(500).send({error:"Could not add item to wishlist"}); 
        } else {
            WishList.update({_id:request.body.wishListId}, {$addToSet:{products: product._id}}, function(err, wishlist) {
                if (err) {
                    response.status(500).send({error:"Could not add item to wishlist"}); 
                } else {
                    response.send(wishlist);
                }
            });
        }
    });
});

app.listen(3004, function() {
    console.log("Swag Shop API running on port 3004...");
});




