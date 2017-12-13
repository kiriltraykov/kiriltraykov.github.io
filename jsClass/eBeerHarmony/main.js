
//----Tried to use FETCH to connect to brewery API but am getting a complex error that has to do with CORS (which I cannot solve):

  // var url = 'https://api.brewerydb.com/v2/beer/random?key=135473eb8de9ed9ae7d473b4f9b17659'

          // fetch(url, {'mode': 'no-cors'})
          //       .then(function(response){return response.json()})
          //       .then(function(data){
          //       console.log(data)
          //        })
          //   //catch runs when there's an error
          //       .catch(function(error){
          //       return console.log(error)
          //       });                                                                            

// This is why will proceed with random selection from a list of 20 beers that I scraped by connecting to the API in the browser.

function choice(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}

$(document).ready(function(){

        $('#line1').delay(2000).show(0);
        $('#line2').delay(4000).show(0);
        $('#line3').delay(6000).show(0);
        $('#line4').delay(8000).show(0);
        $('#beginButton').delay(10000).show(0);
        $('#typeAnswer1').hide();
        $('#submit1').hide();
        $('#typeAnswer2').hide();
        $('#submit2').hide();
        $('#typeAnswer3').hide();
        $('#submit3').hide();
        $('#box').hide();

        $('#beginButton').on('click', function(){
        $('#beginButton').hide();
        $('#question').text("1. What car do you drive? (Type None if not applicable)");
        $('#typeAnswer1').show();
        $('#submit1').show();

        $('#submit1').on('click', function(){
        var answer1 = $('input[name=Words1]').val().slice(0,1).toLowerCase();
        $('#typeAnswer1').hide();
        $('#submit1').hide();
        $('#question').text("2. Which city was your first kiss in?");
        $('#typeAnswer2').show();
        $('#submit2').show();

        $('#submit2').on('click', function(){
        var answer2 = $('input[name=Words2]').val().slice(1,2);
        $('#typeAnswer2').hide();
        $('#submit2').hide();
        var search = answer1 + answer2;
        console.log(search);
        $('#question').text("3. Choose a number between 1 and 10:");
        $('#typeAnswer3').show();
        $('#submit3').show();


        $('#submit3').on('click', function(){
        var answer3 = $('input[name=Words3]').val();
        $('#typeAnswer3').hide();
        $('#submit3').hide();
        $('#question').text("");
        $('#line4').hide();
        $('#box').show();
        $('#warning').html("First," + "</br>" + "this is a reminder" +
                           "</br>" + "</br>" + "<b>" + "NOT" + "</b>" + "</br>" + "</br>" +
                           "to drink AND drive" + "</br>" + "or kiss AND drive!");


        $('#takeMeToResults').on('click', function(){
        $('#line1').hide();
        $('#line2').hide();
        $('#line3').hide();
        $('#line4').hide();
        $('#warning').text("");
        $('#takeMeToResults').text("");
        $('#box').hide();
        $('#beerMatchIs').html("<b>" + "Your Beer Match is:" + "</b>");
        var chosenBeer = choice(allbeers);
        var chosenBeerName = chosenBeer.data.name;
        var chosenBeerDescription = chosenBeer.data.description;
        var chosenBeerABV = chosenBeer.data.abv + "%";
        $('#beerName').text(chosenBeerName);
        $('#beerDescription').text(chosenBeerDescription);
        $('#beerABV').text("ABV percent: " + chosenBeerABV);
        window.setTimeout(function () {
        $("#cheers").html("Cheers!");
        }, 3000);
       

        });

        });

        });

        });

        });


});