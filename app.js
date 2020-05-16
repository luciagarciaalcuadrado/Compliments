const express= require("express");
const request= require("request");
const ejs= require("ejs");
const https= require("https");

const app= express();

app.set('view engine', 'ejs');

let finalCompliment= "";

app.use(express.static("public"));

//get function
app.get("/", function(req, resp){
  console.log("Server is running");
  let today= new Date();
  let time= today.getHours();
  let timeOfDay= "";

  if(time >= 5 && time <= 12) {
   timeOfDay= "morning";
 } else if (time >= 13 && time <= 19) {
   timeOfDay= "afternon"
 } else {
  timeOfDay= "night"
 }


  resp.render("index",{timeOfDay:timeOfDay, randomPhrase: finalCompliment});
});

//function post
app.post("/", function(req, resp){

  const compliment= [
    "You look beautifull today!",
    "I´m proud of you, sweatheart",
    "I bet you make babies smile",
    "Your perspective is refreshing",
    "You should be proud of yourself!",
    "You´re more helpful than you realized",
    "When you’re not afraid to be yourself is when you’re most incredible!",
    "You are astoundingly gorgeous and that’s the least interesting thing about you",
    "You’re a true gift to the people in your life",
    "You’re an incredible friend",
    "You inspire people with your ideas",
    "Your passion is so motivating!",
    "Your smile makes me smile",
    "Thank you for being such a great person",
    "The way you carry yourself is truly admirable"
  ]

    let randomCompliment= compliment[Math.floor(Math.random() * compliment.length)];
 finalCompliment= randomCompliment;
resp.redirect("/")



});






app.listen(3000);
