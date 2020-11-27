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
Entrer le nombre de saisie que vous voulez pour la taille du tableau
saisir un nombre

Entrer autant de nombre que la taille du tableau

échanger la valeur de la case 1 et la case suivante
tableau[n] et tableau[n+1]
Répter pour chaque valeur jusqu'à la fin du tableau
```

```PikaPika

Variable nombre, compteur, temporaire, tableau[], tailleTableau : entier
compteur ← 0
nombre ← 0
temporaire ← 0

Début
    afficher("Entrer combien de nombre voulez vous entrer")
    lire(tailleTableau)

    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        afficher("Entrer le nombre numéro ", compteur+1)
        lire(tableau[compteur])
    FPour

    max ← compteur
    listeNombres[max+1] ← listeNombres[0]
    Pour compteur ← 0 à compteur < tailleListe
        listeNombres[compteur] ← listeNombres[compteur+1]
        listeNombres[max]← listeNombres[max+1]
    Fpour
    Afficher("Toutes les valeurs de la liste on été décalé d'un rang")
Fin
```

```Maïte 1
Variable nombre, stock, index, compteur, tableau[], tailleTableau : entier
compteur ← 0
nombre ← 0
stock← 0
index ← 0


Début
    afficher("Entrer combien de nombre voulez vous entrer")
    lire(tailleTableau)

    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        afficher("Entrer un nombre ")
        lire(tableau[compteur])
    FPour
    stock←tableau[0]
    Pour compteur ← 0 à compteur < (tailleTableau-1) par pas de 1

        tableau[compteur]←tableau[compteur+1];


     Fpour
    tableau[tailleTableau-1] ← stock


Fin
```

- En prenant en compte la dernière case du tableau
- on sauvegarde la première case du tableau
- On parcours le tableau de 0 à la taille du tableau
- une fois fini, on place la première case du tableau à la dernière

```Maïte 2
Variable nombre, stock, index, compteur, tableau[], tailleTableau : entier compteur ← 0 nombre ← 0 stock← 0 index ← 0

Début afficher("Entrer combien de nombre voulez vous entrer") lire(tailleTableau)

    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        afficher("Entrer un nombre ")
        lire(tableau[compteur])
    FPour

    Pour compteur ← 0 à compteur < (tailleTableau) par pas de 1
        stock2←tableau[compteur]
        tableau[compteur]←tableau[compteur+1];
        tableau[compteur +1]←stock2;

    Fpour

    stock2←tableau[tailleTableau-1]
        tableau[tailleTableau-1]←tableau[0];
        tableau[0]←stock2;

Fin
```

- En prenant en compte la dernière case du tableau
- On parcours le tableau de 0 à la taille du tableau - 1

```Jeremy
variables : declare, tableau[], compteur, nb, val1 : Entier

debut

afficher("Combien de chiffre allez vous déclarer ?")
lire(declare)
compteur ← 0

pour compteur à declare avec pas de 1
    afficher("Donnez un chiffre")
    lire(nb)
    tableau[compteur] ← nb
fpour

compteur ← 0
val1 ← tableau[0]

pour compteur à declare avec pas de 1
    si compteur != declare - 1
        alors tableau[compteur] ← tableau[compteur + 1]
        sinon
        alors tableau[compteur] ← val1
        fsi
    fsi
fpour

afficher("Voilà vos valeurs décalées de un : ",tableau[])
```

- En prenant en compte la dernière case du tableau
- On parcours le tableau de 0 à la taille du tableau - 1

```Denis
Variable nombre, stock, index, compteur, tableau[], tailleTableau : entier compteur ← 0 nombre ← 0 stock← 0 index ← 0

Début afficher("Entrer combien de nombre voulez vous entrer") lire(tailleTableau)

    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        afficher("Entrer un nombre ")
        lire(tableau[compteur])
    FPour

    Pour compteur ← 0 à compteur < (tailleTableau - 1) par pas de 1
        stock2←tableau[compteur]
        tableau[compteur]←tableau[compteur+1];
        tableau[compteur +1]←stock2;
    Fpour
Fin
```

    - Sans prise en compte de la dernière case du tableau

```
Début
    afficher("Entrer combien de nombre voulez vous entrer")
    lire(tailleTableau)

    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        afficher("Entrer le nombre numéro ", compteur+1)
        lire(tableau[compteur])
    FPour

    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        temporaire ← tableau[compteur]
        tableau[compteur] ← tableau[compteur+1]
        tableau[compteur+1] ← temporaire
    FPour

    Afficher("Toutes les valeurs de la liste on été décalé d'un rang")
