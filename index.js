const express = require('express');
const app = express();

const factorial = (n) => {
  console.log('Start: factorial');

  console.log('Result: ' + n);
  return n;
};

app.set('view engine', 'html');

// Algorithms
app.get('/algorithm/:name', (req, res, next) => {
        var result;

        // determine how to parse the data
        switch (req.params.name) {
          case 'factorial':
            result = factorial(req.query.n);
            break;
          default: break;
        }

        // return result
        res.json(result);
});

// HTML files
app.get('/', (req, res) => {
  res.redirect('index.html');
});
app.get('/:name', (req, res, next) => {

      // get page name
      const fileName = req.params.name;

      const options = {
        root: __dirname + '/public/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
      };

      // display page
      res.sendFile(fileName, options, (err) => {
        if (err) {
          next(err);
        } else {
          console.log('Sent:', fileName);
        }
      });
});

// listen
app.listen('3000');