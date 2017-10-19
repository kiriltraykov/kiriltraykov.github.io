
function choice(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}


var titleColors = [
"#d6641b",
"#516735",
"#c4776e",
"#781f1f",
"#6c0d6d",
"#007dc6",
"#ffc220",
"#004c91",
"#990000",
"#5a2c35",
"#0c8b87"]

        var count = poemDetails.length;
        var footnote = "There are currently " + count + " poems to read from. Each is displayed by random selection."

    $(document).ready(function(){
		$('.button').on('click', function(){

			var poem = choice(poemDetails);    
            var color = choice(titleColors);
		
		$('h2').text(poem[0].toUpperCase());
		$('h2').css('color', color);
		$('#body').html(poem[1]);
		$('#author').text("Author: " + poem[2]);
		$('#translator').text("Translator: " + poem[3]);
		$('.footnote').text(footnote);

		})

		});

