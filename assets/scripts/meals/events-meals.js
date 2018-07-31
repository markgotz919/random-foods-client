    'use strict';
    const api = require('./api-meals')
    const ui = require('./ui-meals')
    const getFormFields = require(`../../../lib/get-form-fields`)

    ////// SHOW MEALS//////

    function showMeals() {
      console.log("showMeals")
      api.getMeals()
        //.then(ui.getMealsSuccess)
        .then((result) => {
          console.log(result.all_meals)
          const allMealResults = result.all_meals
          const breakfast = allMealResults.filter(m => m.breakfast)
          const lunch = allMealResults.filter(m => m.lunch)
          const dinner = allMealResults.filter(m => m.dinner)

          const meal_list = $("<ul></ul>")
          meal_list.append($("<h3>BREAKFAST <button class='breakfast'>pick my meal</button></h3>"))
          for (let i = 0; i < breakfast.length; i++) {
            let meal = breakfast[i]
            let meal_li = $("<li class='breakfast'></li>")
            meal_li.text(`ID:${meal.id}: ${meal.meal}`)
            meal_li.id = meal.id
            meal_list.append(meal_li)
          }
          meal_list.append($("<h3>LUNCH <button class='lunch'>pick my meal</button></h3>"))
          for (let i = 0; i < lunch.length; i++) {
            let meal = lunch[i]
            let meal_li = $("<li class='lunch'></li>")
            meal_li.text(`ID:${meal.id}: ${meal.meal}`)
            meal_li.id = meal.id
            meal_list.append(meal_li)
          }
          meal_list.append($("<h3>DINNER <button class='dinner'>pick my meal</button></h3>"))
          for (let i = 0; i < dinner.length; i++) {
            let meal = dinner[i]
            let meal_li = $("<li class='dinner'></li>")
            meal_li.text(`ID:${meal.id}: ${meal.meal}`)
            meal_li.id = meal.id
            meal_list.append(meal_li)
          }

          $("#meals").html(meal_list);
          $("#meals button").click(randomMealPick)
        })


        .catch(ui.getMealsFailure)
    }

    ///// randomPickMeal //////////

    function randomMealPick(e) {
      let mealType = e.target.className;
      let options = $('#meals li.' + mealType)
      for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("randomMeal")
      }
      let randomIndex = Math.floor(Math.random() * options.length);
      options[randomIndex].classList.add('randomMeal')
      $('#message').text('Your meal has been selected')
      $('#message').css('background-color', 'green')
    }

    ////// ADD A MEAL//////

    const addMeal = function (event) {
      event.preventDefault()
      console.log("addMeal")
      const data = getFormFields(this)
      console.log(data)
      api.addMeal(data)
        .then((result) => {
          console.log(result)
          //newMeal = result
          ui.addMealSuccess(this)
        })

        .catch(ui.addMealFailure)
    }

     ////// DELETE A MEAL//////

    const deleteMeal = function (event) {
      event.preventDefault()
      console.log("deleteMeal")
      const data = getFormFields(this)
      api.deleteMeal(data)
      .then((result) => {
        
        console.log(result)
        //newMeal = result
        ui.deleteMealSuccess(this)
      })
        .catch(ui.deleteMealFailure)
    }
    ////// UPDATE A MEAL//////
    const updateMeal = function (event) {
        event.preventDefault()
        console.log("updateMeal")
        const data = getFormFields(this)
        api.updateMeal(data)
        .then((result) => {
          console.log(result)
          
          ui.updateMealSuccess(this)
        })
        .catch(ui.updateMealFailure)
      }



    const mealHandlers = () => {
      console.log("meal-handlers in events-meals.js")
      $('#show-meals').click(showMeals)
      $('#new-meal').on('submit', addMeal)
      $('#delete-meal').on('submit', deleteMeal)
      $('#update-meal').on('submit', updateMeal)

    }

    module.exports = {
      mealHandlers
    }
