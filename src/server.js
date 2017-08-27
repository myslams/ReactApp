'use strict';

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

var request = require('request');
app.get('/feeds/:tags?',(req, res) => {
var propertiesObject = {"tags":req.params.tags };
// send request to flikr api to get the images tags are recieved as query string in url of the nodejs endpoint eg ./feeds/<tags>
request({url:"https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1", qs:propertiesObject}, function(err, response, body) {
    if(err) {
        //error response
        res.json(JSON.parse(err));
    }
    else {
        // success response with status 200 and json output.
        res.status(200).json(JSON.parse(body.replace(/\\'/g,"'")));
    }
});
});
// universal routing and rendering
app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {
      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps}/>);
      }

      // render the index template with the embedded React markup
      return res.render('index', { markup });
    }
  );
});
module.exports = server
// start the server
const port = process.env.PORT || 80;
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port}`);
});
