//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 

var radius = parseFloat(prompt('Please input a radius to begin.')); 

function circleCalculation(radius) {
	var area = Math.PI * Math.pow(radius,2);
	var circumference = 2 * Math.PI * radius;

	if (Number.isInteger(radius) === true) {
		alert('The area of a circle with a radius of ' + radius + ' is ' + area + ' and the circumference of the circle is ' + circumference + '.');
	} else {
		alert('The area of a circle with an approximate radius of ' + Math.round(radius) + ' is approximately ' + Math.round(area) + ' and the circumference of the circle is approximately ' + Math.round(circumference) + '.');
	}
}

circleCalculation(radius);