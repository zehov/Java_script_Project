
function doCrypt() {
	var shiftText = document.getElementById("shift").value;
	shiftText=parseInt(shiftText);
	var Text = document.getElementById("text_area").value;
	console.log(shiftText);
	if (!/^-?\d+$/.test(shiftText)) {
		//alert("Shift is not an integer");
		 document.getElementById("mesage").innerHTML = "Shift is not an integer or empty";
      document.getElementById("mesage").style.color = "red";
    document.getElementById("mesage").style.fontSize="14px";
		return;
	}
	
	var inpObj = document.getElementById("shift");
    if (inpObj.checkValidity() === false) {
        document.getElementById("mesage").innerHTML = inpObj.validationMessage;
      document.getElementById("mesage").style.color = "red";
    document.getElementById("mesage").style.fontSize="14px";
    } else {
        document.getElementById("mesage").innerHTML = "Shift OK";
         document.getElementById("mesage").style.color = "#fff";
/*do coding*/

document.getElementById("code").innerHTML =caesarShift(Text,shiftText);
 document.getElementById("code").style.background = "#000";

    } 
    function caesarShift(text, shift1) {
    	//console.log(text+'11111');
    	//console.log(shift1+'-----');
    	/*function convert num to word*/
    	var a = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
function toWords (num) {
	if (num==0){
str='zero';
  return str;
 }
    if ((num = num.toString()).length > 3) return 'too big Number';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    // str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    // str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    // str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + '' : '';
   

    return str;
}
/* end convertor*/

	var result1 = "";
	for (var i = 0; i < text.length; i++) {
		var c1 = text.charCodeAt(i);
		console.log(c1);
		 console.log('typeof'+typeof(c1));
		 //console.log(text[i]);
		 if ((48 <= c1 && c1 <=  57)){
var text1=toWords(text[i])
console.log(text1);
 console.log('typeof-len======'+typeof(text1.length));
		for (var k = 0; k <= text1.length; k++) {
			console.log('length is ...'+text1.length);
			var c2 = text1.charCodeAt(k);
			if      (65 <= c2 && c2 <=  90) result1 += String.fromCharCode((c2 - 65 + shift1) % 26 + 65);  // Uppercase EN
		else if (97 <= c2 && c2 <= 122) result1 += String.fromCharCode((c2 - 97 + shift1) % 26 + 97);  // Lowercase EN
		else if (1040 <= c2 && c2 <=  1071) result1 += String.fromCharCode((c2 - 1040 + shift1) % 32 + 1040);  // Uppercase BG
		 else if (1072 <= c2 && c2 <= 1103) result1 += String.fromCharCode((c2 - 1072 + shift1) % 32 + 1072);  // Lowercase  BG
		 else if (k=text1.length) result1+= String.fromCharCode(32); 

		else                          result1+= text.charAt(k);  // Copy
		}//end cicle to convert 
		
		 }//end if isNan

		if      (65 <= c1 && c1 <=  90) result1 += String.fromCharCode((c1 - 65 + shift1) % 26 + 65);  // Uppercase EN
		else if (97 <= c1 && c1 <= 122) result1 += String.fromCharCode((c1 - 97 + shift1) % 26 + 97);  // Lowercase EN
		else if (1040 <= c1 && c1 <=  1071) result1 += String.fromCharCode((c1 - 1040 + shift1) % 32 + 1040);  // Uppercase BG
		 else if (1072 <= c1 && c1 <= 1103) result1 += String.fromCharCode((c1 - 1072 + shift1) % 32 + 1072);  // Lowercase  BG

		else                  
        //console.log('proba 222222----'+text.charAt(i));
		 if(isNaN(text.charAt(i)) || text.charAt(i)===' ')  {result1+= text.charAt(i); } // Copy
	}
	
	return result1;
	
}
}
/***************decoding***************************/
function doCrypt1(isDecrypt) {
	var shiftDecode = document.getElementById("shift1").value;
	shiftDecode=parseInt(shiftDecode);
	var Text1 = document.getElementById("text_area1").value;
	console.log(shiftDecode);
	if (!/^-?\d+$/.test(shiftDecode)) {
		 document.getElementById("mesage1").innerHTML = "Shift is not an integer or empty";
      document.getElementById("mesage1").style.color = "red";
    document.getElementById("mesage1").style.fontSize="14px";
		return;
	}
	

	var inpObj = document.getElementById("shift1");
    if (inpObj.checkValidity() === false) {
        document.getElementById("mesage1").innerHTML = inpObj.validationMessage;
      	document.getElementById("mesage1").style.color = "red";
    	document.getElementById("mesage1").style.fontSize="14px";
    } else {
        	document.getElementById("mesage1").innerHTML = "Shift OK";
         	document.getElementById("mesage1").style.color = "#fff";
/*do decoding*/

		document.getElementById("decode").innerHTML =caesarShift1(Text1,shiftDecode);
 		document.getElementById("decode").style.background = "#000";

    } 
    function caesarShift1(text, shift) {
	var result = "";
	//shift=-shift;
	for (var i = 0; i < text.length; i++) {
		//var c = text.charCodeAt(i);
		 var c = text[i].charCodeAt(0);
   			 c = parseInt(c);

   			 console.log('typeof'+typeof(c));
		if      (65 <= c && c <=  90) result += String.fromCharCode((c - 65 -shift+26) % 26 + 65);  // Uppercase
			else if (97 <= c && c <= 122) result += String.fromCharCode((c - 97 - shift+26) % 26 + 97);  // Lowercase
			else if (1040 <= c && c <=  1071) result += String.fromCharCode((c - 1040 - shift+32) % 32 + 1040);  // Uppercase BG
		 	else if (1072 <= c && c <= 1103) result += String.fromCharCode((c - 1072 - shift+32) % 32 + 1072);  // Lowercase  BG

			else                          result += text.charAt(i);  // Copy
	}
	return result;
	//console.log(result);
}
}
//sendig e-mail
function sendMail() {

    var email = document.getElementById("myEmail").value;
    console.log(email);
    if(email.length===0){ alert('Enter e-mail');}
    	else{
    var link = "mailto:"+email +  "&subject=" + escape("My chipher")+
            
             
              "&body=" + escape(document.getElementById("code").textContent);
    

    window.location.href = link;}}

/*end script*/
