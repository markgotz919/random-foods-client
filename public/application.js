webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = {};

module.exports = store;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addNestedValue = __webpack_require__(8);

var getFormFields = function getFormFields(form) {
  var target = {};

  var elements = form.elements || [];
  for (var i = 0; i < elements.length; i++) {
    var e = elements[i];
    if (!e.hasAttribute('name')) {
      continue;
    }

    var type = 'TEXT';
    switch (e.nodeName.toUpperCase()) {
      case 'SELECT':
        type = e.hasAttribute('multiple') ? 'MULTIPLE' : type;
        break;
      case 'INPUT':
        type = e.getAttribute('type').toUpperCase();
        break;
    }

    var name = e.getAttribute('name');

    if (type === 'MULTIPLE') {
      for (var _i = 0; _i < e.length; _i++) {
        if (e[_i].selected) {
          addNestedValue(target, name, e[_i].value);
        }
      }
    } else if (type !== 'RADIO' && type !== 'CHECKBOX' || e.checked) {
      addNestedValue(target, name, e.value);
    }
  }

  return target;
};

module.exports = getFormFields;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var apiUrl = void 0;
var apiUrls = {
  production: 'https://still-atoll-14758.herokuapp.com',
  development: 'http://localhost:4741'
};

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

module.exports = {
  apiUrl: apiUrl
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var api = __webpack_require__(11);
var ui = __webpack_require__(12);
var getFormFields = __webpack_require__(2);

////// SHOW MEALS//////

function showMeals() {
  // console.log("showMeals")
  api.getMeals()
  //.then(ui.getMealsSuccess)
  .then(function (result) {
    // console.log(result.all_meals)
    var allMealResults = result.all_meals;
    var breakfast = allMealResults.filter(function (m) {
      return m.breakfast;
    });
    var lunch = allMealResults.filter(function (m) {
      return m.lunch;
    });
    var dinner = allMealResults.filter(function (m) {
      return m.dinner;
    });

    var meal_list = $("<ul></ul>");
    meal_list.append($("<h3>BREAKFAST <button class='breakfast'>pick my meal</button></h3>"));
    for (var i = 0; i < breakfast.length; i++) {
      var meal = breakfast[i];
      var meal_li = $("<li class='breakfast'></li>");
      meal_li.text('ID:' + meal.id + ': ' + meal.meal);
      meal_li.id = meal.id;
      meal_list.append(meal_li);
    }
    meal_list.append($("<h3>LUNCH <button class='lunch'>pick my meal</button></h3>"));
    for (var _i = 0; _i < lunch.length; _i++) {
      var _meal = lunch[_i];
      var _meal_li = $("<li class='lunch'></li>");
      _meal_li.text('ID:' + _meal.id + ': ' + _meal.meal);
      _meal_li.id = _meal.id;
      meal_list.append(_meal_li);
    }
    meal_list.append($("<h3>DINNER <button class='dinner'>pick my meal</button></h3>"));
    for (var _i2 = 0; _i2 < dinner.length; _i2++) {
      var _meal2 = dinner[_i2];
      var _meal_li2 = $("<li class='dinner'></li>");
      _meal_li2.text('ID:' + _meal2.id + ': ' + _meal2.meal);
      _meal_li2.id = _meal2.id;
      meal_list.append(_meal_li2);
    }

    $("#meals").html(meal_list);
    $("#meals button").click(randomMealPick);
  }).catch(ui.getMealsFailure);
}

///// randomPickMeal //////////

function randomMealPick(e) {
  var mealType = e.target.className;
  var options = $('#meals li.' + mealType);
  for (var i = 0; i < options.length; i++) {
    options[i].classList.remove("randomMeal");
  }
  var randomIndex = Math.floor(Math.random() * options.length);
  options[randomIndex].classList.add('randomMeal');
  $('#message').text('Your meal has been selected');
  $('#message').css('background-color', 'green');
}

////// ADD A MEAL//////

var addMeal = function addMeal(event) {
  var _this = this;

  event.preventDefault();
  // console.log("addMeal")
  var data = getFormFields(this);
  // console.log(data)
  api.addMeal(data).then(function (result) {
    // console.log(result)
    //newMeal = result
    ui.addMealSuccess(_this);
  }).catch(ui.addMealFailure);
};

////// DELETE A MEAL//////

var deleteMeal = function deleteMeal(event) {
  var _this2 = this;

  event.preventDefault();
  // console.log("deleteMeal")
  var data = getFormFields(this);
  api.deleteMeal(data).then(function (result) {

    // console.log(result)
    //newMeal = result
    ui.deleteMealSuccess(_this2);
  }).catch(ui.deleteMealFailure);
};
////// UPDATE A MEAL//////
var updateMeal = function updateMeal(event) {
  var _this3 = this;

  event.preventDefault();
  // console.log("updateMeal")
  var data = getFormFields(this);
  api.updateMeal(data).then(function (result) {
    // console.log(result)

    ui.updateMealSuccess(_this3);
  }).catch(ui.updateMealFailure);
};

var mealHandlers = function mealHandlers() {
  // console.log("meal-handlers in events-meals.js")
  $('#show-meals').click(showMeals);
  $('#new-meal').on('submit', addMeal);
  $('#delete-meal').on('submit', deleteMeal);
  $('#update-meal').on('submit', updateMeal);
};

module.exports = {
  mealHandlers: mealHandlers
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts

__webpack_require__(6);

// styles
__webpack_require__(13);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var store = __webpack_require__(1);

var authEvents = __webpack_require__(7);
var mealEvents = __webpack_require__(4);

$(function () {
  // console.log("before handlers")
  mealEvents.mealHandlers();
  authEvents.addHandlers();
  $("#change-password, #sign-out").hide();
  $("#new-meal").hide();
  $("#show-meals").hide();
  $("#delete-meal").hide();
  $("#update-meal").hide();
});

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
// require('./assets/scripts/index.js')

// styles
// require('./assets/styles/index.scss')

//need to write a function to load meals from the database

// meals object to use until database is connected
// var meals = {breakfast:[
//     "pancakes",
//     "frenchtoast",
//     "cereal",
//     "eggs",
//     "fruit"
//     ],
//                lunch:[
//     "ham and cheese sandwich",
//     "hamburger",
//     "hotdog",
//     "salad"        
//      ],
//                dinner:[
//       "pasta",
//       "stir-fry chicken with veggies",
//       "vegetable lasagna",
//       "fish with baked potatoes and vegetables"
//                ]
//   }

//function to add a meal and update database

function addMeal(nameOfMeal, mealType) {
  if (meals[mealType]) {
    meals[mealType].push(nameOfMeal);
  } else {
    messageDisplay("not valid meal type");
  }
}

//function to delete a meal and update database
function deleteMeal(nameOfMeal, mealType) {
  if (meals[mealType]) {
    var index = meals[mealType].indexOf(nameOfMeal);
    if (index >= 0) {
      meals[mealType].splice(index, 1);
    } else {
      messageDisplay("could not find your meal in meal-type");
    }
  } else {
    messageDisplay("not valid meal type");
  }
}

//function to pick a random meal

//will pick a random number between 0 and 6Math.floor(Math.random() * 6 )

//pick a random number between 0 and length of array

function pickRandomMeal(mealType) {
  var randomMealIndex = Math.floor(Math.random() * meals[mealType].length);
  var randomMealName = meals[mealType][randomMealIndex];
  console.log("the meal that was picked for you is " + randomMealName);
}

///function to display message

function messageDisplay(message) {
  console.log(message);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var getFormFields = __webpack_require__(2);

var api = __webpack_require__(9);
var ui = __webpack_require__(10);

var onSignUp = function onSignUp(event) {
  event.preventDefault();

  var data = getFormFields(this);
  api.signUp(data).then(ui.signUpSuccess).catch(ui.signUpFailure);
  this.reset();
};

var onSignIn = function onSignIn(event) {
  event.preventDefault();

  var data = getFormFields(this);
  api.signIn(data).then(ui.signInSuccess).catch(ui.signInFailure);
  this.reset();
};

var onSignOut = function onSignOut(event) {
  event.preventDefault();

  api.signOut().then(ui.signOutSuccess).catch(ui.signOutFailure);
};

var onChangePassword = function onChangePassword(event) {
  event.preventDefault();

  var data = getFormFields(this);
  api.changePassword(data).then(ui.changePasswordSuccess).catch(ui.changePasswordFailure);
  this.reset();
};

var addHandlers = function addHandlers() {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
};

module.exports = {
  addHandlers: addHandlers
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addNestedValue = function addNestedValue(pojo, name, value) {
  var recurse = function recurse(pojo, keys, value) {
    var key = keys.shift();
    var next = keys[0];
    if (next === '') {
      // key is an array
      pojo[key] = pojo[key] || [];
      pojo[key].push(value);
    } else if (next) {
      // key is a parent key
      pojo[key] = pojo[key] || {};
      recurse(pojo[key], keys, value);
    } else {
      // key is the key for value
      pojo[key] = value;
    }

    return pojo;
  };

  var keys = name.split('[').map(function (k) {
    return k.replace(/]$/, '');
  });
  return recurse(pojo, keys, value);
};

module.exports = addNestedValue;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var config = __webpack_require__(3);
var store = __webpack_require__(1);

var signUp = function signUp(data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
    // data: data
  });
};

var signIn = function signIn(data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
    // data: data
  });
};

