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

module.exports = {
  updateSuccess,
  updateFailure
  
}