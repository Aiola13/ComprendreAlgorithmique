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
  DEBUT>
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

---
