function colorAmarillo(){
    document.getElementById("banner-gris").style.color = "#F9BC50";

}


function Light() {
    document.body.style.background = "white";
    document.getElementById('main-nav').style.background ="white";
    document.getElementById('main-nav').style.color ="#181B1D";
    document.getElementById('ordenar').style.background ="white";
    document.getElementById('ordenar').style.color ="#181B1D";
}

  
function Dark() {
    document.body.style.background = "#181B1D";
    document.getElementById('main-nav').style.background ="#181B1D";
    document.getElementById('main-nav').style.color ="white";
    document.getElementById('ordenar').style.background ="#181B1D";
    document.getElementById('ordenar').style.color ="white";
}

function menu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}