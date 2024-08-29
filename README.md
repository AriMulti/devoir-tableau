# Devoir : Tableau

On va faire un tableau avec des tableaux.

![Présentation](_assets/tableau.svg)

## Préparation en classe

1. Trouver un sujet. _Ex.: Le ski._
        Undertale goats
2. Trouver _au moins_ 3 objets ou individus représentant le sujet. _Ex.: Les 5 meilleurs skieurs des derniers jeux olympiques; 4 marques ou models de ski..._
        Toriel, Asgore, Asriel
3. Trouver 3 caractéristiques spécifiques aux individus. _Ex.: Nom, prénom, taille..._
        Prenom(Toriel, Asgore, Asriel), Nom(Dreemur, Dreemur, Dreemur) et Couleurs de leurs vêtements(mauve blanc et bleu, mauve et jaune, jaune et vert)

## Le HTML brut

1. Créer un tableau en HTML brut avec les informations recueillies. En utilisant les balises typiques aux tableaux dont vous avec un exemple ci-dessous.

### Exemple de tableau de base

```html
<table border="1">
    <thead>
        <tr>
            <th scope="col">Colonne 1</th>
            <th scope="col">Colonne 2</th>
            ...
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Rangée 1</th>
            <td>Donnee 1</td>
            ...
        </tr>
        ...
    </tbody>
</table>
```

## Le projet

1. Créer un tableau avec les libélés (noms) des 3 caractéristiques. Ex.: `["Nom", "Prénom", "Taille"]`
2. Dans 3 autres tableaux (array) _Javascript_, mettre les informations relatives aux individus.  Faire 1 tableau par caractéristique.
3. _Optionnellement_, vous pouvez rassembler ces 3 tableaux dans un tableau parent.
4. Reproduire le tableau `<table>` à l'aide de boucles (2 boucles : une pour les libélés (noms) et une pour les individus).
5. Faire une **petite** mise en page CSS (_c'est un cours de Web après tout._).

## Remise

- Travail individuel.
- Compte pour **5%** de la note finale.
- Durée : Une semaine. À remettre avant le cours **une semaine** après la réception.
- Remise : Renommer le dossier `NOMP0123456_tableau` **AVANT** de le zipper pour le remettre dans le devoir correspondant dans Teams.

## Grille de correction (provisoire)

1. Création des données (___/6)
    1. ___/3 Création du tableau (array) pour les noms des caractéristiques
    2. ___/3 Création d'un tableau de données pour chaque caractéristique
2. "Rite de passage" (___/9)
    1. ___/3 Création par programmation des bonnes balises (table, thead...)
    2. ___/3 Bonne imbrication des éléments
    3. ___/3 Ajout des données dans les cellules (innerHTML)
3. Boucles (___/12)
    1. ___/3 Une boucle pour les étiquettes dans le thead
    2. ___/3 Une boucle pour les individus dans le tbody
    3. ___/3 Utilisation de .length pour la longueur des boucles
    4. ___/3 Récupération adéquate des données des arrays
4. Mise en page (___/3)
   1. ___/3 Visuel "intéressant"

**Total : ___/30**