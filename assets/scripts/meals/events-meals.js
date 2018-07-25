'use strict';
const api = require('./api-meals')
const ui = require('./ui-meals')

function init(){
    console.log("events.meals init")
    api.getMeals()
        .then(ui.getMealsSuccess)
        .catch(ui.getMealsFailure)
}



module.exports={init}