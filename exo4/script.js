// ===== 1. Représentation du produit =====
const produit = { nom: "Chemise", prix: 4000, quantite: 20 };

console.log("Produit :", produit.nom);
console.log("Valeur du stock :", produit.prix * produit.quantite, "DA");

// ===== 2. Catalogue de 5 produits =====
const catalogue = [
  { nom: "Chemise", prix: 4000, quantite: 20 },
  { nom: "T-shirt",  prix: 1800, quantite: 25 },
  { nom: "Manteau",   prix: 32000, quantite: 4 },
  { nom: "Pantalon",  prix: 6000, quantite: 8 },
  { nom: "Chaussure",  prix: 4500, quantite: 12 }
];

const prixMoyen =
  catalogue.reduce((somme, p) => somme + p.prix, 0) / catalogue.length;

console.log("Prix moyen du catalogue :", prixMoyen);
console.log("Produits dont le prix dépasse la moyenne :");
catalogue
  .filter(p => p.prix > prixMoyen)
  .forEach(p => console.log(`- ${p.nom} : ${p.prix} DA`));

// ===== 3. Total des articles et valeur globale avec reduce) =====
const totalArticles = catalogue.reduce((total, p) => total + p.quantite, 0);
const valeurGlobale = catalogue.reduce((total, p) => total + p.prix * p.quantite, 0);

console.log("Nombre total d'articles :", totalArticles);
console.log("Valeur globale du stock :", valeurGlobale, "DA");

// ===== 4. Fonction de calcul de la valeur du stock d'un produit =====
function valeurStock(produit) {
  return produit.prix * produit.quantite;
}

// Vérification sur plusieurs produits
console.log("Valeur du stock de chaque produit :");
for (const p of catalogue) {
  console.log(`${p.nom} : ${valeurStock(p)} DA`);
}
// Test : Chemise = 4000 * 10 = 40000
console.log("Test Chemise (attendu 40000) :", valeurStock(catalogue[0]));

// ===== 5. Appliquer un traitement à tout le catalogue (callback) =====
function appliquerTraitement(catalogue, callback) {
  for (const p of catalogue) {
    callback(p);
  }
}

// Callback 1 : afficher les noms
console.log("--- Noms des produits ---");
appliquerTraitement(catalogue, p => console.log(p.nom));

// Callback 2 : afficher les prix
console.log("--- Prix des produits ---");
appliquerTraitement(catalogue, p => console.log(p.prix, "DA"));