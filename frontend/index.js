console.log("js loaded");

var url = 'http://localhost:5000/api'

fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
  }).catch(function() {
    console.log("Booo");
  });