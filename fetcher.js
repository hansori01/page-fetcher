const fs = require('fs');
const request = require('request');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const args = process.argv.slice(2);
const url = args[0];
const filename = args[1];

request(url, (error, response, body) => {
  console.log(`Requested: ${url}`);
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);

  if (!fs.existsSync(filename)) {
    fs.writeFile(filename, body, (err) => {
      if (err) throw err;
      // const stats = fs.statSync(filename)
      console.log(`Downloaded and saved ${body.length} bytes to ${filename}`)// not working
    })
  } else {
    rl.question('This file already exists... would you like to overwrite y/n?', answer => {
      if (answer === 'y') {
        fs.writeFile(filename, body, (err) => {
          if (err) throw err;
          console.log(`Downloaded and saved ${body.length} bytes to ${filename}`)// not working
        });
      } else {
        console.log('Try a different directory then')
      }
      rl.close();
    });
  }
});