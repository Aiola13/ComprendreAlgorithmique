# Exercices

## Black Friday

- Écrire un programme qui permet de demander, de calculer et d’afficher la réduction effective au produit par rapport à un pourcentage et le prix d’un produit après lui avoir appliqué un pourcentage de réduction.

---

## Neg or not neg (To Covid ...)

- Écrire un algorithme qui demande un nombre à l’utilisateur, et l’informe ensuite si ce nombre est positif ou négatif (on laisse de côté le cas où le nombre vaut zéro).

- Ajout à l'algorithme du cas où le nombre est nul

---

## Le produit

- Écrire un algorithme qui demande deux nombres à l’utilisateur et l’informe ensuite si leur produit est négatif ou positif (on laisse de côté le cas où le produit est nul). Attention toutefois : on ne doit pas calculer le produit des deux nombres.

---

## Donne moi ce que tu veux, je te dirais qui tu es!

- Écrire un algorithme qui demande l’âge d’un enfant à l’utilisateur. Ensuite, il l’informe de sa catégorie :

  - "Poussin" de 6 à 7 ans
  - "Pupille" de 8 à 9 ans
  - "Minime" de 10 à 11 ans
  - "Cadet" à partir 12 ans

- Écrire un algorithme qui demande la catégorie d’un enfant à l’utilisateur. Ensuite, il l’informe de son âge : • "Poussin" de 6 à 7 ans • "Pupille" de 8 à 9 ans • "Minime" de 10 à 11 ans • "Cadet" à partir 12 ans

## Donne moi ...

- demander à l'utilisateur d'entrer 3 chiffres et vérifier s'il sont classé par ordre croissant ou non.

---

## L'addition SVP

- Demander à l'utilisateur d'entrer des chiffres. D'en faire l'addition jusqu'à ce que l'on appuie sur 0. Afficher à la fin le total des additions des chiffres entrés et le nombre de fois que nous avons entré un chiffre.

---

## Le plus grand ?

- Afficher le plus grand de deux entiers saisis au clavier

---

## Chef oui Chef !!! 💂‍♀️

- Écrire un programme qui demande à l’utilisateur de saisir un caractère et qui affiche « affirmatif » si le caractère est un « o » (minuscule ou majuscule), « négatif » si c’est un « n » (minuscule ou majuscule) et « ? ! ? ! ? ! ? » dans les autres cas.

---

## Un peu de mathématique 😣

- Ecrire un algorithme qui affiche le nombre total des entiers, entrés par l'utilisateur, qui sont des multiples de 3.

---

## Les Tableaux

- Ecrire un algortihme qui rempli un tableau avec les valeurs d'un compteur

- Ecrire un algo qui me donne la somme des valeurs de mon tableau. Mon tableau contient N entiers

- Ecrire un algo qui fait la sommes des valeurs de chaque cases des tableaux 1 et 2 et mets le résultat dans la case correspondante du tableau 3. Mon tableau contient N entiers.

- L'utilisateur doit indiquer combien de nombre il veut saisir puis saisir une suite de nombre dans un tableau. Le tableau doit en suite renvoyer la plus grande valeur de ce tableau en indiquant l'index où il est situé.

- L'utilisateur doit indiquer combien de nombre il veut saisir puis saisir une suite de nombre dans un tableau. Le tableau doit ensuite échanger la variable Tableau[n] et Tableau[n+1].

- Ecrire un algo qui nous retourne l'entier le plus grand et l'entier le plus petit.

- Modifier l'algo précédent pour mettre l'entier le plus grand au dernier indice du tableau, et l'entier le plus petit au premier indice du tableau. (il faut bien sur échanger les valeurs)

- Sur le même principe que tous les exercices précédents, écrire un algorithme, avec plusieurs fonctions ou procédures, permettant :
  - de remplir un tableau avec les notes d'une classe
  - de le classer par ordre croissant (avec ce que nous avons vu, en comparant le chiffre le plus grand ou le plus petit)
  - de renvoyer la note la plus haute et la plus basse.
  - **À faire par les plus balèses d'entre vous 🙄**
    - de renvoyer la moyenne de la classe
    - de renvoyer la médianne de la classe
    - de renvoyer son écart-type

/!\ ⚠ Si et seulement si vous avez des diffcultés à se rappeler ce qu'est la médianne et l'écart-Type, Voici deux liens :
    - [Médianne](https://fr.khanacademy.org/math/be-2eme-secondaire2/x291d358f50a246d9:traitement-de-donnees-1/x291d358f50a246d9:determiner-un-effectif-un-mode-une-frequence-la-moyenne-arithmetique-letendue-dun-ensemble-de-donnees-discretes/a/mean-median-and-mode-review#:~:text←Pour%20calculer%20la%20m%C3%A9diane%20%3A,des%20deux%20valeurs%20du%20milieu.)
    - [Écart-Type](https://fr.khanacademy.org/math/be-4eme-secondaire2/x213a6fc6f6c9e122:statistiques-1/x213a6fc6f6c9e122:variance-et-ecart-type/a/calculating-standard-deviation-step-by-step)


---

## Récursivité 
Ecrire la fonction $n!$ en récursive
formule : $n! = 1 * 2 * ... * (n - 1) * n$

## Recherche Dichotomique

## Diviser pour mieux régner MUAHAHA 👿
En s'aidant des exercices précédents, comment érirez vous l'algorithme qui fait un tri rapide
- Partitionnement 

- Tri Rapide
  
- Tester l'algo avec les tableaux suivants 
  - [8, 2, 9, 1, 4]
  - [2, 1, 6, 9, 8, 4]
  - [4, 3, 5, 9, 1, 2, 7, 8, 6]

## Tableau Multidimentionnel / Matrice
- Ecrire un algo qui rempli un tableau de 6 par 12
- Ecrire un algo qui recherche la plus grande valeur (et son indice) dans un tableau de 6 par 12, rempli préalablement.

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




## TocTacToe

(2 joueurs)
Ecrire un algorithme du jeu du morpion
L’ordinateur demande à l’utilisateur dans quelle case il veut jouer.
On vérifie si la case a déjà été jouée.
Les caractères à utiliser sont X ou O.
jusqu'à former une ligne, colonne ou diagonale

Contrainte Faire des fonctions et procédures