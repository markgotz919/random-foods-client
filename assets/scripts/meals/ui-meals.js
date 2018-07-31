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

function deleteMealSuccess(form){
  $('#message').text('Your meal has been deleted.')
  $('#message').css('background-color', 'green')
  form.reset()
  $('#show-meals').click()

}

function deleteMealFailure(error){
  console.log(error)
  $('#message').text('Error on deleting')
  $('#message').css('background-color', 'red')
}



function updateMealSuccess(form){
  $('#message').text('Your meal has been updated.')
  $('#message').css('background-color', 'green')
  form.reset()
  $('#show-meals').click()

}


function updateMealFailure(error){
  console.log(error)
  $('#message').text('Error on updating meal')
  $('#message').css('background-color', 'red')
}


module.exports = {
  updateSuccess,
  updateFailure,
  addMealSuccess,
  addMealFailure,
  deleteMealSuccess,
  updateMealSuccess
  
}