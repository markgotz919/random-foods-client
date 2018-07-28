const updateSuccess = function () {
  $('#message').text('meal has been updated')
  $('#message').css('background-color', 'green')
  
}

const updateFailure = function (error) {
  $('#message').text('Error on update')
  $('#message').css('background-color', 'red')
  
}

const getMealsSuccess = function (data){
  console.log("get meals successful",data)

}

function getMealsFailure(error){
  console.log(error)
  $('#message').text('Error on retrieval')
  $('#message').css('background-color', 'red')
}

function addMealSuccess(form){
  $('#message').text('Your meal has been added')
  $('#message').css('background-color', 'green')
  form.reset()
  $('#show-meals').click()
}

function addMealFailure(error){
  console.log(error)
  $('#message').text('Error on adding meal')
  $('#message').css('background-color', 'red')
  
}


module.exports = {
  updateSuccess,
  updateFailure,
  addMealSuccess,
  addMealFailure
  
}