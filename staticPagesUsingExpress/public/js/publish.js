
var  list= 10;
var start =0;

function writeResult(){
	for ( i=start; i <queries.length  && i <list; i++){
		//document.write('<tr><td colspan=1><img src = '+file+'></td> <td colspan=1> '+title+ '</td> <td>'+ quantity+'</td><td>'+price.toFixed(2)+'</td>.<td>'+total.toFixed(2)+'</td></tr>');
		console.log(queries[i][0]);
		document.write('<div id ="listed"><h5>'+queries[i][0]+'</h5><a href='+queries[i][1]+'>link</a></div>');
	}
}


function changeResults(){

}
/* running total for subtotals */
