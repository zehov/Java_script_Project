
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
    	console.log(text+'11111');
    	console.log(shift1+'-----');
	var result1 = "";
	for (var i = 0; i < text.length; i++) {
		var c1 = text.charCodeAt(i);
		if      (65 <= c1 && c1 <=  90) result1 += String.fromCharCode((c1 - 65 + shift1) % 26 + 65);  // Uppercase EN
		else if (97 <= c1 && c1 <= 122) result1 += String.fromCharCode((c1 - 97 + shift1) % 26 + 97);  // Lowercase EN
		else if (1040 <= c1 && c1 <=  1071) result1 += String.fromCharCode((c1 - 1040 + shift1) % 32 + 1040);  // Uppercase BG
		 else if (1072 <= c1 && c1 <= 1103) result1 += String.fromCharCode((c1 - 1072 + shift1) % 32 + 1072);  // Lowercase  BG

		else                          result1+= text.charAt(i);  // Copy
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
    
    var link = "mailto:zehov@abv.bg" + "?cc=myaddress@example.com"+ "&subject=" + escape("My chipher")+
            
             
              "&body=" + escape(document.getElementById("code").textContent);
    

    window.location.href = link;}

/*end script*/
