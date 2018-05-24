// create a request variable and assign a new XMLHttpRequest object to it
var request = new XMLHttpRequest();

// open a new connection, using the get request on the url endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films' true);

request.onload = function() {
  //begins to access the JSON data here
}

// send request
request.send();
