$(document).ready(function(){

	$('#nameProfle').html(window.localStorage.getItem('nombre'));
	$('#mailProfile').html(window.localStorage.getItem('telefono'));

});