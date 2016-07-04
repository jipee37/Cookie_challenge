var click = document.getElementById('bouton');
var view = document.getElementById('affichage');
var score = 0;
var compteur = 1;
var multi = document.getElementById('multiplicateur');  
var price = 50; /* pour réinitialiser le décompte*/


  var addScore = function(){
     if (score >= 0) {
         score = score + compteur;
         view.innerHTML = score;
         }
  }
  click.addEventListener("click", addScore);


var incrementer = function(){
         
         if (score >= price) {
         compteur = compteur * 2;
         score = score - price;
         price = price * 2;
         multi.value = "multiplicateur: " + compteur + " next increment, price " + price;
     }
        else {
          alert("Ne laisse pas tomber, je sais c'est pas si facile !");
      }
  }
  multi.addEventListener("click", incrementer);
