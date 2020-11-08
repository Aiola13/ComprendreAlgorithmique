# Boucles et Conditions


```{r echo=TRUE, eval=TRUE}
All the comments!
```

Les instructions
Les expressions
Une expression représente une succession de calculs ; elle peut faire intervenir des constantes, des variables, des fonctions et des opérateurs. Les expressions sont utilisées dans tout l’algorithme : dans les affectations, en paramètre des routines, dans les structures de contrôles…

Expression : syntaxe
Une expression peut être :

une valeur	42
une variable	x
une constante	C
un appel à une fonction	cos(x)
<expression> opérateurBinaire <expression>	32 + x
opérateurUnaire <expression>	non A
Les opérateurs :
– Les opérateurs arithmétiques

Les classiques :
– (unaire)	Changement de signe
+	Addition
–	Soustraction
*	Multiplication
/	Division flottante
Les opérandes peuvent être du type entier (le résultat est entier) ou réel (le résultat est reel), sauf pour la division flottante, où le résultat sera toujours de type réel.

La division entière :
DIV	Division entière
MOD	Modulo (reste de la division entière)
Ces deux opérateurs ne fonctionnent qu’avec des entiers.

– Les opérateurs logiques (et binaires)

Les opérandes sont booléennes, on a alors une opération logique. Le résultat est un booléen. Les expressions booléennes sont utilisées comme conditions dans les structures de contrôles.

NON (NOT)
négation logique ( ( neg ) )
ET (AND)
et logique ( ( wedge ) )
OU (OR)
ou logique ( ( vee ) )
OUEX (XOR)
ou exclusif
Rappels : avec a et b des booléens ou des expressions booléennes :

a ET b
n’est vrai que si a est vrai et b est vrai	est faux dès qu’un des deux est faux
a OU b
n’est faux que si a est faux et b est faux	est vrai dès qu’un des deux est vrai
a OUEX b	est vrai si un des deux seulement est vrai	est équivalent à a<>b
Important : Les opérateurs et et ou sont séquentiels : si l’évaluation de la première opérande suffit à donner le résultat, la deuxième n’est pas évaluée. Ainsi, si a est faux, a et b sera faux, sans que b n’ait été évalué.

Note : On utilisera les mêmes opérateurs sur des entiers non signés, on a alors des opérations sur bits. Les opérateurs fonctionnent de la même manière, le vrai correspondant à 1, le faux à 0.

Les opérateurs relationnels

Les deux opérandes doivent être de types compatibles. Le résultat est toujours de type booléen : vrai ou faux.

=	égal
<>	différent
<	inférieur à
>	supérieur
<=	inférieur ou égal
>=	supérieur ou égal
La concaténation de chaînes

L’opérateur « + » peut être utilisé avec les chaînes de caractères et les caractères pour la concaténation.

Règles d’évaluation des expressions
Priorité des opérateurs, par ordre décroissant :

opérateurs unaires	– ; non
opérateurs multiplicatifs	* ; / ; div ; mod ; et
opérateurs additifs	+ ; – ; ou
opérateurs relationnels	= ; < ; <= ; > ; >= ; <> (ou !=)
Les expressions entre parenthèses sont entièrement évaluées avant d’intervenir dans la suite des calculs.

Concordance de type : un opérateur binaire ne peut porter que sur deux valeurs du même type. Une exception a lieu lorsqu’une valeur est réelle et l’autre entière. Dans ce cas la valeur entière est convertie en une valeur réelle. Cette règle s’applique pour les opérateurs arithmétiques (+, -, *, /) et ceux de comparaisons.

L’affectation
Cette instruction permet d’affecter une valeur à une variable. La valeur peut être n’importe quelle expression de type compatible avec la variable.

