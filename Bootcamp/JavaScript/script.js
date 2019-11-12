// var firstName = prompt("What is your First Name?");
// var lastName = prompt("What is your Last Name?");
// var age = prompt("What is your Age?");
// var fullName = firstName + " " + lastName ;
// alert("Your Full name is " + fullName + ".");
// alert("Your are " + age + " years old."); 




// function isEven (num) {
// 	if ( num%2 === 0 ) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }




// function isEvenn(num) {
// 	return num % 2 === 0 ;
// }




// function factorial(num) {
// 	var result = 1;
// 	while (num > 1) {
// 		result = result * (num);
// 		num--;
// 	}
// 	return result;
// }




// function factorial(num) {
// 	var result = 1;
// 	for (var i = num; i >= 1; i--) {
// 		result *= i;	
// 	}
// 	return result;
// }




// function kebabToSnake(str) {
// 	var newStr = str.replace(/-/g,'_');
// 	return newStr;
// }




// var list = ["Buy dog"];
// var input = prompt("What would you like to do?");
// while (input != "quit"){
// 	//handle the input
// 	if (input === "list"){
// 		console.log(list);
// 	} else if (input === "new"){
// 		newitem = prompt("Enter new item");
// 		list.push(newitem);
// }
// 	//ask again for new input
// 	input = prompt("What would you like to do?");	
// }
// console.log("You have quit the app");




// var ary = ["A","B","C","D"];
// for(var i = 0; i < ary.length; i++){
//     console.log(ary[i]);
// }




// var arry = ["Apple","Boy","Cat","Dog"];
// // arry.forEach(function () {
// // 	console.log("Inside for each.");
// // })
// // arry.forEach(function () {
// // 	alert("Inside for each.");
// // })
// arry.forEach(function (value) {
// 	console.log(value);
// })
// var i = 0;
// while(i < arry.length){
// 	console.log(arry[i]);
// 	i++;
// }




// var array = ["Buy dog"];
// var input = prompt("What would you like to do?");
// while (input != "quit"){
// 	//handle the input
// 	if (input === "list"){
// 		listItems();
// 	} else if (input === "new"){
// 		newItem();
// 	} else if (input === "delete"){
// 		deleteItem();
// 	}
// 	//ask again for new input
// 	input = prompt("What would you like to do?");	
// }
// console.log("You have quit the app");
// function listItems(){
// 	console.log("**********");
// 		array.forEach(function(todo, i){
// 			console.log(i +": "+todo);
// 		});
// 		console.log("**********");
// };
// function newItem(){
// 	newitem = prompt("Enter new item");
// 		array.push(newitem);
// }
// function deleteItem(){
// 	var index = prompt("Enter the index to delete:")
// 		array.splice(index,1);
// }

var button = document.querySelector("button");
var paragraph = document.querySelectorAll("p");
// var body = document.querySelector("body");
var isBlue = false;

// button.addEventListener("click", function() {
// 	body.style.background = "#4169E1";
// 	for ( var i = 0 ; i < paragraph.length ; i++){
// 		paragraph[i].textContent = "Someone clicked the button";
// 	}
// });

// button.addEventListener("click", function() {
// 	if (isBlue){
// 		body.style.background = "white";
// 		isBlue = false;
// 	} else {
// 		body.style.background = "blue";
// 		isBlue = true;
// 	}	
// });

button.addEventListener("click", function(){
	document.body.classList.toggle("blue");
});