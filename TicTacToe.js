

$('table tr').click(function(){
	if($(this).index() == 0){
	console.log("There was a click!");
	console.log($(this).position());
	//console.log($("table").find("tr").last()[0]);
	}
})



//$(this).css('background-color','#B22222');

$('table tr').each(function(){
	console.log('Stupid')
})