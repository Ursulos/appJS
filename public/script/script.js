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
let nbrm = 27;
let nbr;
for(let i=1; ; i++){
    nbr = Number(prompt("Essaie " + i + " : entre un nombre entre 10 et 50"));
    if (nbr<10 || nbr > 50) {
        alert("le nombre doit être entre 10 et 50 !");
        continue;
    }
    if (nbr<nbrm) {
        alert("Trop petit ! choisis un nombre plus grand.");
    } else if (nbr> nbrm) {
        alert("Trop grand ! choisis un nombre plus petit.") ;
    } else {
        alert("Bravo ! tu as trouvé en " + i + " Tu es un génie");
        break;
    }
}