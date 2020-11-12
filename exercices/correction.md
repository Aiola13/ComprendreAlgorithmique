# Exercices

## Black Friday

- Écrire un programme qui permet de demander, de calculer et d’afficher la réduction effective au produit par rapport à un pourcentage et le prix d’un produit après lui avoir appliqué un pourcentage de réduction.

Pseudo-Code :

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

---

## Neg or not neg (To Covid ...)

- Écrire un algorithme qui demande un nombre à l’utilisateur, et l’informe ensuite si ce nombre est positif ou négatif (on laisse de côté le cas où le nombre vaut zéro).

Pseudo-Code :

```
Variable nombreChoisi : entier
Début
    afficher("Choisir un nombre entier : ")
    lire(nombreChoisi)

    si nombreChoisi > 0
        alors afficher("nombre positif")
        sinon afficher("nombre négatif")
    fsi

Fin

```

- Ajout à l'algorithme du cas où le nombre est nul

```
Variable nombreChoisi : entier
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
```

---

## Le produit

- Écrire un algorithme qui demande deux nombres à l’utilisateur et l’informe ensuite si leur produit est négatif ou positif (on laisse de côté le cas où le produit est nul). Attention toutefois : on ne doit pas calculer le produit des deux nombres.

Pseudo-Code :

❌

```
Variables n1, n2 : entier
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
```

** OPTIMISATION :** Cet algorithme va forcément traiter toutes les conditions **SI**, ce qui induira un temps de traitement plus long. ❌

❌

```
Variables n1, n2 : entier

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
```

** OPTIMISATION :** Cet algorithme pourra traiter au maximum 4 conditions **SI**. ❌

✅ ** OPTIMISE**

```
variables n1, n2 : entier autre

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
```

✅

---

## Donne moi ce que tu veux, je te dirais qui tu es!

- Écrire un algorithme qui demande l’âge d’un enfant à l’utilisateur. Ensuite, il l’informe de sa catégorie :
  - "Poussin" de 6 à 7 ans
  - "Pupille" de 8 à 9 ans
  - "Minime" de 10 à 11 ans
  - "Cadet" à partir 12 ans

❌
```
Variable age : entier

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
```
** OPTIMISATION :** Cet algorithme va forcément traiter toutes les conditions **SI**, ce qui induira un temps de traitement plus long. ❌

❌
```
variables age : entier

debut afficher("entre votre age") lire (age)

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
```
** OPTIMISATION :** Cet algorithme va forcément traiter toutes les conditions **SI**, ce qui induira un temps de traitement plus long. ❌

❌

```
Variable age : entier;

debut

    afficher ("quel est ta catégorie ?);
    lire (age);

    si age >= 12
        alors ecrire ("Cadet")
        sinon si 10 <= age <= 11
            alors ecrire ("Minime")
            sinon si 8 <= age  <= 9
                alors ecrire ("Pupille")
                sinon si 6 <= age  <= 7
                    alors ecrire ("Poussin")
                fsi
            fsi
        fsi
    fsi
fin
```
** OPTIMISATION :** Cet algorithme va forcément traiter toutes les conditions **SI**, ce qui induira un temps de traitement plus long. ❌

✅ ** OPTIMISE**

```
variable age : entier

Début afficher("entre votre age") lire (age)

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
```
✅ 



- Écrire un algorithme qui demande la catégorie d’un enfant à l’utilisateur. Ensuite, il l’informe de son âge : • "Poussin" de 6 à 7 ans • "Pupille" de 8 à 9 ans • "Minime" de 10 à 11 ans • "Cadet" à partir 12 ans


✅ 
```
variable catégorie : caractères Début afficher("Entrer votre catégorie : ") lire(categorie)

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
```

```
variable categorie: caractères

début afficher("entrez votre catégorie") lire(categorie)

    selon categorie
        cas "Poussin" : afficher("l'enfant a 6 ou 7 ans")
        cas  "Pupille" : afficher("l'enfant a  8 ou 9 ans")
        cas  "Minime" : afficher("l'enfant a  10 ou 11 ans")
        cas  "cadet" : afficher("l'enfant a  plus de 12 ans")
        defaut : afficher("la catégorie n'existe pas")
    fselon

fin
```
✅ 



