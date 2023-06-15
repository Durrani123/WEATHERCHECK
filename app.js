const express=require("express");
const app=express();
const https =require("https");
const ejs = require("ejs");
const bodyParser = require("body-parser");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  const defaultCity = 'London';
  const city = req.query.city || defaultCity;
  const apiKEY="b456cfb58c7d75ead761554bbb535f64";
  const unit="metric";
  const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKEY+"&units="+unit;
  https.get(url,function(response){
    response.on("data",function(data){
      const weatherData = JSON.parse(data);
      if (weatherData.cod === 200){
      const temp=weatherData.main.temp;
      const icon=weatherData.weather[0].icon;
      const imageURL= "http://openweathermap.org/img/wn/"+icon+"@2x.png";
      const description=weatherData.weather[0].description;
      const main=weatherData.weather[0].main;
      const pressure=weatherData.main.pressure;
      const humidity=weatherData.main.humidity;
      let backImage = 'clear';
      if (main == 'Rain' || main == 'Drizzle' || main == 'Thunderstorm' ){
        backImage  = 'rainy';
      }
      else if(main == 'Cloud' ||main == 'Mist' ||main == 'Tornado'){
        backImage  = 'cloudy';
      }
      const backImageUrl = 'images/'+backImage+'.jpg'
      res.render("index",{
        temp:temp,
        icon:imageURL,
        description:description,
        main:main,
        pressure:pressure,
        humidity:humidity,
        city:city,
        backImageUrl
      })
      }
      else{
      }
    });
  });
});
app.post("/",function(req,res){
  const city = req.body.city;
  res.redirect(`/?city=${city}`);
})

  app.listen(3000,function(){
    console.log("Server is runnig on port 3000");
  });