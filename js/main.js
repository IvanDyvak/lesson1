window.onload = function(){

var one = 'строка';
	two = 'число';
	three = 'логічна';
	four = 'undefined';
	five = 'null';
	six = 'обєкт';

function checkType() { 
	 do {
	var check = confirm ('хотите ли узнать тип любой из переменных?');
		if (check == false){
	 	alert('BYE')}
	
		else {
		var res = prompt('insert number from one to six');
		if (res== 'one'){
			alert('это строка: наприклад, слово')
		}
		else if (res== 'two'){
			alert('это число: наприклад 2')
		}
		else if (res== 'three'){
			alert('це логічна змінна - yes/no')
		}
		else if (res== 'four'){
			alert('це змінна undefined - без присвоєного значення')
		}
		else if (res== 'five'){
			alert('це змінна null - тобто нічого')
		}
		else if (res== 'six'){
			alert('це змінна обєкт')
		}
		
		else {alert('You want to quit')
		}
	}
}while (check == true);
}

checkType();

var btnCheckType = document.getElementById('checkType');
var btnTableShow = document.getElementById('tableShow');

btnCheckType.onclick = checkType;
btnTableShow.onclick = tableShow;


var arr = new Array ('строка', 'число', 'логічна', 'undefined', 'null', 'обєкт');


function tableShow(){
	document.write('<table cellpading="0" cellspacing="0" style="width:80%;text-align:center" border="1"><thead><tr><th>строка</th><th>число</th><th>логічна</th><th>undefined</th><th>null</th><th>обєкт</th></tr></thead><tbody>')
	for(var i = 0; i < arr.length; i++ ){
 		arr[i] = new Array(2);
 		document.write('<tr>')
	
 		for(var row = 0; row < arr.length; row++){
  			for(var col = 0 ; col< arr.length; col++){
 				arr[row][col] 
 				
  			}arr[row][col] = document.write('<td>змінна')
 		}arr[row][col] = document.write('</td>')

 			document.write('</tr>')
 	}document.write('</tbody></table>')
}console.log(arr);






// tableShow();









}