## Donne moi ...

- demander à l'utilisateur d'entrer 3 chiffres et vérifier s'il sont classé par ordre croissant ou non.

```
Variable nbre1, nbre2, nbre3 : entiers

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
```

---

## L'addition SVP

- Demander à l'utilisateur d'entrer des chiffres. D'en faire l'addition jusqu'à ce que l'on appuie sur 0. Afficher à la fin le total des additions des chiffres entrés et le nombre de fois que nous avons entré un chiffre.

```
Variables nombre, nombreOperations, fin, total : entiers 
nombre ← 0 
total ← 0 
nombreOperation ← 0 
fin ← 0

Début afficher("Entrer un nombre") lire(nombre)

    Tant Que nombre != fin faire
        total ← total + nombre
        nombreOperations ← nombreOperation + 1

        afficher("Entrer un nombre")
        lire(nombre)
    ftantque

    afficher("J'ai rentré", nombreOperation, " chiffres pour un total de ", total)

Fin
```

```
variables nombre, total, nombreOperations, fin : entiers nombre ← 0 total ← 0 nombreOperation ← 0 fin ← 0

Début

    Répéter
        afficher("Entrer un nombre")
        lire(nombre)
        total ← total + nombre 
        nombreOperation ← nombreOperation + 1 
    tant que nombre != fin

    afficher("J'ai rentré", nombreOperation, " chiffres pour un total de ", total)
    3 opérations > 11

Fin
```

```
variables compteur, objectif, nombre, total, pas : entiers pas ← 1 objectif ← 5 nombre ← 0 total ← 0

Début

    Pour compteur ← 0 à objectif par PAS faire
        afficher("Entrer un nombre")
        lire(nombre)
        total ← total + nombre
    fpour

    afficher("J'ai fait", compteur, " opérations pour un total de ", total)

Fin
```

While > Tant_Que

1. Vérifier d'abord avant lancement boucle une condition
2. Pour entrer dans la boucle la condition doit être vraie.

