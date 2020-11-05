/* Algo : 

variables prixInit, tauxReduction, prixFinal, montantReduction : réels

Début
    afficher("Quel est le prix initial ?")
    lire(prixInit)
    afficher("Entrer le taux de la réduction en % : ")
    lire("tauxReduction")

    montantReduction ← prixInit x tauxReduction / 100
    prixFinal ← prixInit - montantReduction

    afficher("Le montant de la réduction est ", montantReduction, " et le montant Final est ", prixFinal)

Fin

var prixInit;
var tauxReduction;
var prixFinal;
var montantReduction;

prixInit = prompt("Quel est le prix initial ? ");
tauxReduction = prompt("Entrer le taux de la réduction en % : ");

montantReduction = prixInit * tauxReduction / 100;
prixFinal = prixInit - montantReduction;

console.log("Le montant de la réduction est " + montantReduction + " et le montant Final est " + prixFinal);
console.log(`Le montant de la réduction est ${montantReduction} et le montant Final est ${prixFinal}`);




















var categorie = prompt("categorie ?");
switch (categorie.toLowerCase()) {
    case "poussin":
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à valeur1
      console.log("6");
      break;
    case "pupilles":
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à valeur2
      console.log("8");
      break;
    case "minimes":
      // Instructions à exécuter lorsque le résultat
      // de l'expression à valeurN
      console.log("10");
      break;
      case "cadets":
      // Instructions à exécuter lorsque le résultat
      // de l'expression à valeurN
      console.log("12");
      break;
    default:
      // Instructions à exécuter lorsqu'aucune des valeurs
      // ne correspond 
      console.log("connais pas");
      break;
  }*/



/*var nbre1;
var nbre2;
var nbre3;

nbre1 = prompt("Renseigner un chiffre :");
nbre2 = prompt("Renseigner un chiffre :");
nbre3 = prompt("Renseigner un chiffre :");

nbre1 = Number(nbre1);
nbre2 = Number(nbre2);
nbre3 = Number(nbre3);


if((nbre1 < nbre2) && (nbre2 < nbre3))
{
    console.log("chiffres entrés par ordre croissant");
}
else if((nbre1 > nbre2) && (nbre2 > nbre3))
{
    console.log("chiffre décroissant");
}
else 
{
    console.log("aucun des deux");
}*/



/*var nbVal, valeur, max, stopp, totalValeurs;
max = 5;
stopp = -1;
nbVal = 0;
totalValeurs = 0

valeur = Number(prompt("Donner une valeur"));


while ((valeur != stopp) && (nbVal < 5))
{
  nbVal++;
  totalValeurs = totalValeurs + valeur;
  valeur = Number(prompt("Donner une valeur"));
}

console.log("Le total des valeurs saisies est ", totalValeurs, " pour, ", nbVal, "  itérations.")*/




/*var categorie;

categorie = prompt("Entrez votre catégorie");

switch(categorie)
{
  case "poussin":
    console.log("l'enfant a 6 ou 7 ans");
    break;
  case "pupille":
    console.log("l'enfant a 8 ou 9 ans");
    break;
  case "minime":
    console.log("l'enfant a 10 ou 11 ans");
    break;
  case "cadet":
    console.log("l'enfant a plus de 12");
    break;
  default:
    console.log("La catégorie n'existe pas");
    break;
}*/

/*"1" + "1" > "11"

Concaténation de la chaine


1 + 1 = 2*/



/*var nombre;
var total;
var nombreOperation;
var fin;

fin = 0;
total = 0;
nombreOperation = 0;

nombre = Number(prompt("Entrer un nombre"));

while (nombre != fin)
{
  total = total + nombre;
  nombreOperation = nombreOperation + 1;
  nombre = Number(prompt("Entrer un nombre"));
}

console.log("J'ai rentré " + nombreOperation + " chiffres pour un total de " + total);*/

/*var compteur;
var total;
var nombre;
var objectif;

objectif = 5;
total = 0;
nombre = 0;
compteur = 0;

for(compteur = 0; compteur <= objectif; compteur = compteur + 1)
{
  nombre = Number(prompt("Entrer un nombre"));
  total = total + nombre;
}

console.log("J'ai fait" + compteur + " opérations pour un total de " + total);*/







var nombre = 0;
var total = 0;
var compteur = 0;

for(compteur = 0; compteur < 5; compteur++)
{
  nombre = Number(prompt("Entrer un nombre"));

  total += nombre;
}

console.log("Le total est de " + total + " avec " + compteur + " itérations");