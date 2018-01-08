'use strict';

module.exports.helloWorld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Content-type': 'text/html'
    },
    body: '<html><body><h2>Viseo HK</h2><iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/395712/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line"></iframe> </body></html>'
  };

  callback(null, response);
};