Fin
```

- Ecrire un algo qui nous retourne l'entier le plus grand et l'entier le plus petit.

```



```

- Modifier l'algo précédent pour mettre l'entier le plus grand au dernier indice du tableau, et l'entier le plus petit au premier indice du tableau. (il faut bien sur échanger les valeurs)

```
Variable nombre, valeurMax,valeurMin, compteur, tableau[], tailleTableau : entier
compteur ← 0
nombre ← 0
swap ← 0
indexMax ← 0
indexMin ← 0

Début
    afficher("Entrer combien de nombre voulez vous entrer")
    lire(tailleTableau)

    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        afficher("Entrer un nombre ")
        lire(tableau[compteur])
    FPour

    valeurMax←tableau[0]
    valeurMin←tableau[0]

    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        SI tableau[compteur] > valeurMax alors
            valeurMax ← tableau[compteur]
            indexMax ← compteur
                SINON SI tableau[compteur] < valeurMin alors
                    valeurMin ← tableau[compteur]
                    indexMin ← compteur
                FSI
        FSI
    Fpour

    swap ← [tailleTableau - 1]
    tableau[tailleTableau - 1] ← valeurMax
    tableau[indexMax] ← swap

    swap ← tableau[0]
    tableau[0] ← valeurMin
    tableau[indexMin] ← swap

Fin
```

```
Variable nombre, valeurMax, valeurMin, stock, compteur, tableau[], tailleTableau : entier
compteur ← 0
nombre ← 0
stock ← 0
indexMax ← 0
indexMin ← 0
tmax ← 0
tmin ← 0

Début
    afficher("Entrer combien de nombre voulez vous entrer")
    lire(tailleTableau)

    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        afficher("Entrer un nombre ")
        lire(tableau[compteur])
    FPour


    valeurMax ← tableau[0]
    valeurmin ← tableau[0]

    POUR compteur ← 0 à compteur < tailleTableau par pas de 1
        SI tableau[compteur] >= valeurMax alors
            valeurMax ← tableau[compteur]
            indexMax ← compteur
                Sinon Si tableau[compteur] <= valeurMin alors
                    valeurMin ← tableau[compteur]
                    indexMin ← compteur
                FSI
        FSI
    FPOUR

    Si tableau[tailleTableau - 1 ] != valeurMax alors
        stock ← valeurMax
        valeurMax ← tableau[tailleTableau - 1]
        tableau[tailleTableau - 1] ← tmax
        tableau[indexMax] ← valeurMax
    FSI

    Si tableau[0] != valeurMin alors
        stock ← valeurMin
        valeurMin ← tableau[0]
        tableau[0] ← tMin
        tableau[indexMin] ← valeurMin
    FSI

Fin
```


- Sur le même principe que tous les exercices précédents, écrire un algorithme, avec plusieurs fonctions ou procédures, permettant :
  - de remplir un tableau avec les notes d'une classe
  - de le classer par ordre croissant (avec ce que nous avons vu, en comparant le chiffre le plus grand ou le plus petit)
  - de renvoyer la note la plus haute et la plus basse.
  - **À faire par les plus balèses d'entre vous 🙄**
    - de renvoyer la moyenne de la classe
    - de renvoyer la médianne de la classe
    - de renvoyer son écart-type

/!\ ⚠ Si et seulement si vous avez des diffcultés à se rappeler ce qu'est la médianne et l'écart-Type, Voici deux liens :
    - [Médianne](https://fr.khanacademy.org/math/be-2eme-secondaire2/x291d358f50a246d9:traitement-de-donnees-1/x291d358f50a246d9:determiner-un-effectif-un-mode-une-frequence-la-moyenne-arithmetique-letendue-dun-ensemble-de-donnees-discretes/a/mean-median-and-mode-review#:~:text=Pour%20calculer%20la%20m%C3%A9diane%20%3A,des%20deux%20valeurs%20du%20milieu.)
    - [Écart-Type](https://fr.khanacademy.org/math/be-4eme-secondaire2/x213a6fc6f6c9e122:statistiques-1/x213a6fc6f6c9e122:variance-et-ecart-type/a/calculating-standard-deviation-step-by-step)

#### Remplir
```
// Notre procedure ne renvoi rien et modifie direction les valeurs qui sont globales à l'algorithme
PROCEDURE remplir(tableau[], tailleTableau : entiers) 
  DEBUT
       afficher("Combien d'élève comporte votre classe")
       lire(tailleTableau)

        pour i ← 0 à i < tailleTableau pour un pas de 1 faire
            afficher("Note de l'élève : ")
            lire(tableau[i])
        fpour


  FIN