var signOut = function signOut() {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
};

var changePassword = function changePassword(data) {
  // console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
    // data: data
  });
};

module.exports = {
  signUp: signUp,
  signIn: signIn,
  signOut: signOut,
  changePassword: changePassword
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var store = __webpack_require__(1);

var mealEvents = __webpack_require__(4);

var signUpSuccess = function signUpSuccess(data) {
  $('#message').text('Signed up successfully');
  $('#message').css('background-color', 'green');
};

var signUpFailure = function signUpFailure(error) {
  $('#message').text('Error on sign up');
  $('#message').css('background-color', 'red');
};

var signInSuccess = function signInSuccess(data) {
  $('#message').text('Signed in successfully');
  $('#message').css('background-color', 'green');

  store.user = data.user;
  $("#change-password, #sign-out, #new-meal,#show-meals, #delete-meal, #update-meal").show();
  $("#sign-up, #sign-in").hide();
};

var signInFailure = function signInFailure(error) {
  $('#message').text('Error on sign in');
  $('#message').css('background-color', 'red');
};

var signOutSuccess = function signOutSuccess() {
  $('#message').text('Signed out successfully');
  $('#message').css('background-color', 'green');

  store.user = null;
  $("#change-password, #sign-out, #new-meal,#show-meals,#delete-meal, #meals,#update-meal").hide();
  $("#sign-up, #sign-in").show();
};

var signOutFailure = function signOutFailure(error) {
  $('#message').text('Error on sign out');
  $('#message').css('background-color', 'red');
  // console.error('signOutFailure ran. Error is :', error)
};

var changePasswordSuccess = function changePasswordSuccess() {
  $('#message').text('Changed password successfully');
  $('#message').css('background-color', 'green');
  // console.log('changePasswordSuccess ran and nothing was returned!')
};

var changePasswordFailure = function changePasswordFailure(error) {
  $('#message').text('Error on change password');
  $('#message').css('background-color', 'red');
  // console.error('changePasswordFailure ran. Error is :', error)
};

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var config = __webpack_require__(3);
var store = __webpack_require__(1);

// CREATE MEAL

var addMeal = function addMeal(data) {
  // console.log("reached create")
  return $.ajax({
    url: config.apiUrl + '/all_meals',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  });
};

//DELETE MEAL

var deleteMeal = function deleteMeal(data) {
  // console.log("reached delete")
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + '/all_meals/' + data.all_meal.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  });
};

