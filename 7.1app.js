//Storing radius in variable r
var radius=12;
var area;

//Self invoke funtion to calculate Area of circle
var calculateArea =(function(radius){
	//area =radius*radius*Math.PI;
	return area =radius*radius*Math.PI;
})(radius); //passing radius(12) as param

//To print area of circle using it's formula where Math.PI gives the value of π 
console.log("When r=" + radius + "; Area=" + area);