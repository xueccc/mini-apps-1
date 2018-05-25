
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
app.use(express.static('public'));
app.use(bodyParser.json());
app.listen(3000, ()=>console.log('App listing to port 3000'));
var db = mongoose.connect('mongodb://127.0.0.1:27017/checkout');

var Sale = new Schema({
  name: String,
  email: String,
  password: String,
  street: String,
  city: String,
  state: String,
  zipcode: Number,
  creditCardNum: Number,
  cvv: Number,
  billZip: Number
});

var Transaction = mongoose.model('Transaction', Sale);
app.post('/', (req, res) => {
  console.log('request', req.body);
  
  var oneSale = new Transaction(req.body);
  console.log('new transaction', oneSale);
  oneSale.save( (err, row) => {
    if (err){
      console.log(err);
    } else {
      console.log(row)
      res.send();
    } 
  });
});