
function Car(config){
  // Bail if the config is not passed in, it's optional
  if(! config){
    return;
  }

  /* My code here */
  // this.doors = config.doors || 4;
  this.interior = config.interior || 'cloth';
}
// JavaScript Does this for me
// var Car = {};
// Car.prototype = {'hasOwnProperty': funciton(){}, };
// JavaScript is now done

Car.prototype.interior = 'cloth';
Car.prototype.accelerate = function(){
  console.log('vvvrrrooooommm!');
};
Car.prototype.doors = 4;


// Some time later
var honda = new Car();

//console.log('honda interior: ', honda.interior);
//console.log(honda.doors);

var bmw = new Car({doors: 2, interior: 'leather', rims: 'custom'});

//console.log('bmw interior: ', bmw.interior);

var dodge = new Car({doors: 2, rims: 'custom'});

//console.log('dodge interior: ', dodge.interior);


// ###############################################
// Closures
// ###############################################

function showName(firstName){
  // do some stuff
  // more stuff

  function buildStatement(statementEnding){
    return firstName + statementEnding;
  }

  return buildStatement;
}

//console.log(showName('Dr. Livingstone'));

// var statement = showName('Dr. Livingstone');
// console.log(statement()); //Dr. Livingstone I presume


//console.log(showName('Dora')(' the explorer'));


function add(number1){

  function secondAdd(number2){
    console.log("secondAdd: ", number1);
    return number1 + number2;
  }

  return secondAdd;
}

var addition = add(1);

addition();

var addition2 = add(5);

addition2();

addition();


// A simple function for expecting values
// Ex: expect(kepler.color).toBe('red'); // should return true
function expect(target) {
  return {
    toBe: function(expectation) {
      if (target === expectation) {
        console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation );
        return true;
      } else {
        console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation );
        return false;
      }
    }
  }
}

expect('red').toBe('black');


function celebrityIDCreator(theCelebrities){
  var i;
  var uniqueID = 100;

  for(i = 0; i < theCelebrities.length; i++){
    theCelebrities[i]["id"] = function(j){
      return uniqueID + j;
    }(i);
  }

  return theCelebrities;
}

var action = [{name: "Stallone", id:0}, {name: "Willis", id:0}];
var updatedCelebs = celebrityIDCreator(action);

console.log("stallone", updatedCelebs[0].id);
console.log("willis", updatedCelebs[1].id);













//
