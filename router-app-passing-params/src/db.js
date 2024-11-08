const fs = require('fs');
const path = require('path');

const quotesPath = path.resolve(__dirname, 'data/quotes-data.json');
const jsonString = fs.readFileSync(quotesPath);
const data = JSON.parse(jsonString);
const { quotes } = data; // object destructuring

// PUBLIC METHODS
const getAllQuotes = () => quotes;

const randomQuote = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
};

const recentQuote = () => {
  const quote = quotes[quotes.length - 1];
  return quote;
};

const getQuotesById = (identifier) => {
  // const { id } = req.params; // NEW!
  // console.log(`id=${identifier.id}`);

  const idMatch = quotes.find((d) => d.id === identifier.id);

  if (identifier.id === undefined) {
    return quotes;
  }
  if (idMatch === undefined) {
    return {};
  }

  return idMatch;
};

module.exports = {
  getAllQuotes, randomQuote, recentQuote, getQuotesById,
};
