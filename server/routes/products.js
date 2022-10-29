// modules required for routing
/* Welid Adem
301020447*/

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
//const products = require("../models/products");

// define the product model
let product = require("../models/products");

/* GET products List page. READ */
router.get("/", (req, res, next) => {
  // find all products in the products collection
  product.find((err, products) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("products/index", {
        title: "Products",
        products: products,
      });
    }
  });
});

//  GET the Product Details page in order to add a new Product
router.get("/add", (req, res, next) => {
  let Addproduct = product ({
  });
    res.render('products/details',{
      title: 'Add product',
      products: Addproduct

    });
  
});

// POST process the Product Details page and create a new Product - CREATE
router.post("/add", (req, res, next) => {
 let products = product({
  Productid : req.body.productid,
  Productname: req.body.productname,
  Description: req.body.description,
  Price: req.body.price,
  
 });
});


// GET the Product Details page in order to edit an existing Product
router.get("/:id", (req, res, next) => {
  let id = req.params.id; 
  
  product.findById(req.params.id, (err,product) => {
    if(err){
      return console.error(err);
    }
    else{
      res.render('products/details',{
        title: 'Edit product',
        products: product
        
      });
    }
  });
});

// POST - process the information passed from the details form and update the document
router.post("/:id", (req, res, next) => {
  let id = req.params.id;

  let updateProduct = product ({
  Productid : req.body.productid,
  Productname : req.body.productname,
  Description : req.body.description,
  Price : req.body.price,
  });
  
  });


   

// GET - process the delete
router.get("/delete/:id", (req, res, next) => {
  product.remove( {_id: req.params.id} , (err) => {
    if(err){
      return console.error(err);
    }
    else{
      res.redirect('/products');
    }

  
 });
});

module.exports = router;
