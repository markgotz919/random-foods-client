'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {

  const store = require('./store')

  const gameApi = require("./games/api-game")

  const ui = require('./games/ui-game')

  $(() => {
    authEvents.addHandlers()
  
  })


  

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js')

// styles
require('./assets/styles/index.scss')

//need to write a function to load meals from the database

// meals object to use until database is connected
var meals = {breakfast:[
    "pancakes",
    "frenchtoast",
    "cereal",
    "eggs",
    "fruit"
    ],
               lunch:[
    "ham and cheese sandwich",
    "hamburger",
    "hotdog",
    "salad"        
     ],
               dinner:[
      "pasta",
      "stir-fry chicken with veggies",
      "vegetable lasagna",
      "fish with baked potatoes and vegetables"
               ]
  }
  
  //function to add a meal and update database
  
  function addMeal(nameOfMeal, mealType) {
    if (meals[mealType]) {
      meals[mealType].push(nameOfMeal)  
    }
    else {
      messageDisplay("not valid meal type")
    }
  }

  //function to delete a meal and update database
  function deleteMeal(nameOfMeal, mealType) {
    if (meals[mealType]) {
      var index = meals[mealType].indexOf(nameOfMeal);
      if (index >=0 ) {
        meals[mealType].splice(index,1)
      }
      else{
        messageDisplay("could not find your meal in meal-type") 
      }  
    }
    else {
      messageDisplay("not valid meal type")
    }
  }
  
  
  //function to pick a random meal
  
  //will pick a random number between 0 and 6Math.floor(Math.random() * 6 )
  
  //pick a random number between 0 and length of array
  
  function pickRandomMeal(mealType){
  var randomMealIndex = Math.floor(Math.random() * meals[mealType].length )
  var randomMealName = meals[mealType][randomMealIndex]
  console.log("the meal that was picked for you is " + randomMealName)
  
  }
  
  ///function to display message
  
  function messageDisplay(message) {
    console.log(message)
  }
  
  //function to display all meals

//display all the meals
function displayMeals(){
 
  var html="";
  for(var type in meals){
    html +="<h3>" + type + "<button>add</button></h3>";
    html +="<ul>";
    for (let i=0; i<meals[type].length; i++){
      html +="<li>" + meals[type][i]+"</li>";
    }
    html +="</ul>";
  }
 
  

})