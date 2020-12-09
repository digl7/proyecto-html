function colorAmarillo(){
    document.getElementById("banner-gris").style.color = "#F9BC50";

}


function darkmode() {
  var cuerpo = document.body;
  var header = document.getElementById('main-nav')
  cuerpo.classList.toggle("darkmode");
  header.classList.toggle("darkmode");

}



function menu() {
  var x = document.getElementById("myLinks"); 
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
