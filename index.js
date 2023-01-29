var numbers = [45, 78, 90, 100, 65, 32, 39, 12];

//get element by index
var element =numbers[3];
console.log(element);

//set element value by index
numbers[7] = 90;
numbers[1] = 55;
console.log(numbers)

//find index of an element
var positionIndex = numbers.indexOf(32);
console.log(positionIndex)

var positionIndexNone = numbers.indexOf(1232);
console.log(positionIndexNone)
