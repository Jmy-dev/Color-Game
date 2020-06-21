var numberOfSquares=6;

var colors = generate(numberOfSquares);
var alerting = document.getElementById("alerting")
var square= document.querySelectorAll(".square");
var selectedColor = selectColor();
var display= document.getElementById("displayColor");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#Easy");
var hard = document.querySelector("#hard");


easy.addEventListener("click",function(){
	alerting.textContent="";
	hard.classList.remove("selected");
	easy.classList.add("selected");
	numberOfSquares=3;
	colors= generate(numberOfSquares);
	selectedColor = selectColor();
	display.textContent = selectedColor;
	for( var i=0;i<square.length;i++){
		
			if (colors[i]) {
			square[i].style.backgroundColor = colors[i];
		}else {
			square[i].style.display ="none"; 

		}
	}


});
hard.addEventListener("click",function(){
	alerting.textContent="";
	easy.classList.remove("selected");
	hard.classList.add("selected");
	numberOfSquares=6;
	colors= generate(numberOfSquares);
	selectedColor = selectColor();
	display.textContent = selectedColor;
	for( var i=0;i<square.length;i++){
		
			square[i].style.backgroundColor = colors[i];
	
			square[i].style.display ="block"; 

		
		
	}


})
reset.addEventListener("click", function(){
   //Generate new colors

   colors = generate(numberOfSquares); 
   //select a new random colors
   	selectedColor = selectColor();
   //change the span 
   display.textContent=selectedColor;
   this.textContent = "New colors";
   alerting.textContent ="";

   //change colors of square
   for(var i =0;i<square.length;i++){
   	square[i].style.backgroundColor =colors[i];
   }
   h1.style.backgroundColor = "steelblue";
})
 display.textContent = selectedColor;

 for(var i=0; i<square.length;i++){
 	//intialize a color
 	square[i].style.backgroundColor = colors[i];
 	//adding an Event
 	square[i].addEventListener("click", function(){
 		//garping the color of selected square
        var clickedColor =this.style.backgroundColor;
        // comparing
        if(clickedColor === selectedColor)
        {
        	alerting.classList.remove("wrong")
        	alerting.classList.add("sucess");
        	alerting.textContent = "Correct!"
        	
        	changeColor(clickedColor);
        	h1.style.backgroundColor =clickedColor;
        	reset.textContent="Play Again!"
        }
        else{
        	this.style.backgroundColor  = "#232323";
        	alerting.classList.remove("sucess");
        	alerting.classList.add("wrong");


        	alerting.textContent = "Try again"

        }

 	});
 }

 function changeColor(color){
 	for(var i=0;i<square.length;i++){
       square[i].style.backgroundColor = color;
 	}
 }

 function selectColor(){
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
 }
 function generate(num){
 	//creating an array
 	var arr =[]
 	
    for(var i=0; i<num; i++){
    	// repeat the array
    	arr.push(repeat());

    };
 		
    // return the array
 	return arr;

 }
 function repeat(){

 	var r = Math.floor(Math.random(0)*256);
 	var g = Math.floor(Math.random(0)*256);
 	var b = Math.floor(Math.random(0)*256); 
    var number ="rgb(" + r + ", " + g + ", " + b +")" ;
 	return number;
 }