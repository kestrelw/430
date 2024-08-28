// HELPERS
// NOTE: You can test this in the browser console
const randomElement = array => {
  if(!array.length) throw new Error("Array is empty!");
  return array[Math.floor(Math.random() * array.length)];
}

// NOTE: How about implementing const getJsonXHR = (url, callback) => {...}
const getJsonXHR = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    if(xhr.status == "404"){
      console.log(`NOT FOUND: ${url}`);
      callback([{content: `NOT FOUND: ${url}`}]);
      return;
    }
    const text = xhr.responseText;
    
    let json;
    try{
      json = JSON.parse(text);
    }
    catch(err){
      console.log(`ERROR: ${err}`);
      json = [{content: `Don't take any wooden nickels!`}];
    }
    finally{
      callback(json);
    }

    
    callback(json);
  }
  xhr.open("GET", url);
  //add headers here (send request headers?)
  xhr.send();
}
// MAIN
// Note: The page is already loaded (that's what <script defer ...> does) 
// ... so go to town!
// ... get a reference to "random" button
// ... get a reference to "results" <div>
// ... and so on

const button = document.querySelector("#btn-random");
const resultDiv = document.querySelector("#results");
const jsonUrl = "data/quotes-data.json";

const quoteComponent = json => {
  resultDiv.innerHTML = randomElement(json).content;
};

button.onclick = () => {
  //console.log("button clicked");
  getJsonXHR(jsonUrl, quoteComponent);
};