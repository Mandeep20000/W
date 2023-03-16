var counter = 1;

setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);
/*------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------*/
var linkPresentacion = document.getElementById("link-presentacion");
var presentacionClicked = localStorage.getItem("presentacionClicked");

linkPresentacion.onclick = function() {
  if (!presentacionClicked) {
/*------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------*/