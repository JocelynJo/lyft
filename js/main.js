function validarTelefono(){
	$('.envio').on('click', function() {
		if($("#phone").val().length > 9) {  
       		alert("El teléfono debe tener 9 caracteres. Ej. 666112233");  
        	return false;  
   		} else{

    		//window.localStorage.setItem('telefono',$('#'));//pendiente
    		

    		window.localStorage.setItem('telefono', $('#phone').val());//pendiente


    	} 
	});
	
}




$( document ).ready(function() {
    
	$('li a').on('click', function(e){
		var pais_pulsado = $(this).find('span').html();

		// lo guardo en localStorage
		window.localStorage.setItem('prefijo_pais', pais_pulsado);
	});

	var paises = [
		{
			nombre: "chile",
			prefijo: "+569",
			bandera: "img/banderas/Chile.png"
		},
		{
			nombre: "argentina",
			prefijo: "+549",
			bandera: "img/banderas/Argentina.png"
		},
		{
			nombre: "brasil",
			prefijo: "+55",
			bandera: "img/banderas/Brazil.png"
		},
		{
			nombre: "peru",
			prefijo: "+51",
			bandera: "img/banderas/Peru.png"
		},
		{
			nombre: "colombia",
			prefijo: "+57",
			bandera: "img/banderas/Colombia.png"
		}

	];
	var pre_pais = window.localStorage.getItem('prefijo_pais');

	var pais = {};	
	for (var i=0 ; i<paises.length ; ++i){
		if (paises[i].prefijo_pais == pre_pais) {
			pais = paises[i];
			break;
		}
	}
	$('#paises').html(pais.prefijo);
	//$('#prefijo').html(pais.prefijo);


  

});



