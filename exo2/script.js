"use strict"; // Mode strict (slide 52)

// Fonction f1 : tableau de chaînes de caractères (slides 39 et 46)
function f1() {
    // Tableau de chaînes (slide 39)
    const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

    // Boucle for..of pour parcourir le tableau (slide 45)
    for (const etudiant of etudiants) {
        console.log(etudiant); // console.log (slide 34)
    }
}

// Fonction f2 : un objet Etudiant (slides 40 et 46)
function f2() {
    // Déclaration d'un objet avec ses propriétés (slide 40)
    const etudiant = {
        nom: "John",
        prenom: "DOE",
        age: 30
    };

    // Affichage de l'objet entier (slide 40)
    console.log(etudiant);
}

// Fonction f3 : tableau d'objets Etudiants (slides 41 et 46)
function f3() {
    // Tableau d'objets (slide 41)
    const etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    // Boucle for..of (slide 45)
    for (const etudiant of etudiants) {
        // Accès aux propriétés d'un objet avec le point (slide 40)
        // Affichage formaté avec les backticks et ${} (slide 38)
        console.log(`${etudiant.nom}-${etudiant.prenom}-${etudiant.age}`);
    }
}