FPROCEDURE
```

#### Tri par Sélection
```
// Notre procedure prend en paramètre un tableau et sa taille et modifie directement nos valeurs
Procedure triSelection(tableau[], tailleTableau : entier)
  variables passage, compteur, indexMin, stock : entiers

    DEBUT
        POUR (passage <- 0 à passage < tailleTableau - 1 par pas de 1
            indexMin <- passage;

            POUR (compteur <- passage + 1 à compteur < tailleTableau par pas de 1 
            SI (tableau[compteur] < tableau[indexMin]) alors
                indexMin <- compteur;
            FSI
            FPOUR

            Si passage <> indexMin
                stock <- tab[passage];
                tab[passage] <- tab[indexMin];
                tab[indexMin] <- stock;
            FSI

        FPOUR
    FIN
FP
```


#### Note la plus haute
```
// Ici notre fonction prend en paramètre un tableau et sa taille et renvoi la note max
Fonction renvoieMax(tableau[], tailleTableau : entier) : réels
    variables compteur, noteMax : entiers
    
    compteur ← 0
    noteMax ← tableau[0]

    POUR compteur <- 0 à compteur < tailleTableau par pas de 1

    // Si la noteMax temporaire est inférieure à la note actuelle
    // Alors on stock celle-ci
        SI noteMax < tableau[compteur] ALORS
            noteMax ← tableau[compteur]
        FSI
    FPOUR

    RETOURNE noteMax
FF
```

#### Note la plus basse
```
Fonction renvoieMin(tableau[], tailleTableau : entier) : réel
    variables compteur : entier
                noteMin : réel

    compteur ← 0
    noteMin ← tableau[0]

    POUR (compteur <- 0 à compteur < tailleTableau par pas de 1

    // Si la noteMin temporaire est supérieure à la note actuelle
    // Alors on stock celle-ci
        SI noteMin > tableau[compteur] ALORS
            noteMin ← tableau[compteur]
        FSI
    FPOUR

    RETOURNE noteMin
FF
```


#### Moyenne de la classe
```
Fonction renvoieMoyenne(tableau[], tailleTableau : entier) : réel
    variables compteur : entier
                noteMoy, somme : réel

    compteur ← 0
    noteMoy ← 0

    POUR (compteur <- 0 à compteur < tailleTableau par pas de 1
    // On fait la somme des élèments du tableau
        somme ← somme + tableau[compteur]
    FPOUR

    // On retourne la moyenne
    noteMoyenne ← somme / 2
    RETOURNE noteMoyenne
FF
```

#### Médianne de la classe
```
Fonction noteMed(tableau[], tailleTableau : entier) : réel
     variables compteur : entier
                noteMedianne : réel
    
    compteur ← 0
    noteMedianne ← 0

    // Si taille tableau n'est pas un multiple de deux 
    // Alors nous avons le cas d'un tableau à nombre impair
    SI tailleTableau % 2 != 0 ALORS

        // Pour comprendre
        // medianeIndexImpair ← (tailleTableau - 1) / 2
        //  valeurMedianne ← tableau[medianeIndexImpair]

        RETOURNE tableau[tailleTableau - 1 / 2]

        SINON
        // Pour comprendre
        // medianeIndexPair1 ← (tailleTableau / 2) - 1
        // medianeIndexPair2 ← tailleTableau / 2
        // valeurMedianne ← (tableau[medianeIndex1] + tableau[medianeIndex2]) / 2

            RETOURNE (tableau[(tailleTableau / 2)] + tableau[(tailleTableau / 2 - 1)]) / 2
    FSI

FF
```


#### L'écart-Type
```
Fonction renvoieEcartType(tableau[], tailleTableau : entier, noteMoyenne : réel) : réel
    variables compteur : entier
                equation : réel
 
    compteur ← 0

    POUR (compteur <- 0 à compteur < tailleTableau par pas de 1
        equation ← equation + (tableau[compteur] - noteMoyenne) * (tableau[compteur] - noteMoyenne)
    FPOUR

        equation ← equation / tailleTableau

        RETOURNE racineCarré(variance)
FF
```

---

Soit un tableau de N valeurs. 
On doit écrire un algorithme saisissant un nombre et vérifier s'il est à l'intérieur ou non du tableau. 
Noter en fonction du cas :
- Le chiffre fait partie du tableau
- Le chiffre ne fait pas partie du tableau
_Le tableau est déjà rempli_

```
Début

Afficher("Entrer un nombre")
Lire(nombre)

Pour compteur ← 0 à compteur < tailleTableau par pas de 1
    Si tableau[compteur] == nombre alors
        Afficher("Le nombre est dans le tableau")
        Sinon Afficher("Le nombre n'est pas dans le tableau")
    FSi
FPour
    
Fin
```

```
variable valeurTrouve : booléen
valeurTrouve ← faux
Début

Afficher("Entrer un nombre")
Lire(nombre)


tant que nombre != tableau[compteur] et compteur < tailletableau
    valeurTrouve ← false
    compteur ← compteur + 1
fin tant que 
valeurTrouve ← true

 si valeurTrouve = true 
    Afficher("Le nombre est dans le tableau")
     sinon Afficher("Le nombre n'est pas dans le tableau")
fsi
```    


``` DENIS
Fonction dansTableau(nombre, tableau, tailletableau)
Variables compteur : entier
Début
    Pour compteur ← 0 à compteur < tailleTableau par pas de 1
        Si tableau[compteur] == nombre alors
            Renvoyer vrai
        FSi
    FPour
    Renvoyer faux
Fin
``` 



#### Tri + flag = Tri à bulle
```
Procedure triBulle(tableau[] : entier)
  entier passage, compteur
  entier stock
  booléen trier


  REPETER
    trier ← vrai
    POUR (compteur <- 0 à compteur < passage par pas de 1 
      SI (tableau[compteur] > tableau[compteur + 1]) alors
        stock <- tableau[compteur];
        tableau[compteur] <- tableau[compteur + 1];
        tableau[compteur + 1] <- stock;
        trier ← faux
      FSI
    FPOUR
    passage ← passage + 1
  TANT QUE !trier
FP
```



#### Tri à bulles
```
Procedure triBulle(tableau[] : entier)
  entier passage, compteur
  entier indexMin
  entier stock
  booléen trier


  POUR (passage <- 0 à passage < tailleTableau - 1 par pas de 1
    trier ← vrai
    POUR (compteur <- 0 à compteur < tailleTableau par pas de 1 
      SI (tableau[compteur] > tableau[compteur + 1]) alors
        stock <- tableau[compteur];
        tableau[compteur] <- tableau[compteur + 1];
        tableau[compteur + 1] <- stock;
        trier ← faux
      FSI
    FPOUR

    SI trier == vrai ALORS
        ONS
  FPOUR
FP
```

---

## Récursivité 
Ecrire la fonction $n!$ en récursive
formule : $n! = 1 * 2 * ... * (n - 1) * n$

## Recherche Dichotomique
Ecrire une fonction qui recherche un élèment dans un tableau

## Complexité


Calculer la complexité des fonctions ci-dessous :

```
fonction conversion(n : entier):
    variable h, m, s, t : entier

    h ← n // 3600
    m ← (n - 3600 * h) // 60
    s ← n % 60
    RETOURNE t[h,m,s]
FF
```

```
fonction puissanceMoinsUn(n):
  variable h, m, s : entier

   SI n % 2 == 0 ALORS
      res ← 1
      SINON
        res ← -1
    FSI

   RETOURNE res
FF
```

```
fonction sommeEntiers(tableau, n):
  variable somme, i : entier

  somme ← 0

  POUR i ← 0 à i < n
    somme ← sommme + tableau[i]
  FPOUR

  RETOURNE somme
FF
```


```
fonction factorielle(n):
  variable fact, i : entier

  fact ← 1 
  i ← 2

  TANT QUE i <= n
    fact ← fact * i
    i ← i + 1
  FTQ

  RETOURNE fact
FF
```

```
Procedure triSelection(tableau[], tailleTableau : entier)
  variables passage, compteur, indexMin, stock : entiers

    DEBUT
        POUR passage <- 0 à passage < tailleTableau - 1
            indexMin <- passage;

            POUR (compteur <- passage + 1 à compteur < tailleTableau
              SI (tableau[compteur] < tableau[indexMin]) alors
                  indexMin <- compteur;
              FSI
            FPOUR

            Si passage <> indexMin
                stock <- tab[passage];
                tab[passage] <- tab[indexMin];
                tab[indexMin] <- stock;
            FSI

        FPOUR
    FIN
FP
```