//UPDATE MEAL 

var updateMeal = function updateMeal(data) {

  return $.ajax({
    url: config.apiUrl + '/all_meals/' + data.all_meal.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
    // data: data
  });
};

//GET MEALS

var getMeals = function getMeals() {
  // console.log("this is api-meals, get meals")
  return $.ajax({
    url: config.apiUrl + '/all_meals',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }

    // data: data
  });
};

module.exports = {
  addMeal: addMeal,
  updateMeal: updateMeal,
  getMeals: getMeals,
  deleteMeal: deleteMeal

};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var updateSuccess = function updateSuccess() {
  $('#message').text('meal has been updated');
  $('#message').css('background-color', 'green');
};

var updateFailure = function updateFailure(error) {
  $('#message').text('Error on update');
  $('#message').css('background-color', 'red');
  form.reset();
};

var getMealsSuccess = function getMealsSuccess(data) {
  // console.log("get meals successful",data)

};

function getMealsFailure(error) {
  // console.log(error)
  $('#message').text('Error on retrieval');
  $('#message').css('background-color', 'red');
}

function addMealSuccess(form) {
  $('#message').text('Your meal has been added');
  $('#message').css('background-color', 'green');
  form.reset();
  $('#show-meals').click();
}

function addMealFailure(error) {
  // console.log(error)
  $('#message').text('Error on adding meal');
  $('#message').css('background-color', 'red');
  form.reset();
}

function deleteMealSuccess(form) {
  $('#message').text('Your meal has been deleted.');
  $('#message').css('background-color', 'green');
  form.reset();
  $('#show-meals').click();
}

function deleteMealFailure(error) {
  // console.log(error)
  $('#message').text('Error on deleting');
  $('#message').css('background-color', 'red');
  $('#delete-meal').trigger('reset');
}

function updateMealSuccess(form) {
  $('#message').text('Your meal has been updated.');
  $('#message').css('background-color', 'green');
  form.reset();
  $('#show-meals').click();
}

function updateMealFailure(error) {
  // console.log(error)
  $('#message').text('Error on updating meal');
  $('#message').css('background-color', 'red');
  $('#update-meal').trigger('reset');
}

module.exports = {
  updateSuccess: updateSuccess,
  updateFailure: updateFailure,
  addMealSuccess: addMealSuccess,
  addMealFailure: addMealFailure,
  deleteMealSuccess: deleteMealSuccess,
  updateMealSuccess: updateMealSuccess,
  updateMealFailure: updateMealFailure,
  deleteMealFailure: deleteMealFailure

};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(14);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "li.randomMeal {\n  background-color: #ff9100; }\n", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(17);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
],[5]);