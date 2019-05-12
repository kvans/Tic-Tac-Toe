



/*

function myFunction(x) {
   console.log($(x).index());
   console.log($(x)[0].style.backgroundcolor='red');
   $(x)[0].style.color='red';
   //$(x)[0].css('background-color','#B22222');
   //$(x '.dot').css('background-color','#B22222');
   //$('table tr td .dot').css('background-color','#B22222');
	//if($(this).index() == 0){
	//console.log("There was a click!");
	//console.log($("tr td").index());
	//console.log($("table").find("tr").last()[0]);
	//console.log($(x).index());
	
}

*/

//What is left to do
//	Program Players -> Work on this
//	Program winning logic


var player1 = 'red';
var player2 = 'blue';
var gamestarted = false;
//Allows player to click on top row dot and pushes the dot down =) 
$('#start').click(function(){
	gamestarted=true;
	console.log(gamestarted)
if(gamestarted==true){
	console.log('clicked')
	$('table tr td .dot').click(function(x){
		//console.log($("tr td").index());
		//console.log($(this));
		//console.log($(this).parent().index())
		var dotIndex = $(this).parent().index();
		var rowIndex = $(this).parent().parent().index();
		if ($(this).parent().parent().index() == 0){
			for (var i = $('table tr').last().index();  i >= 0; i--) {
					var rows = $('table tr')[i];
					if($($(rows).children()[dotIndex]).children().css("background-color") == "rgb(187, 187, 187)"){
						$($(rows).children()[dotIndex]).children().css('background-color','#B22222');
						break
					}
			}
		}
		//console.log($("table").find("tr").last()[0]);
		//console.log($(x).index());
	})
}
})
/*
$('table tr').click(function() {

    alert( this.rowIndex );  // alert the index number of the clicked row.


}); 
function myFunction(x) {
   console.log($(x).index());
 }
function trclick(){console.log('tr clicked')};

console.log()
//$(this).css('background-color','#B22222');

$('table tr').each(function(){
	console.log('Stupid')
})


*/
