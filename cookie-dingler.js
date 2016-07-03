var click = document.getElementById('bouton');

var view = document.getElementById('affichage');
var score = 0;
var countClick = 1;
  

  var addScore = function(){
     if (score >= 0) {
         score = score + countClick;
         view.innerHTML = score;
         }
  }
  click.addEventListener("click", addScore);