Do..While > Répéter (jusqu'à) (Tant que)

1. Tu éxécutes au moins une fois le code à l'intérieur de la structure.
2. Tu vérifies la condition booléeenne à la fin (1 fois le cycle passé)

For > Pour

1. Répétion d'un action lorsque le nombre de tour est connu
2. Lorsque le nombre d'itération est connu

---

## Le plus grand ?

- Afficher le plus grand de deux entiers saisis au clavier

```
Variables nombre1, nombre2 : entiers

Début afficher("Entrer un nombre : ") lire(nombre1) afficher("Entrer un nombre : ") lire(nombre2)

    Si nombre1 > nombre2
        Alors afficher(nombre1)
        Sinon afficher(nombre2)
    FSI

Fin
```

---

## Chef oui Chef !!! 💂‍♀️

- Écrire un programme qui demande à l’utilisateur de saisir un caractère et qui affiche « affirmatif » si le caractère est un « o » (minuscule ou majuscule), « négatif » si c’est un « n » (minuscule ou majuscule) et « ? ! ? ! ? ! ? » dans les autres cas.

```
Variables choix : caractères

Début

    afficher("Entrer un caractere")
    lire(choix)


    // choix ← tranformerEnMinuscule(choix)
    tranformerEnMinuscule()

    SI choix == "o" OU choix == "O"
        Alors afficher("affirmatif")
        SINON SI choix == "n" OU choix == "N"
            Alors afficher("negatif")
            SINON afficher("? ! ? ! ? ! ?")
        FSI
    FSI

FIN
```

PROCEDURE et FONCTIONS Tous deux on peut y insérer des paramètres

Procedure > Ne renvoi pas de résultat Fonction > Renvoi un résultat

Fonction transformerEnMinuscule(aTransformer : caractères) : caractères Début SELON aTransformer : "A" : retourne "a" "B" : retourne "b" ... defaut : retourne aTransformer Fin

Procedure transformerEnMinuscule(monChiffre : réel) Début

Fin

---

## Un peu de mathématique 😣

- Ecrire un algorithme qui affiche le nombre total des entiers, entrés par l'utilisateur, qui sont des multiples de 3.

For Tant_que Répéter tant que

- Tant que :

```

Variables nombre, total, nombreOperation : entiers total ← 0 nombreOperation ← 0

Début afficher("Entrer un nombre") lire(nombre) 12

    TANT QUE total <= nombre
        Alors total ← total + 3
                nombreOperation ← nomreOperation + 1
    Fin TANT QUE

    afficher("Il y a ", nomreOperation, " multiple de 3)

```

- Répéter ... tant que :

```

variable nrbUser , nrbVerif , compteur. compteur ← 0 nrbVerif ← 3

Début Afficher("Donner un nombre :") lire(nrbUser)

    SI nrbUser < 3
        compteur ← 0
        SINON
            Répéter
                compteur ← compteur + 1
                nrbVerif ← nrbVerif + 3
            TANT QUE nrbUser > nrbVerif
    FSI

    afficher(compteur)

Fin

```

- Pour :

```

Variables nb, compteur, resultat : entiers

Début afficher("Donner un nombre) lire(nb)

    Pour compteur ← 1 à compteur <= nb pour un pas de 1
        Si compteur % 3 == 0
            ALORS resultat ← resultat + 1
        FSI
    FPOUR

    afficher("Dans ce nombre ", nb, " il y a ", resultat, " multiple de 3)

Fin

```

---


## Les Tableaux

- Ecrire un algortihme qui rempli un tableau avec les valeurs d'un compteur
```
Variable monTableau[] : entiers 
Variable compteur : entiers

Début
    Pour compteur ← 0 à compteur < 10 de pas de 1 
        monTableau[compteur] ← compteur 
    FPOUR
Fin
```

- Ecrire un algo qui me donne la somme des valeurs de mon tableau. Mon tableau contient N entiers

```
Variable total, cmopteur : entier 
Variable tableau[N] : entier

Début 
    Pour compteur ← 0 à compteur < N de pas de 1 
        total ← total + tableau[compteur] 
    FPOUR

    afficher(total)
Fin
```

- Ecrire un algo qui fait la sommes des valeurs de chaque cases des tableaux 1 et 2 et mets le résultat dans la case correspondante du tableau 3. Mon tableau contient N entiers.

```
Variable total, compteur : entier 
Variable tableau1[N], tableau2[N]: entier 
Variable tableau3[] : entier

Début Pour compteur ← 5 à compteur < N par pas de 1 
    tableau3[compteur] ← tableau1[compteur] + tableau2[compteur] 
Fpour

    afficher(tableau3[0])
Fin
```

- L'utilisateur doit indiquer combien de nombre il veut saisir puis saisir une suite de nombre dans un tableau. Le tableau doit en suite renvoyer la plus grande valeur de ce tableau en indiquant l'index où il est situé.

```
Variable nombre, max, index, compteur, tableau[], tailleTableau : entier 
compteur ← 0 
nombre ← 0 
max ← 0 
index ← 0

Début 
    afficher("Entrer combien de nombre voulez vous entrer") 
    lire(tailleTableau)

    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        afficher("Entrer le nombre numéro ", compteur+1)
        lire(tableau[compteur])
    FPour

    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        Si tableau[compteur] > max
            Alors max ← tableau[compteur]
                    index ← compteur
        Fsi
    Fpour

    afficher("La plus grande valeur est : ", max, " et elle est située
    sur la case numéro ", index)

Fin
```

- L'utilisateur doit indiquer combien de nombre il veut saisir puis saisir une suite de nombre dans un tableau. Le tableau doit ensuite échanger la variable Tableau[n] et Tableau[n+1].

```

```




