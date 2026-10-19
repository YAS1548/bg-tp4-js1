"use strict"; // Mode strict (slide 52)

// Données Students : tableau de tableaux (slide 39)
// Ordre : (id, nom, prénom, valeur 1, valeur 2)
const Students = [
    [1000, "JOHN", "DOE", 14, 5],
    [2000, "BOB", "CARLTON", 7, 1],
    [3000, "RAYANE", "SMITH", 13, 3]
];

// Fonction A : appelée au clic sur le bouton, elle appelle B (slides 18 et 46)
function A() {
    // Boucle for..of pour parcourir les étudiants (slide 45)
    for (const etudiant of Students) {
        // Destructuration du tableau : on récupère id et la 4e valeur (slide 39)
        const [id, , , valeur] = etudiant;

        // Condition if...else (slide 43) selon le booléen retourné par B
        if (B(valeur)) {
            // Affichage un par un avec console.log (slides 34 et 38)
            console.log(`${id}: ADMIS`);
        } else {
            console.log(`${id}: AJOURNÉ`);
        }
    }
}

// Fonction B : un seul paramètre de type float, retourne un booléen (slide 46)
function B(valeur) {
    // Opérateur de comparaison >= (slide 42) : renvoie true ou false
    return valeur >= 10;
}