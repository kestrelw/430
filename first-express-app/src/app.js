const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/bye', (req, res) => {
    res.send('Goodbye!');
  });

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

app.post('/addComment', function(req, res){
    res.send("You just called the post method at '/addComment'!\n");
 });