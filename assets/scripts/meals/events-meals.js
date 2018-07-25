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
            allMealResults = result
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
    $('#show-meals').click(showMeals)
    $('#add-meal').on('submit', addMeal)
}

module.exports={
    mealHandlers
}