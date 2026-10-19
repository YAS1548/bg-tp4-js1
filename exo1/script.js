"use strict"; // Mode strict : signale les variables non déclarées (slide 52)

// Syntaxe : instructions terminées par ; et commentaires // (slide 37)

// Variables et constantes déclarées avec const (slides 38 et 52)
const nom = "John";      // type primitif string (slide 38)
const prenom = "Doe";    // type primitif string (slide 38)
const age = 30;          // type primitif number, entier (slide 38)
const note = 15;         // type primitif number (slide 38)
const pi = 3.14;         // type primitif number, réel (slide 38)

// Fonction sans paramètre, appelée au clic sur le bouton "Nom" (slides 18 et 46)
function f1() {
    // Affichage avec console.log() uniquement (slide 34)
    console.log(nom);
}

// Fonction appelée au clic sur le bouton "Prénom" (slides 18 et 46)
function f2() {
    console.log(prenom); // console.log (slide 34)
}

// Fonction appelée au clic sur le bouton "Nom & Prénom" (slides 18 et 46)
function f3() {
    // Concaténation de chaînes avec l'opérateur + (slides 38 et 42)
    console.log(nom + "-" + prenom);
}

// Fonction appelée au clic sur le bouton "Age" (slides 18 et 46)
function f4() {
    console.log(age); // console.log (slide 34)
}

// Fonction appelée au clic sur le bouton "Note" (slides 18 et 46)
function f5() {
    console.log(note); // console.log (slide 34)
}

// Fonction appelée au clic sur le bouton "Pi" (slides 18 et 46)
function f6() {
    console.log(pi); // console.log (slide 34)
}