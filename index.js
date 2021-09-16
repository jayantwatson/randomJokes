const express = require("express");
const { STATUS_CODES } = require("http");
const https = require("https")
const app = express();


const category=process.argv.slice(2);
const url = "https://api.chucknorris.io/jokes/random?category="+category;

https.get(url, function(res){

        res.on("data", function(data){
  const joke = JSON.parse(data)

   const randomJoke = joke.value;

if(res.statusCode===200)
{
    console.log(randomJoke);
}else{
    console.log("no jokes were found")
}


    });
});

app.listen(3000);





