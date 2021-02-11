// small CLI app takes in a URL as process.argv as well as a local path and downlaod the resource to specified path
//user input
const input = process.argv.slice(2);
const url = input[0];
const destination = input[1];

console.log(url + ' ' + destination)


//use request library to make HTTP request
// const request = require('request');

// request('https://www.google.com/fdsafsafsa.html', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// Node's fs module to write the file

// Do not use the pipe function

// Do not use writeFileSync function
