const express = require('express');

const port = 3000;

const app = express();

const path = require('path');
const filePath404Page = path.resolve(__dirname,'../client/404.html');

// put this AFTER we instantiate `app`, and BEFORE our GET and POST routes
app.use(express.static('client'));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/bye', (req, res) => {
    res.send('Goodbye!');
  });
  
app.get('/helloJSON', (req, res) => {
  res.json({
    "message": "Hello there!"
  });
});

app.get('/timeJSON', (req, res) => {
  const d = new Date();
  res.json({
    "time": `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
  });
});

// .all refers to ALL http methods - GET, POST, DELETE etc
// note .status(404) and method chaining
// .status(404) is how we send the 404 - File Not Found status code
app.all('*', (req, res) => {
  res.status(404).sendFile(filePath404Page);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

app.post('/addComment', function(req, res){
    res.send("You just called the post method at '/addComment'!\n");
 });

 