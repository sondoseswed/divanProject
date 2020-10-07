//
function poets(name, nickName, information, bestOne){
	return{
		name: name,
		nickName: nickName,
		information: information,
		bestOne: bestOne
		
	};
}
//Declare a variable 
var poet1=poets(" Ahmad Ibn Zayduni al-Makhzumi","Ibn Zaydun","Renowned Arab poet of Cordoba and Seville. Born in Cordoba to a noble family of the Makhzum tribe. Nostalgia is a major theme in his poetry","Nūniyya");
var poet2=poets("Abu Ishaq Ibn Ibrahim ","Ibn Khafaja","He was showing strange concern of death with absolute satisfaction in the inevitability and comprehenseve of death","The Mountain poem");
var poet3=poets("Muhammad ibn Abd Allah ","Lisan Al-Din Ibn Al-Khatib ","He is highly esteemed both as an historian and as a poet. Some of his poems were put to music as muwashshah. He was a contemporary and acquaintance of Ibn Khaldun.","Jadaka Al-Ghaith");
 
//search Bar 
// function mySearch(){
//   var input, filter, ul, li, a;
//   input = document.getElementById("search");
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("list");
//   li = ul.getElementsByTagName("li");
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }



function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
}


 




