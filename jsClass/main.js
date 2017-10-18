
function choice(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}

var title = choice(titleNames);
var color = choice(titleColors);

var titleColors = [
"#d6641b",
"#516735",
"#c4776e",
"#bfddde",
"#faf691",
"#781f1f",
"#6c0d6d",
"#007dc6",
"#ffc220",
"#004c91",
"#d6a36e"]


var titleNames = ["Another Air", 
"I assume a comfortable position", 
"Word Web",
"Day and Night",
"Early August",
"Smog",
"Evening",
"The Wooden Spoon",
"Portrait",
"Daybreak",
"Sugar"
]