Syntaxe :
ident_var ← <expression>
1
ident_var ← <expression>
avec ident_var : un identifiant de variable
Fonctionnement
ident_var ← <valeur>
1
ident_var ← <valeur>
Une valeur (une expression) ne peut en aucun cas figurer à gauche d’une affectation.
Une variable figurant à droite d’une affectation (et plus généralement dans toute expression) doit obligatoirement contenir une valeur.
Les appels aux fonctions et procédures
L’appel d’une procédure ou d’une fonction (routine) se fait par son nom suivi, s’il y a lieu, de la liste des arguments placés entre parenthèses. Il faut respecter l’ordre de déclaration des paramètres. Lorsque le passage se fait par adresse (paramètre global), l’argument doit obligatoirement être une variable. S’il est passé par valeur (paramètre local), il peut s’agir d’une expression quelconque. La distinction entre les différents paramètres sera vue en détail dans la partie consacrée aux procédures et fonctions.

Appel de procédure = une instruction
L’appel de procédure est une instruction à part entière :

ident_procedure(param1, param2, ...)
1
ident_procedure(param1, param2, ...)
Exemples de procédures : les entrées-sorties

Les procédures d’affichage : ECRIRE ou AFFICHER
(En anglais : PRINT, DISPLAY)

ECRIRE("Nombre de voitures : ", x)
1
ECRIRE("Nombre de voitures : ", x)
affiche sur l’écran (ou écrit dans un fichier) la chaîne ‘Nombre de voitures : ‘, suivi du contenu de la variable x.

AFFICHE(12+a)
1
AFFICHE(12+a)
affiche la valeur de l’expression12+a.

La procédure de lecture : LIRE
(En anglais : READ)

LIRE(x)
1
LIRE(x)
affecte à la variable x la valeur saisie (sur le clavier ou dans un fichier).

Appel de fonction
Une fonction est une routine qui retourne une valeur. L’appel de fonction sera donc utilisable comme n’importe quelle autre valeur (dans une expression, en paramètre d’une routine, …). Par exemple dans une affectation :

ident_var ← ident_fonction(param1, param2, ...)
1
ident_var ← ident_fonction(param1, param2, ...)
Note : un appel de fonction seul n’est pas une instruction !

Les structures de choix
L’alternative : SI – ALORS – SINON
Syntaxe :
SI <expression booléenne> ALORS
       <instruction>
       ...
SINON
       <instruction>
       ... 
FIN_SI
1
2
3
4
5
6
7
SI <expression booléenne> ALORS
       <instruction>
       ...
SINON
       <instruction>
       ... 
FIN_SI
(En anglais : IF – THEN – ELSE – ENDIF)

Remarque : la partie SINON <instruction> est facultative.

Attention : Le FIN_SI est obligatoire ! Il en sera de même pour toutes les instructions structurées : cette marque de fin doit être présente même si il n’y a qu’une seule instruction.

Fonctionnement
Si la condition (exprimée par l’expression booléenne) est vraie alors seule la suite d’instructions placée après le ALORS sera exécutée. Dans le cas contraire, si la partie SINON existe elle sera exécutée, si elle n’existe pas, rien ne se passe.

Choix multiples : SELON
Syntaxe :
SELON <ident_var> 
       <liste_valeur> : <instruction>
            ...     : ...
      {AUTREMENT : <instruction> }
FIN_SELON
1
2
3
4
5
SELON <ident_var> 
       <liste_valeur> : <instruction>
            ...     : ...
      {AUTREMENT : <instruction> }
FIN_SELON
(En anglais : CASE… OF – OTHERS – ENDCASE)

<liste_valeur>= une liste de valeurs (séparées par des virgules).

L’expression doit être de type scalaire : les types entiers et le type caractère.

Fonctionnement
Les instructions exécutées seront celles correspondant à la valeur de l’expression. Si celle-ci n’est pas dans une des liste, alors ce sera la partie autrement (si elle existe) qui sera exécutée.

Structures de répétition
La répétitive : TANT QUE
Syntaxe :
TANT_QUE <expression booléenne> 
       <instruction>
       ...
FIN_TANT_QUE
1
2
3
4
TANT_QUE <expression booléenne> 
       <instruction>
       ...
FIN_TANT_QUE
(En anglais : WHILE – ENDWHILE)

Fonctionnement :
Les instructions sont répétées tant que la condition est vérifiée. Comme le test est au début, les instructions peuvent donc ne jamais être exécutées.

Attention : il est impératif que la condition devienne fausse à un moment. Pour cela il faut que l’expression booléenne contienne au moins une variable qui sera modifiée dans la boucle.

