    'use strict';
const api = require('./api-meals')
const ui = require('./ui-meals')
const getFormFields = require(`../../../lib/get-form-fields`)

////// SHOW MEALS//////

function showMeals(){
    console.log("showMeals")
    api.getMeals()
        //.then(ui.getMealsSuccess)
        .then((result) => {
            console.log(result.all_meals)
            const allMealResults = result.all_meals
            const meal_list = $("<ul></ul>")
            allMealResults.forEach(meal => {
            let meal_li= $("<li/>")
            let delete_button= $("<button>delete</button>")
             meal_li.text(`ID:${meal.id} meal:${meal.meal}`)
             meal_li.id = meal.id
            meal_li.append(delete_button)
            meal_list.append(meal_li)
            $(delete_button).click(deleteMeal)
            });

            $("#meals").append(meal_list);
        })

        
        .catch(ui.getMealsFailure)
}

////// ADD A MEAL//////

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

const deleteMeal=function(event){
   
}

const mealHandlers =  () => {
    console.log("meal-handlers in events-meals.js")
    $('#show-meals').click(showMeals)
    $('#new-meal').on('submit', addMeal)

}

module.exports={
    mealHandlers
}