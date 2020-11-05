# Un Pseudo-Code

``` 

```





# Boucles et Conditions

## Structure Alternative

Admettons la condition suivante

```

```

## Structures de répétition

### Les boucles *POUR* (For...To)

Mais *POUR* quoi ... 🙄.
Blague à part,
Fonction : Répéter une suite d'instructions un certain nombre de fois.
Utilisation : Utilisée lorsque le nombre d'itération est connu.

Pseudo-code 
``` 
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
 





Black Friday
Écrire un programme qui permet de demander, de calculer et d’afficher 
la réduction effective au produit par rapport à un
 pourcentage et le prix d’un produit après lui avoir 
 appliqué un pourcentage de réduction.


Algo : 

```
variables prixInit, tauxReduction, prixFinal, montantReduction : réels

Début
    afficher("Quel est le prix initial ?")
    lire(prixInit)
    afficher("Entrer le taux de la réduction en % : ")
    lire("tauxReduction")

    montantReduction ← prixInit x tauxReduction / 100
    prixFinal ← prixInit - montantReduction
    prixFinal ← prixInit x ( 1 - taux)

    afficher("Le montant de la réduction est ", montantReduction, " et le montant Final est ", prixFinal)

Fin 
```





Écrire un algorithme qui demande un nombre à l’utilisateur, 
et l’informe ensuite si ce nombre est positif ou négatif 
(on laisse de côté le cas où le nombre vaut zéro).


variable nombreChoisi : entier

Début
    afficher("Choisir un nombre entier : ")
    lire(nombreChoisi)
    si nombreChoisi > 0
        alors afficher("nombre positif")
        sinon afficher("nombre négatif")
    fsi
Fin


Début 
    afficher("Choisir un nombre entier : ")
    lire(nombreChoisi)

    si nombreChoisi > 0
        alors afficher("nombre positif")
        sinon si nombre < 0
            alors afficher("nombre négatif")
            sinon afficher("nombre nul")
        fsi
    fsi
Fin



Écrire un algorithme qui demande deux nombres à l’utilisateur 
et l’informe ensuite si leur produit est négatif ou positif 
(on laisse de côté le cas où le produit est nul). 
Attention toutefois : on ne doit pas calculer le produit des deux nombres. 


GUILLAUME : 
variables n1, n2 : entier

Début
    afficher("Entrer un nombre : ")
    lire(n1)   
    afficher("Entrer un nouveau nombre : ")
    lire(n2)

    si n1 > 0 et n2 > 0
        alors afficher("Ce nombre est positif")
    fsi

    si n1 < 0 et n2 < 0
        alors afficher("Ce nombre est positif")
    fsi

    si n1 < 0 et n2 > 0
        alors afficher("Ce nombre est négatif")
    fsi

    si n1 > 0 et n2 < 0
        alors afficher("Ce nombre est négatif")
    fsi
Fin


MAÏTE
variables n1, n2 : entier

Début
    afficher("Entrer un nombre : ")
    lire(n1)   
    afficher("Entrer un nouveau nombre : ")
    lire(n2)

    si n1 > 0 et n2 > 0
        alors afficher("Ce nombre est positif")
        sinon si n1 > 0 et n2 < 0
            alors afficher("Ce nombre est négatif")
            sinon si n1 < 0 et n2 > 0
                alors afficher("Ce nombre est négatif")
                sinon aficher("nombre positif")
                fsi
            fsi
        fsi
    fsi
Fin



variables n1, n2 : entier
autre 

Début
    afficher("Entrer un nombre : ")
    lire(n1)   
    afficher("Entrer un nouveau nombre : ")
    lire(n2)

    si (n1 > 0 ET n2 > 0) OU (n1 < 0 ET n2 < 0)
        alors afficher("ce nombre est positif")
        sinon afficher("ce nombre est négatif)
        fsi        
    fsi
Fin




Écrire un algorithme qui demande l’âge d’un enfant 
à l’utilisateur. Ensuite, il l’informe de sa catégorie : 
• "Poussin" de 6 à 7 ans 
• "Pupille" de 8 à 9 ans 
• "Minime" de 10 à 11 ans 
• "Cadet" à partir 12 ans 

Julien
variable age : entier

Début
    afficher("Entrer votre âge")
    lire(age)

    si age >= 6 ET age <= 7
        alors afficher("Vous êtes POUSSIN")
    fsi

    si age >= 8 ET age <= 9
        alors afficher("Vous êtes Pupille")
    fsi

    si age >= 10 ET age <= 11
        alors afficher("Vous êtes Minime")
    fsi

    si age >= 12
        alors afficher("Vous êtes Cadet")
    fsi
Fin


Mike
variable age : entier 
debut 
    ecrire("Entrez un age")
    lire age

    Si (age > 5 ET age < 8)
        alors ecrire("poussin")     
    Fsi

    Si (age > 7 ET age < 10)
        alors ecrire("pupille")
    Fsi

    Si (age > 9 ET age < 12)
        alors ecrire("pupille")
    Fsi

    Si (age > 11)
        alors ecrire("cadet")
    Fsi
fin


variables age : entier

debut 
    afficher("entre votre age")
    lire (age)

    si (age > 5 ET age < 8)
    alors afficher ("poussin")
        sinon si (age > 7 ET age < 10)
        alors afficher ("pupille")
            sinon si (age > 9 ET age < 12)
            alors afficher ("minime")
            sinon afficher ("cadet")
            fsi
        fsi
    fsi
fin






variable >= valeur   Supérieur ou égal
variable <= valeur   Inférieur ou égal
variable == valeur   Strictement égal
variable != valeur   Différent
variable > valeur
variable < valeur



Variable
age : entier;

debut

    afficher ("quel est ta catégorie ?);
    lire (age);

    si age >= 12 
        alors ecrire ("Cadet")
        fsi
        sinon si 10 <= age <= 11
            alors ecrire ("Minime")
            fsi
            sinon si 8 <= age  <= 9
                alors ecrire ("Pupille")
                fsi
                sinon si 6 <= age  <= 7
                    alors ecrire ("Poussin")
                fsi
    fsi
fin





variable age : entier

Début
    afficher("entre votre age")
    lire (age)

    si (age >= 12)
        alors afficher("cadet")
        sinon si (age >= 10)
            alors afficher("minimes")
            sinon si (age >= 8)
                alors afficher("pupilles")
                sinon si (age >= 6)
                    alors afficher("poussin")
                    sinon afficher("IL n'existe pas de catégorie pour cet âge")
                fsi
            fsi
        fsi
    fsi                    
Fin









Écrire un algorithme qui demande la catégorie 
d’un enfant à l’utilisateur. Ensuite, il l’informe de son âge  : 
• "Poussin" de 6 à 7 ans 
• "Pupille" de 8 à 9 ans 
• "Minime" de 10 à 11 ans 
• "Cadet" à partir 12 ans 



variable catégorie : caractères
Début
    afficher("Entrer votre catégorie : ")
    lire(categorie)

    si categorie == "poussin"
        alors afficher("Vous avez entre 6 et 7 ans")
        sinon si categorie == "pupilles"
            alors afficher("Vous avez entre 8 et 9 ans")
            sinon si categorie == "minimes"
                alors afficher("Vous avez entre 10 et 11 ans")
                sinon si categorie == "cadet"
                    alors afficher("Vous avez plus de 12")
                    sinon afficher("la catégorie n'existe pas")
                fsi
            fsi
        fsi
    fsi

Fin


variable categorie: caractères

début
    afficher("entrez votre catégorie") 
    lire(categorie)

    selon categorie
        cas "Poussin" : afficher("l'enfant a 6 ou 7 ans")
        cas  "Pupille" : afficher("l'enfant a  8 ou 9 ans")
        cas  "Minime" : afficher("l'enfant a  10 ou 11 ans")
        cas  "cadet" : afficher("l'enfant a  plus de 12 ans")
        defaut : afficher("la catégorie n'existe pas")
    fselon
fin






demander à l'utilisateur d'entrer 3 chiffres et vérifier s'il sont classé par ordre croissant ou non.



variable nbre1, nbre2, nbre3 : entiers

Début
    afficher("Renseigner un chiffre :")
    lire(nbre1)   
    afficher("Renseigner un chiffre :")
    lire(nbre2)   
    afficher("Renseigner un chiffre :")
    lire(nbre3)

    si nbre1 < nbre2 ET nbre2 < nbre3
        alors afficher("chiffres entrés par ordre croissant")
        sinon affiche("Ils ne sont pas dans l'ordre croissant")
    fsi

Fin

















Exercices 






Algorithme > 
Demander à l'utilisateur d'entrer des chiffres.
D'en faire l'addition jusqu'à ce que l'on appuie sur 0.
Afficher à la fin le total des additions des chiffres entrés et le nombre de fois 
que nous avons entré les chiffres.


1 + 2 + 3 + 4 + 5 = 15
5;



variables nombre, nombreOperations, fin, total : entiers
nombre ← 0
total ← 0
nombreOperation ← 0
fin ← 0

Début
    afficher("Entrer un nombre")
    lire(nombre)

    tant que nombre != fin faire
        total ← total + nombre
        nombreOperations ← nombreOperation + 1

        afficher("Entrer un nombre")
        lire(nombre)
    ftantque

    afficher("J'ai rentré", nombreOperation, " chiffres pour un total de ", total)
Fin



Demander à l'utilisateur d'entrer des chiffres.
D'en faire l'addition jusqu'à ce que l'on appuie sur 0.
Afficher à la fin le total des additions des chiffres entrés et le nombre de fois 
que nous avons entré les chiffres.

variables nombre, total, nombreOperations, fin : entiers
nombre ← 0
total ← 0
nombreOperation ← 0
fin ← 0

Début

    Répéter
        afficher("Entrer un nombre")
        lire(nombre) 5   6  0 
        total ← total + nombre   0 + 5 + 6 + 0
        nombreOperation ← nombreOperation + 1    0 + 1 + 1 + 1
    tant que nombre != fin

    afficher("J'ai rentré", nombreOperation, " chiffres pour un total de ", total)
    3 opérations > 11
Fin











variables compteur, objectif, nombre, total, pas : entiers
pas ← 1
objectif ← 5
nombre ← 0
total ← 0

Début

    Pour compteur ← 0 à objectif par PAS faire
        afficher("Entrer un nombre")
        lire(nombre)
        total ← total + nombre
    fpour

    afficher("J'ai fait", compteur, " opérations pour un total de ", total)
    
Fin