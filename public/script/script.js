//let nom ="Admin"
//const x = 17
//const y = 5
//let x = Number(prompt("Saisir un nombre :"))
//let y = Number(prompt ("Saisir un deuxième nombre :"))

//const somme = x+y
//const soust = x-y
//const produit = x*y
//const division = x/y
//const modulo = x%y

//console.log(x + " + " +y+ " = " +somme)
//console.log(x + " - " +y+ " = " +soust)
//console.log(x + " * " +y+ " = " +produit)
//console.log(x + " / " +y+ " = " +division)
//console.log(x + " % " +y+ " = " +modulo)
// let nbrm = 27;
// let nbr;
// for(let i=1; ; i++){
    // nbr = Number(prompt("Essaie " + i + " : entre un nombre entre 10 et 50"));
    // if (nbr<10 || nbr > 50) {
        // alert("le nombre doit être entre 10 et 50 !");
        // continue;
    // }
    // if (nbr<nbrm) {
        // alert("Trop petit ! choisis un nombre plus grand.");
    // } else if (nbr> nbrm) {
        // alert("Trop grand ! choisis un nombre plus petit.") ;
    // } else {
        // alert("Bravo ! tu as trouvé en " + i + " Tu es un génie");
        // break;
    // }
// }

// const resoudreQuadratique = (a, b, c) => {
//   if (a === 0) {
//     return {
//       erreur: "Ce n'est pas une équation du second degré (a ≠ 0 requis)."
//     };
//   }

//   const delta = b ** 2 - 4 * a * c;

//   if (delta > 0) {
//     const x1 = (-b - Math.sqrt(delta)) / (2 * a);
//     const x2 = (-b + Math.sqrt(delta)) / (2 * a);

//     return {
//       delta,
//       nombreDeSolutions: 2,
//       solutions: [x1, x2]
//     };
//   }

//   if (delta === 0) {
//     const x = -b / (2 * a);

//     return {
//       delta,
//       nombreDeSolutions: 1,
//       solutions: [x]
//     };
//   }

//   return {
//     delta,
//     nombreDeSolutions: 0,
//     solutions: []
//   };
// };
// console.log(resoudreQuadratique(1, -3, 2));

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eyeIcon");
const strengthText = document.getElementById("strengthText");

// afficher ou masquer le mot de passe
togglePassword.addEventListener("click", function(){
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  eyeIcon.classList.toggle("fa-eye");
  eyeIcon.classList.toggle("fa-eye-slash")

})

