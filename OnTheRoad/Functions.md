# Les procédures et fonctions

## Les paramètres

### Locaux – Globaux

Vous vous rappelez des paramètres ? Euh .... non 🤔 ...

Mais si les **<span style="color:#D7BA7D">paramètres</span>**, dans la section précédente. Les paramètres sont des arguments, des variables (ou constantes) placés entre parenthèse d'une routine et qui permet d'envoyer des valeurs à la **<span style="color:#D7BA7D">routine</span>**.

On distingue deux catégories de paramètres :

- Les **locaux**
  - Les paramètres locaux indiquent que la paramètre passé lors de l'appel de la routine sera copié localement dans la routine (la routine travaillera donc sur une copie locale, on parle de passage par valeur)
- les **globaux**.
  - Les paramètres globaux sont, comme le nom indique, globaux à l'algorithme. Il n'y a pas de copie générée (on parle de passage par variable ou adresse)

## Déclaration des routines

### Les procédures

Une procédure (ou sous-programme) est une routine (un bloc de code) qui exécute un traitement puis rend la main. On peut ainsi isoler une partie de l’algorithme global et éventuellement l’appeler plusieurs fois en gardant un code structuré et modulaire.

Pseudo-Code

```
PROCEDURE procedure(<liste des paramètres>)
       [<déclarations locales>]
  DEBUT
       <instructions>
  FIN
```

<p align="right">(En anglais : SUBPROCEDURE – BEGIN – END)</p>

Fonctionnement : La procédure exécute donc un bout de code. Toutes les variables déclarées ne seront pas gardées.

### Les fonctions

Une fonction est un sous-algorithme effectuant un traitement et qui retourne une valeur.

Pseudo-Code

```
FONCTION fonction(<liste des paramètres>) : type_retourné
       [<déclarations locales>]
  DEBUT
       <instruction>
	...
  RETOURNE <résultat>
  FIN
```

<p align="right">(En anglais : FUNCTION – BEGIN – RETURN – END)</p>

Fonctionnement : La fonction retourne une valeur après un traitement des instructions.

## Portée des identifiants

La portée d’un identifiant est la partie de l’algorithme dans laquelle cet identifiant est reconnu conformément à sa déclaration, c’est-à-dire l’ensemble des lignes de codes dans lesquelles l’utilisation de cet identifiant fera référence à la donnée qu’il définit.

Un identifiant sera « visible » dans l’algorithme où il a été déclaré et dans tout sous algorithme appelé, mais jamais à un niveau plus haut.


# Un petit bonnus ? 🙄  La récursivité

Qu'est-ce que la récursivité ?

Selon [Wikipedia](https://www.wikiwand.com/fr/R%C3%A9cursivit%C3%A9), c'est une démarche qui fait référence à l'objet même.

Un petit exemple ? 
Une suite arithmétique est défini par :
- Un premier terme $u_0$ ou $u_p$
- la formule suivante : $Un + 1 = Un + r$ où $r$ représente la raison de la suite

En mathématique, la sommes des suites arithmétiques, sont des formules récursives.
$S_n = (n + 1) * (U_0 + U_n) / 2$


Mais en pseudo-code, une fonctionne récursive donne quoi ? 

un exemple avec une somme d'une suite r:
```
FONCTION somme(n, r: entier) : entier
  DEBUT
    RETOURNE sn(n - 1) + r
  FIN
```
A noter qu'à ce code, il manque une condition et ne calclule qu'à chaque itération la valeur $U_n$

/!\ Éléments essentiels d’une méthode récursive
- Un (ou plusieurs) cas de base
  - Les valeurs d’entrées pour lesquelles on ne fait aucun appel récursif sont appelées les cas de base
- Appels récursifs
    - Appels de la méthode courante
    - Chaque suite d’appels récursifs doit essentiellement se terminer sur un cas de base

---

# Prêt pour la prochaine partie ? 😉 [C'est par ici](./Tri.md)