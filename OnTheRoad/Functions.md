Les procédures et fonctions
Les paramètres
Locaux – Globaux
Toute routine peut définir des paramètres, qui sont autant de données en entrée, fournies lors de l’appel à la routine depuis un autre endroit de l’algorithme. La structure de ces paramètres est définie immédiatement après l’entête de la routine. On distingue deux catégories de paramètres : les locaux et les globaux.

Les paramètres globaux ne gérèrent pas de copie locale du paramètre effectif. Ils ne font qu’un avec la donnée qui leur est passée. En appelant une routine qui a des paramètres globaux, il faut alors fournir pour ceux-ci un nom de variable existante, et non une expression, puisque la routine est susceptible de modifier la variable passée (on parle de passage par variable ou par adresse).
Les paramètres locaux indiquent que le paramètre effectif passé lors de l’appel à la routine sera en fait copié localement, et que la routine travaillera alors sur la copie locale (on parle de passage par valeur). De la sorte, toute modification effectuée par la routine ne sera pas répercutée sur la donnée passée en paramètre. Ce qui fait qu’un paramètre local peut recevoir une expression comme paramètre effectif, et non pas obligatoirement une variable.
Déclaration des paramètres
La déclaration des paramètres se fait comme une déclaration de variables. Deux parties pour séparer les paramètres locaux des globaux :

PARAMETRES globaux
    ident_type : ident_param1, ident_param2, ...
PARAMETRES locaux
    ident_type : ident_param1, ident_param2, ...
    ...
1
2
3
4
5
PARAMETRES globaux
    ident_type : ident_param1, ident_param2, ...
PARAMETRES locaux
    ident_type : ident_param1, ident_param2, ...
    ...
Note : l’ordre de déclaration n’a pas d’importance, mais il ne peut y avoir qu’une seule déclaration de paramètres locaux et qu’une seule déclaration de paramètres globaux.

Déclaration des routines
Les procédures
Une procédure (ou sous-programme) est une routine (un bloc de code) qui exécute un traitement puis rend la main. On peut ainsi isoler une partie de l’algorithme global et éventuellement l’appeler plusieurs fois en gardant un code structuré et modulaire.

Syntaxe :
PROCEDURE ident_procedure(<liste des paramètres>)
       [<déclarations paramètres>]
       [<déclarations locales>]
  DEBUT
       <instructions>
  FIN
1
2
3
4
5
6
PROCEDURE ident_procedure(<liste des paramètres>)
       [<déclarations paramètres>]
       [<déclarations locales>]
  DEBUT
       <instructions>
  FIN
(En anglais : SUBPROCEDURE – BEGIN – END)

Les fonctions
Une fonction est un sous-algorithme effectuant un traitement et qui retourne une valeur.

Syntaxe :
FONCTION ident_fonction(<liste des paramètres>) : ident_type_retourné
       <déclarations paramètres>
       [<déclarations locales>]
  DEBUT>
       <instruction>
	...
  RETOURNE <résultat>
  FIN
1
2
3
4
5
6
7
8
FONCTION ident_fonction(<liste des paramètres>) : ident_type_retourné
       <déclarations paramètres>
       [<déclarations locales>]
  DEBUT>
       <instruction>
	...
  RETOURNE <résultat>
  FIN
(En anglais : FUNCTION – BEGIN – RETURN – END)

La fonction retourne une valeur au moyen de la procédure système RETOURNE. Celle-ci doit donc obligatoirement figurer dans les instructions de la fonction.

La procédure système RETOURNE est « débranchante » : son exécution termine la fonction. Toute instruction placée après ne sera donc pas prise en compte.

Portée des identifiants
La portée d’un identifiant est la partie de l’algorithme dans laquelle cet identifiant est reconnu conformément à sa déclaration, c’est-à-dire l’ensemble des lignes de codes dans lesquelles l’utilisation de cet identifiant fera référence à la donnée qu’il définit.

Un identifiant sera « visible » dans l’algorithme où il a été déclaré et dans tout sous algorithme appelé, mais jamais à un niveau plus haut.

Il est possible d’avoir des « conflits » de portée, c’est-à-dire qu’un niveau d’imbrication de routine déclare un identifiant portant le nom d’un autre identifiant existant à un niveau supérieur. La règle alors est la suivante : la version la plus proche (la plus profondément imbriquée) de l’identifiant a la priorité.