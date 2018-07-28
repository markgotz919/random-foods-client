const config = require("../config")
const store = require("../store")

// CREATE MEAL

const addMeal  = function (data) {
  console.log("reached create")
  return $.ajax({
    url: config.apiUrl + '/all_meals',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })

}

//DELETE MEAL

const deleteMeal = function (data) {
  console.log("reached delete")
  console.log(data)
  // return $.ajax({
  //   url: config.apiUrl +'/all_meals'+ 
  //   method: 'DELETE',
  //   headers: {
  //     Authorization: 'Token token=' +store.user.token
  //   },  
  //   data
  // })

}

//UPDATE MEAL 

const update = function (data) {
 
  return $.ajax({
    url: config.apiUrl + '/all_meals' + store.meal.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

//GET MEALS

const getMeals = function () {
  console.log("this is api-meals, get meals")
  return $.ajax({
    url: config.apiUrl + '/all_meals',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    
    // data: data
  })
}



module.exports = {
  addMeal,
  update,
  getMeals,
  deleteMeal

}
