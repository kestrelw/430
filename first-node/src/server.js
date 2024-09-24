//how to work???

const http = require('http');
const _ = required(`underscore`);
const myData = require(`./my-data.js`);
const Polygon = require(`./Polygon.js`);

const port = process.env.PORT || 3000;

const myArray = [1,2,3,4,5];
const chunked = _.chunk(myArray, 3);
console.dir(chunked);

myData.getMessage();

const p = new Polygon(10, 10);
console.log(p);

const onRequest = (req, res) => {
    console.log(req.url);
    res.writeHeader(200,{'Content-Type': 'text/plain'});
    res.write(`Hello Server - you asked for ${req.url}`);
    res.end();
};

http.createServer(onRequest).listen(port, () => {
    //init callback
    console.log(`Server running on ${port}`);
});