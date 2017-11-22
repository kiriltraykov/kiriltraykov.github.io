
//----Code for the front-end:

$(document).ready(function(){

    $('form').hide();
	  $('#add').hide();

    $('#button1').on('click', function(){
    	$('#button1').css('background-color','#8EE5EE');
    	$('#button2').css('background-color','#FFFFFF');
    	$('#button3').css('background-color','#FFFFFF');
    	$('#button4').css('background-color','#FFFFFF');
    	$('#button5').css('background-color','#FFFFFF');
    	$('#button6').css('background-color','#FFFFFF');
		  $('#greetingToShow').css('font-family','Dosis');
      		});

    $('#button2').on('click', function(){
    	$('#button1').css('background-color','#FFFFFF');
    	$('#button2').css('background-color','#8EE5EE');
    	$('#button3').css('background-color','#FFFFFF');
    	$('#button4').css('background-color','#FFFFFF');
    	$('#button5').css('background-color','#FFFFFF');
    	$('#button6').css('background-color','#FFFFFF');
	  	$('#greetingToShow').css('font-family','Kurale');
      		});

    $('#button3').on('click', function(){
    	$('#button1').css('background-color','#FFFFFF');
    	$('#button2').css('background-color','#FFFFFF');
    	$('#button3').css('background-color','#8EE5EE');
    	$('#button4').css('background-color','#FFFFFF');
    	$('#button5').css('background-color','#FFFFFF');
    	$('#button6').css('background-color','#FFFFFF');
		  $('#greetingToShow').css('font-family','Indie Flower');
      		});

     $('#button4').on('click', function(){
     	$('#button1').css('background-color','#FFFFFF');
    	$('#button2').css('background-color','#FFFFFF');
    	$('#button3').css('background-color','#FFFFFF');
     	$('#button4').css('background-color','#8EE5EE');
     	$('#button5').css('background-color','#FFFFFF');
    	$('#button6').css('background-color','#FFFFFF');
	  	$('#greetingToShow').css('font-family','Bubbler One');
      		});

     $('#button5').on('click', function(){
     	$('#button1').css('background-color','#FFFFFF');
    	$('#button2').css('background-color','#FFFFFF');
    	$('#button3').css('background-color','#FFFFFF');
     	$('#button4').css('background-color','#FFFFFF');
     	$('#button5').css('background-color','#8EE5EE');
     	$('#button6').css('background-color','#FFFFFF');
	  	$('#greetingToShow').css('font-family','Courgette');
      		});

     $('#button6').on('click', function(){ 	
     	$('#button1').css('background-color','#FFFFFF');
    	$('#button2').css('background-color','#FFFFFF');
    	$('#button3').css('background-color','#FFFFFF');
     	$('#button4').css('background-color','#FFFFFF');
     	$('#button5').css('background-color','#FFFFFF');
     	$('#button6').css('background-color','#8EE5EE');
	  	$('#greetingToShow').css('font-family','Englebert');
      		});

      $('#button7').on('click', function(){
      	$('#button7').text("cool!");
      	$('#button8').text("");
      	$('#button9').text("");
      	$('#button10').text("");
      	$('#button11').text("");
      	$('#button12').text("");
      	$('#button13').text("");
      	$('#button14').text("");
		    $('#greetingToShow').css('color','#698B69');
      		});

      $('#button8').on('click', function(){
        $('#button7').text("");
      	$('#button8').text("yay!");
      	$('#button9').text("");
      	$('#button10').text("");
      	$('#button11').text("");
      	$('#button12').text("");
      	$('#button13').text("");
      	$('#button14').text("");
	    	$('#greetingToShow').css('color','#CD9B1D');
      		});

      $('#button9').on('click', function(){
      	$('#button7').text("");
      	$('#button8').text("");
      	$('#button9').text("super!");
      	$('#button10').text("");
      	$('#button11').text("");
      	$('#button12').text("");
      	$('#button13').text("");
      	$('#button14').text("");
		    $('#greetingToShow').css('color','#9C661F');
      		});

      $('#button10').on('click', function(){
      	$('#button7').text("");
      	$('#button8').text("");
      	$('#button9').text("");
      	$('#button10').text("woho!");
      	$('#button11').text("");
      	$('#button12').text("");
      	$('#button13').text("");
      	$('#button14').text("");
		    $('#greetingToShow').css('color','#CD3333');
      		});

      $('#button11').on('click', function(){
      	$('#button7').text("");
      	$('#button8').text("");
      	$('#button9').text("");
      	$('#button10').text("");
      	$('#button11').text("fab!");
      	$('#button12').text("");
      	$('#button13').text("");
      	$('#button14').text("");
	    	$('#greetingToShow').css('color','#C67171');
      		});

      $('#button12').on('click', function(){
      	$('#button7').text("");
      	$('#button8').text("");
      	$('#button9').text("");
      	$('#button10').text("");
      	$('#button11').text("");
      	$('#button12').text("yass!");
      	$('#button13').text("");
      	$('#button14').text("");
		    $('#greetingToShow').css('color','#8E388E');
      		});

      $('#button13').on('click', function(){
      	$('#button7').text("");
      	$('#button8').text("");
      	$('#button9').text("");
      	$('#button10').text("");
      	$('#button11').text("");
      	$('#button12').text("");
      	$('#button13').text("solid!");
      	$('#button14').text("");
		    $('#greetingToShow').css('color','#33A1C9');
      		});

      $('#button14').on('click', function(){
      	$('#button7').text("");
      	$('#button8').text("");
      	$('#button9').text("");
      	$('#button10').text("");
      	$('#button11').text("");
      	$('#button12').text("");
      	$('#button13').text("");
      	$('#button14').text("bravo!");
		    $('#greetingToShow').css('color','#5F9EA0');
      		});

	$('#areatowrite').on('click', function(event){
        var posx = event.pageX; 
        var posy = event.pageY;
        console.log(posx, posy);
        $('form').show();
	    $('#add').show();
	    	 });
	 
	    
  $('#add').on('click', function(){
      var toAdd = $('input[name=Words]').val();
      $('#greetingToShow').append('<p><b>' + toAdd + '</b></p>');
      $('form').hide();
      $('#add').hide();
        });

  // --Code for the socket
	 
   var socket;

   socket = socket.io.connect('http://localhost:3000');
   socket.on('greeting', newGreeting);

   function newGreeting(data){
   $('#areatowrite').append($('#greetingToShow'));
        };

   socket.emit('greeting', data);
    

   // --End of socket code

    $('#erase').on('click', function(){
		$('#greetingToShow').text("");
      		});

});