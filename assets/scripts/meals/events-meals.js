    'use strict';
const api = require('./api-meals')
const ui = require('./ui-meals')
const getFormFields = require(`../../../lib/get-form-fields`)

function showMeals(){
    console.log("showMeals")
    api.getMeals()
        //.then(ui.getMealsSuccess)
        .then((result) => {
            console.log(result)
            const allMealResults = JSON.stringify(result)
            $("#meals").text(allMealResults);
        })

        
        .catch(ui.getMealsFailure)
}

const  addMeal=function(event){
    event.preventDefault()
    console.log("addMeal")
    const data = getFormFields(this)
    console.log(data)
    api.addMeal(data)
    .then((result) => {
        console.log(result)
        newMeal = result
    })




}

const mealHandlers =  () => {
    console.log("meal-handlers in events-meals.js")
    $('#show-meals').click(showMeals)
    $('#new-meal').on('submit', addMeal)
}

module.exports={
    mealHandlers
}