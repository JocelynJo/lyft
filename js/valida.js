

var namePattern = "^[a-z A-Z]{4,30}$";
var emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";
 
function checkInput(idInput, pattern) {
   return $(idInput).val().match(pattern) ? true : false;
}
function checkRadioBox(nameCheck) {
  	return $(nameCheck).is(":checked") ? true : false;
}
function enableSubmit (idForm) {
  	$(idForm + " button.submit").removeAttr("disabled");
}
 
function disableSubmit (idForm) {
  	$(idForm + " button.submit").attr("disabled", "disabled");
}

function checkForm (idForm) {
   $(idForm + " *").on("change keydown", function() {
    if (checkInput("#name", namePattern) && checkInput("#apellido", namePattern)  && checkInput("#mail", emailPattern) && checkRadioBox("#legal"))
 		{
      		enableSubmit(idForm);
      	
    	} else {
      		disableSubmit(idForm);
    		}
  		});

	//window.localStorage.setItem('nombre', $("#name").val());
    //window.localStorage.setItem('mail', $('#mail').val());   
	}
function rescatarLocal(){
	var nameLocal= $('#name').val();
	window.localStorage.setItem('nombre', nameLocal);
	var mailLocal= $('#mail').val();
	window.localStorage.setItem('mail', mailLocal);
}



$(document).ready(checkForm('#register'));
$(document).ready(rescatarLocal());

$(document).ready(function(){
	var name1=window.localStorage.getItem('nombre');
	var email1=window.localStorage.getItem('mail');
	$('#nameProfle').html(name1);
	$('#mailProfile').html(email1);

});





