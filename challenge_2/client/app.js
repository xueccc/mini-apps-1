
$(document).ready(function(){



var exampledata = {
  "firstName": "Joshie",
  "lastName": "Wyattson",
  "county": "San Mateo",
  "city": "San Mateo",
  "role": "Broker",
  "sales": 1000000,
  "children": [
  {
    "firstName": "Beth Jr.",
    "lastName": "Johnson",
    "county": "San Mateo",
    "city": "Pacifica",
    "role": "Manager",
    "sales": 2900000,
    "children": [
      {
        "firstName": "Smitty",
        "lastName": "Won",
        "county": "San Mateo",
        "city": "Redwood City",
        "role": "Sales Person",
        "sales": 4800000,
        "children": []
      },
      {
        "firstName": "Allen",
        "lastName": "Price",
        "county": "San Mateo",
        "city": "Burlingame",
        "role": "Sales Person",
        "sales": 2500000,
        "children": []
      }
    ]
  },
  {
    "firstName": "Beth",
    "lastName": "Johnson",
    "county": "San Francisco",
    "city": "San Francisco",
    "role": "Broker/Sales Person",
    "sales": 7500000,
    "children": []
  }
]
};



$('form').on('submit', function(event){
  event.preventDefault();
  var text = $('textarea').val();
  console.log(text);
  $.ajax({
    method: 'POST',
    url: 'http://127.0.0.1:8080/',
    data: JSON.stringify(exampledata),
    contentType: 'application/json',
    success: function(result){
      console.log('data posted', result);
      result.forEach(row=>{
        $('.result').append(row + '<br/>');
      })
    },
    error: (response) => console.log('POST failed', response)
  });
 

      //$('.result').html(data)
  
  })

});