La répétitive : REPETER – JUSQU’A
Syntaxe :
REPETER
       <instruction>
       ...
JUSQU'A <expression booléenne>
1
2
3
4
REPETER
       <instruction>
       ...
JUSQU'A <expression booléenne>
(En anglais : REPEAT – UNTIL)

Fonctionnement :
La condition est placée après les instructions, elles sont exécutées donc au moins une fois puis tant que la condition reste satisfaite.

L’itérative : POUR
Elle permet de répéter une série d’instructions un nombre déterminé de fois (donc connu à l’avance).

Syntaxe :
POUR <ident_var> ALLANT_DE <valeur_début> A <valeur_fin> {PAR_PAS_DE <incrément>}
       <instruction>
       ...
FIN_POUR
1
2
3
4
POUR <ident_var> ALLANT_DE <valeur_début> A <valeur_fin> {PAR_PAS_DE <incrément>}
       <instruction>
       ...
FIN_POUR
(En anglais : FOR – TO – ENDFOR)

Fonctionnement :
La variable est nécessairement de type scalaire : entier, caractère ou énumération. Les expressions de début et de fin doivent être compatibles avec elle. Elle prend successivement toutes les valeurs comprises entre les deux bornes, dans l’ordre croisant ou décroissant (si l’incrément est négatif). Elle ne peut pas être modifiée dans la boucle ! La déclaration de l’incrément lorsqu’il est unitaire peut être omise.

La boucle POUR est un cas particulier de la boucle TANT QUE. Si on connait à l’avance le nombre de répétitions à effectuer, la boucle POUR est toute indiquée. A l’inverse, si la décision d’arrêter la boucle ne peut s’exprimer que par un test, c’est la boucle TANT QUE qu’il faut choisir.









[comment]: # (CONDITIONS)


## Structure Alternative

Admettons la condition suivante

```

```




[comment]: # (BOUCLES)




## Structures de répétition

### Les boucles *TANT QUE ... FAIRE* (While...EndWhile)

Fonction : Répéter une suite d'instructions un certain nombre de fois.
Utilisation : Structure itérative "universelle", elle peut être utilisé tout le temps.

Pseudo-code 
``` 
*tant que* _<expression logique booléenne vraie>_ *faire*
    <traitement> {suite d'instruction}
*ftq*
```

#### Sa sémantique

Mais que fait finalement cette structure ? 🤔
* Elle répète une suite d'instruction tant que la condition booléenne n'est pas atteinte.


##### Exemple - FaitLeTotal - Nbre d'itération inconnu

Pseudo-code 
``` 
{Cette algorithme fait la somme des nbVal saisit, arrêt à la lesture de -1}

variables   stop : entiers
            valeur, totalValeurs : réels

Début
    stop ← -1
    totalValeurs ← 0
    afficher("Donner une valeur, " ,stop, " pour fini.")
    lire(valeur)

    *tant que* _valeur_ <> _stop_ *faire*
        totalValeurs ← totalValeurs + valeur
        afficher("Donner une autre valeur, " ,stop, " pour fini.")
        lire(valeur) {relance}
    *ftq*

    afficher("Le total des valeurs saisies est ", totalValeurs)
Fin
```

##### Exemple - FaitLeTotal - équivalent boucle *POUR*

Pseudo-code 
``` 
{Cette algorithme fait la somme des nbVal saisit, arrêt à la lesture de -1 ou après 5 saisies}

variables   nbVal, stop, max : entiers
            valeur, totalValeurs : réels

Début
    stop ← -1
    max ← 5
    nbVal ← 0
    totalValeurs ← 0
    afficher("Donner une valeur, " ,stop, " pour fini.")
    lire(valeur) {saisie de la 1ère donnée}

    *tant que* _valeur_ <> _stop_ ET _nbVal_ < _max_ *faire*
        totalValeurs ← totalValeurs + valeur
        nbVal ← nbVal + 1 
        afficher("Donner une autre valeur, " ,stop, " pour fini.")
        lire(valeur) {relance}
    *ftq*

    afficher("Le total des valeurs saisies est ", totalValeurs, " pour, ", nbVal, "  itérations.")
Fin
```

