document.getElementById("pulsanteInizio").addEventListener("click",myFunction());

function myFunction(){


  var scf = ["sasso","carta","forbice"];
  var randomItem1 = scf[Math.floor(Math.random() * scf.length)];
  var randomItem2 = scf[Math.floor(Math.random() * scf.length)];
   document.getElementById("pla1").innerHTML = randomItem1;
   document.getElementById("pla2").innerHTML = randomItem2;

   if (((randomItem1 == "sasso") && (randomItem2 == "carta")) || ((randomItem1 == "carta") && (randomItem2 == "forbice")) || ((randomItem1 == "forbice") && (randomItem2 == "sasso"))) {
     document.getElementById("result").innerHTML = "Giocatore 2 ha vinto";
   } else if (((randomItem1 == "carta") && (randomItem2 == "sasso")) || ((randomItem1 == "forbice") && (randomItem2 == "carta")) || ((randomItem1 == "sasso") && (randomItem2 == "forbice"))) {
     document.getElementById("result").innerHTML = "Giocatore 1 ha vinto";
   } else {
     document.getElementById("result").innerHTML = "Parità";
   }


}
