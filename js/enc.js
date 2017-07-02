
$(document).ready(function(){
alert('test conection');
var counter = 0;
var counter2 = 0;
/*$("#de").css('display','none');*/
$("#btn_go").on("click",function() {
 

counter2 = 0;
var final = " ";
$("#final").text("");
 var element, element2, convert, result, convert_space,convert_space2,
 result_space,result_space2;
  var max_small = 122;
  var min_small = 97;
  var min_big = 65;
  var max_big = 90;
  var min_nope = 48;
  var max_nope = 57;

    



    var a = document.getElementById("text").value;
    var b = document.getElementById("shift").value;
    
  
    if (a === "") {
    $("#final").text("Enter some text...");
    $("#final").css({"display":"block",
                 "color":"#FF0000"});
    
   counter2 = 1;
    }else if(b.length > 2){
    $("#final").text("Enter max-shift of [25]");
    $("#final").css({"display":"block",
                 "color":"#FF0000"});
    counter2 = 4;
    }else if (b > 25) {
      $("#final").text("Enter max-shift of [25]");
    $("#final").css({"display":"block",
                 "color":"#FF0000"});
    counter2 = 5;
    }else if(b === "" || b === "0"){
    $("#final").text("Enter some valid shift...");
    $("#final").css({"display":"block",
                 "color":"#FF0000"});
    counter2 = 3;
    }else{

   for (var i = 0;i <= a.length - 1;i++) {
    var c = a[i].charCodeAt(0);
    var parseC = parseInt(c);
    // console.log(parseC);
    var parseB = parseInt(b);
    if (parseC === 32 ||parseC === 33 ||parseC === 63 ||parseC === 64 ||parseC === 44 ||parseC === 46 ||parseC === 124 || parseC === 40 || parseC === 41) {
    convert_space = parseC;
    result_space = String.fromCharCode(convert_space);
	final += result_space;
    }else if (parseC >= min_small && parseC <= max_small || parseC >= min_big && parseC <= max_big) {
       if (parseC >= min_small && parseC <= max_small) {
      convert = parseC += parseB;
  
    // console.log(parseC);
    if (convert > max_small) {

      var idk = Number(convert) - Number(max_small);
      var idk2 = Number(min_small) + Number(idk) - 1;
      var ff = String.fromCharCode(idk2);
      // console.log(ff);
      final += ff;
    }else{
      result = String.fromCharCode(convert);
  final += result;
    }

 }else if (parseC >= min_big && parseC <= max_big) {
 convert2 = parseC += parseB;
  
  if (convert2 > max_big) {
  // final = " ";
      var idk_big = Number(convert2) - Number(max_big);
      var idk2_big = Number(min_big) + Number(idk_big) - 1;
      var ff_big = String.fromCharCode(idk2_big);
      // console.log(ff_big);
      final += ff_big;
    }else{
      result2 = String.fromCharCode(convert2);
  final += result2;
    }
 }
    }else{
     
     convert_space2 = parseC;

    result_space2 = String.fromCharCode(convert_space2);
    // console.log(result_space2);
  final += result_space2;
    // counter2 = 30;
    }

   



}
}
 // console.log(final);

if (counter2 > 0) {

  
}else{
$("#de").css('display','inline-block');
element = document.getElementById("final").innerHTML += "Encrypted text with "+ b + " shift :"+ final;
element2 = document.getElementById("final").style.color="#85c1a4";



$("#final").css("display","block");
 $("#page").css({"background-image":"url(css/cc.png)",
       "background-repeat": "no-repeat",
       "background-attachment": "fixed",
       "background-position": "center",
       });
counter++;

 if (counter > 1 ) {
       $("#page").css({
       "background-image":"url(css/c.png)",
       "background-repeat": "no-repeat",
       "background-attachment": "fixed",
       "background-position": "center",
        });
    counter = 0;
       // $("#final").css("display","none");
    // $('#text').attr("placeholder", "Enter some text...");
    // $('#text').val("");
    // $('#shift').attr("placeholder", "Enter some shift...");
    // $('#shift').val("");
      $('#final').css("display","none");
      $('#final').val("");
      $('#final').text("");
   }

}

// window.location.reload();
//         var counter = 0;
//    $("#btn").click(function(){
//     counter+= 1;

// });

$("#de").click(function(){
 localStorage.setItem('taken_shift', JSON.stringify(b));
localStorage.setItem('taken_text', JSON.stringify(final));
 
});
 

  
}
);
function refresh(){
	// element = document.getElementById("final").innerHTML = " ";
	window.location.reload();

    // $("#final").load("inc/content.php");
    $("#final").css("display","none");
    $('#text').attr("placeholder", "Enter some text...");
    $('#text').val("");
    $('#shift').attr("placeholder", "Enter some shift...");
    $('#shift').val("");

}

});


