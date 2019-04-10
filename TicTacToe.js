



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






$('table tr td .dot').click(function(x){
	//console.log($("tr td").index());
	//console.log($(this));
	//console.log($(this).parent().index())
	if ($(this).parent().parent().index() == 0){
		$(this).css('background-color','#B22222');
		for (var i = $('table tr').last().index();  i >= 0; i--) {
				var row = $('table tr')[i];
				console.log(row.getElementsByTagName('td .dot').parent()[$(this).parent().index()])
				if (row.getElementsByTagName('td')[$(this).parent().index()].style.backgroundcolor != 'red'){
					row.getElementsByTagName('td.dot')[$(this).parent().index()]
					break;
				}
			}
	}
	//console.log($("table").find("tr").last()[0]);
	//console.log($(x).index());
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
