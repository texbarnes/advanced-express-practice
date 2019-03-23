let express = require("express");

const bodyParser = require("body-parser");
const app = express();
// reference our route files
const contactRoutes = require("./routes/ContactRoutes");
const commentRoutes = require("./routes/CommentRoutes");
const vehicleRoutes = require("./routes/VehicleRoutes");
const productRoutes = require("./routes/ProductRoutes");

app.use(bodyParser.json());
app.use(express.static("public"));
// use our routes
app.use(contactRoutes);
app.use(commentRoutes);
app.use(vehicleRoutes);
app.use(productRoutes);

const thePort = 3001;

app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
/*
// generic gets: /contacts, /vehicles, /comments, /products
app.get('/contacts', function (req, res) {
  res.json(contacts)
})

app.get('/vehicles', function (req, res) {
  res.json(vehicles)
})

app.get('/comments', function (req, res) {
  res.json(comments)
})

app.get('/products', function (req, res) {
  res.json(products)
})

// get by :id
// sort of works ... id is off by 1 ... path: /products/0 ... returns id: 1
app.get('/contacts/:contactId', function (req, res) {
    res.json(contacts[req.params.contactId]);
})

app.get('/vehicles/:vehicleId', function (req, res) {
  res.json(vehicles[req.params.vehicleId]);
})

app.get('/comments/:commentId', function (req, res) {
  res.json(comments[req.params.commentId]);
})

app.get('/products/:productId', function (req, res) {
  res.json(products[req.params.productId]);
})

// my attempt to get to the right ID ... hmmm
/* app.get('/products/:productId', function (req, res) {
  let product = products.filter(p=>p._id === req.params.productId);
  res.json(product);
}) */

// basic post to each...
app.post('/contacts', function (req, res) {
  let contact = req.body;
  contacts.push(contact);
  res.json(contact);
})

app.post('/vehicles', function (req, res) {
  let vehicle = req.body;
  vehicles.push(vehicle);
  res.json(vehicle);
})

app.post('/comments', function (req, res) {
  let comment = req.body;
  comments.push(comment);
  res.json(comment);
})

app.post('/products', function (req, res) {
    let product = req.body;
    products.push(product);
    res.json(product);
})

// app.listen(3000)