Mais ... 🤔🤔🤔 euh ... Je comprends pas ? 

Pourquoi utilise t'on l'opérateur logique ET ? et pas le OU ? 


Très belle question ! Tout est dans la logique et la reflexion, je vous explique : 
Avec les opérateurs OU, nous restons dans la boucle tant qu'une seule des 2 conditions est réalisée.
Ici il est donc préférable d'utiliser l'opérateur logique ET.




### Les boucles *REPETER ... TANT QUE (ou Jusqu'à)* (Do...While)

Fonction : Répéter une suite d'instructions au moins une fois et la répéter tant qu'un condition est remplie.
Utilisation : Utilisée lorsque le nombre d'itération est connu.

Pseudo-code 
``` 
*Répéter*
    <traitement> {suite d'instruction}
*tant que* _<expression logique booléenne vraie>_ 
```

#### Sa sémantique

Mais que fait finalement cette structure ? 🤔
* Elle traite les instructions
* Elle vérifie que la condition soie vraie
* Elle s'arrète ou continue selon la condition


##### Exemple - FaitLeTotal

Pseudo-code 
``` 
{Cette algorithme fait la somme des nbVal saisit}

variables   nbVal, cpt : entiers
            valeur, totalValeurs : réels

Début

    afficher("Combien de valeurs voulez-vous saisir ?")
    lire(nbVal)
    totalVal ← 0

    *Répéter* 
        afficher("Donner une autre valeur, " ,stop, " pour fini.")
        lire(valeur) {relance}
        totalValeurs ← totalValeurs + valeur
        nbVal ← nbVal + 1 
    *tant que* _valeur_ <> _stop_ ET _nbVal_ < _max_

    afficher("Le total des ", nbVal, "valeurs est ", totalValeurs)
Fin
```


### Différences entre les structures

Il existe effectivement plusieurs moyens pour réaliser des boucles d'instructions.
Mais ... quelle est la structure la plus optimisée allez-vous me dire ? 🤔

Réponse ..... Il n'y en a pas. En effet, cela dépend essentiellement de ce que vous souhaitez faire.

Récapitulatif :
* Tant que :
Cette structure permet de vérifier une condition particulière à chaque début de tour.
* Répéter ... Tant que :
Celle-ci, permet de vérifie une condition à la fin de chaque tour et permet donc d'être exécutée au moins une fois. 
* Pour :
Quant a pour celle-ci, elle a pour particulariter d'être utilisée lorsque nous connaissons à l'avance le nombre d'itération.



### Les boucles *POUR* (For...To)

Mais *POUR* quoi ... 🙄.
Blague à part,
Fonction : Répéter une suite d'instructions un certain nombre de fois.
Utilisation : Utilisée lorsque le nombre d'itération est connu.

Pseudo-code 
``` lolcode
*pour* _<compteur>_ de _<valeurInitiale>_ à _<valeurFinale>_ [par pas de  _<incrément>_] *faire*
    <traitement> {suite d'instruction}
*fpour*
```

#### Sa sémantique

Mais que fait finalement cette structure ? 🤔
* Elle initialise une variable de boucle (le compteur)
* Elle incrémente cette variable selon la valeur du "pas" indiqué
* Elle vérifie que cette variable ne dépasse pas ce "pas"

/!\ ❗❌⛔ Vous ne devez en aucun cas modifier ce compteur durant le traitement (les instructions)


##### Exemple - FaitLeTotal

Pseudo-code 
``` 
{Cette algorithme fait la somme des nbVal saisit}

variables   nbVal, cpt : entiers
            valeur, totalValeurs : réels

Début
    {initialisation du traitement}
    afficher("Combien de valeurs voulez-vous saisir ?")
    lire(nbVal)
    {initialisation du total à 0 avant cumul}
    totalVal ← 0

    {traitement qui se répète nbVal fois}
    *pour* _cpt_ ← 1 à _nbVal_ [faire par pas de 1]
        afficher("Donner une valeur : ")
        lire(valeur)
        totalValeurs ← totalValeurs + valeur {Cumul}
    *fpour*
    {édition des résultats}

    afficher("Le total des ", nbVal, "valeurs est ", totalValeurs)
Fin
```

