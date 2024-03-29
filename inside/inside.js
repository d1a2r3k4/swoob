

 let valuei = parseInt(document.getElementById('number').value, 10);
 valuei = isNaN(valuei) ? 1 : valuei;
 let price = 9 ;


function incrementValue(){

 document.getElementById('summ').innerHTML=price+=9 

  
    valuei++;
    document.getElementById('number').value = valuei;
}

function decreaseValue(){

  document.getElementById('summ').innerHTML=price-=9

  valuei--;
  document.getElementById('number').value = valuei;
};


$(document).ready(function(){
  $("#about1").click(function(){
    $("#tex2").css("display", "none");
    $("#tex3").css("display", "none");
    $("#tex1").fadeToggle();

  });

  $("#about2").click(function(){
    $("#tex1").css("display", "none");
    $("#tex3").css("display", "none");
    $("#tex2").fadeToggle();

  });

  $("#about3").click(function(){
    $("#tex1").css("display", "none");
    $("#tex2").css("display", "none");
    $("#tex3").fadeToggle();

  });

});













