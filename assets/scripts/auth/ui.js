'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
  
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
 
  store.user = data.user
 
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')

  store.user = null
  
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').css('background-color', 'green')
  console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').css('background-color', 'red')
  console.error('changePasswordFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
