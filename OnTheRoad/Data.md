# Les variables et les données

## Les Variables
Une variable est un identifiant qui permet de *mémoriser* des valeurs.

Une variable st définie par : 
* son nom : un identificateur
* sa portée : les portions de code où elle est utilisable
* son type : les valeurs qu'elle peut prendre
* sa classe d'allocation : indique la zone mémoire où elle est stockée [Chapitre 0](./NotionDeBase.md)
* sa valeur initiale
  

### Les types prédéfinis de variables 

Les différents types prédéfinis en langage algorithmique que nous utiliserons sont :
* ENTIER	nombres entiers signés ex :	42
* RÉEL	nombres flottants signés ex : 0.154
* BOOLÉEN	énumération définissant les données vrai et faux ex :	vrai
* CARACTÈRE	caractère ANSI sur un octet	ex : ‘a’
* CHAINE	chaîne de caractères ex : « lapin »


### La déclaration des variables

Déclaration :

- variables simples

```
VARIABLES variable1, variable2, variable3, ... : type
```
<p align="right">(En anglais : VARIABLES)</p>

- variables indicées ou tableaux

Les tableaux permettent d’associer dans une même variable plusieurs données de même type avec un indice allant de l’indice minimum <entier1> à l’indice maximum <entier2>.

```
VARIABLES tableau[,] , ... : type
```

Un tableau peut comporter plusieurs dimensions délimitées par un point virgule :

```
VARIABLES tableau[<entier12>,<entier12>;<entier21>,<entier22>] , ... : type
```

Dans ce dernier exemple , il s’agit d’un tableau à 2 dimensions avec un indice pour les lignes (compris entre <entier11> et <entier12>) et un deuxième indice pour les colonnes (compris entre <entier21> et <entier22>).

Utilisation : l’accès à un élément d’un tableau se fait en indiquant la liste des indices correspondant à chaque dimension.

```
tableau[<indice1>;<indice2>; ...]
```


## Les constantes

Déclaration des constantes :

```
CONSTANTES MACONSTANTE, ... : type  ...
```
<p align="right">(En anglais : CONSTANTS)</p>

/!\ Une constante ne peut être modifiée dans l’algorithme.


