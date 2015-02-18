on hover of a pug
	fade in text slowly and a picture of a kitten - with text say i'm a kitten

	if you hover over the kitten then the text becomes bigger and the color changes



- pop up fades in - and minimizes when you click the minimize button, maximizes when you click the maximize button and goes away when you click the x button.
	- cool

- textarea, clear it with a button - on click button, set value to ''

	if statements and a function and an on click event on the button
		three inputs and a button 
			- if value 1 = 'apple' value 2 = 'pie' value 3 = 'delicious'

		then show the secret message: 

- for loop in javascript

- on mouse out of body
	- pop up modal - WAIT - don't go

- $.each in jquery
	for a list of blue blue blue green green red red
	on click button loop through the li tags
	and if it has value = blue
		change the color of that li tag to blue
	using $(this)

modal fade in - need bootstrap
	<div id="call-to-action-modal" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
	  <div class="modal-dialog modal-lg">
	    <div class="modal-content">
	      sdajfkljsad;klfjklasdjfkl;sdj;afjl;asd fsdalkfj asdjfadkls;f jklsadfkljsdal'f
	      ksadkl
	      f j
	      sdaj f
	      kjs dak
	      lf j
	      sad jf
	      sjd a
	      j
	      fas
	    </div>
	  </div>
	</div>

	function addEvent(){
	    // cursor has left the IE building
	    $('body').mouseleave(function() {
	      //if first time out of window
	      if (count < 1){
	        $('#call-to-action-modal').modal();
	      }
	      count++; // increment the counter
	    })
	  }
	  
	  // Do something if not logged in
	  if (val == 0){
	    // Do something after 10 seconds
	    setTimeout( function(){ 

	      //this makes it so the pop up comes only once
	      addEvent()
	    
	    }, 10000);
	  }