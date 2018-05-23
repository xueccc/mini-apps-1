var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(express.static('client'));

app.get('/', (req, res)=>{
  res.sendFile('index.html');
})

app.post('/', function(req, res){
  // console.log('==============');
  // res.end('POST request to the homepage');
  var data = jsonTOCSV(req.body);
  console.log(data);
  res.send(data);
})


app.listen(8080, () => console.log('Example app listening on port 8080!'))


var jsonTOCSV = function(data) {
  console.log(typeof data);
  var keys = Object.keys(data).splice(0,5).join(',');
  var convertedData = [[keys]];
  var recurse = function(data){
    var array = [];
    for (var i=0; i<data.length; i++) {
      var values = Object.values(data[i]);
      debugger;
      convertedData.push([values.slice(0, 6).join(',')]);
      if (values[6]){
        recurse(values[6]);
      }
    }
  }
  recurse(data.children);
  return convertedData;
}





