import express from 'express'
const app = express();
import Alg from './src/Factorial/Factorial'

const mainRouter = (req, res, next) => {

    // get page name
    let fileName = req.params.name;

    // if no page name then set to home page
    if (typeof fileName === 'undefined')
      fileName = 'index.html';

    // get page name without extention
    const fileNameNoExt = fileName.replace(/\.[^/.]+$/, "");

    // set send options
    let options = {
      root: __dirname + '/public/',
      dotfiles: 'deny',
      headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
      }
    };

    // if not default page then change root path
    if (fileNameNoExt !== 'index')
      options = {
        root: __dirname + '/src/' + fileNameNoExt + '/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
      }

    // display page
    res.sendFile(fileName, options, (err) => {
      if (err) next(err);
      else console.log('Sent:', fileName);
    });
}

// HTML files
app.get('/', (req, res, next) => {
  mainRouter(req, res, next);  
});
app.get('/:name', (req, res, next) => {
  mainRouter(req, res, next);    
});

// Algorithms
app.get('/algorithm/:name', (req, res, next) => {
  var result;

  // determine how to parse the data
  switch (req.params.name) {
    case 'factorial': result = Alg.factorial(req.query.n); break;
    default: break;
  }

  // return result
  res.json(result);
});

// listen
app.listen('3000', () => console.log('app listening on port 3000!'));