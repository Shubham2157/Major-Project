console.log("js loaded");
var tab = document.getElementById('mytable').getElementsByTagName('tbody')[0]

console.log(tab);

var url = 'https://shubham2157.github.io/Major-Project/api/data.json'

fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
      if(data != undefined){
        for(var i = 0; i<data.feeds.length; i++){
            tab.innerHTML += `<tr><td>${data.feeds[i].entry_id}</td> <td>${data.feeds[i].field1}</td> <td>${data.feeds[i].field2}</td> <td>${data.feeds[i].created_at}</td></tr>`
        }
    }
      
    console.log(data);
  }).catch(function() {
    console.log("Booo");
  });
