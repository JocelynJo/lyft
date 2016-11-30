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
var nombre_pais = window.localStorage.getItem("prefijo_pais") || "chile";

var pais = {};
for (var i=0 ; i<paises.length ; ++i){
	if (paises[i].prefijo_pais == nombre_pais) {
		pais = paises[i];
		break;
	}
}
$('#pais img').attr('src', pais.prefijo);
$('#prefijo').html(pais.prefijo);