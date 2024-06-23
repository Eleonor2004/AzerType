/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/
motUtilisateur = document.getElementById("inputEcriture")
console.log(motUtilisateur)

boutonValidation = document.getElementById("btnValiderMot")
console.log(boutonValidation)

motPropose = document.querySelector(".inputEcriture")
console.log(btnValiderMot)

score = document.querySelector(".zoneScore")
console.log(score)

options = document.querySelectorAll(".optionSource input")
lancerJeu()
