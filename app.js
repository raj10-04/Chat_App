//jshint esversion:6
const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const redis = require("redis");
require("dotenv").config();
const { createClient } = redis;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

//start

app.get('/',async(req,res)=>{
  try {
      var url = 'https://api2.binance.com/api/v3/ticker/24hr';
      const data_get = await axios.get(url)
      //console.log(data_get);
      //const data_Json = JSON.stringify(yourObjName );
      //console.log(myJSON);
      //res.render('news',{articles:news_get.data.articles})
      res.render('home',{data:data_get.symbol});
      //console.log("working");

  } catch (error) {
      if(error.response){
          console.log(error)
      }
  }
});
//end
app.listen(3000, function() 
{
    console.log("Server started on port 3000");
  });