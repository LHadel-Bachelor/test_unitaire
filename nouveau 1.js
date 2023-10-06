const { doubleNumber } = require('./votre_fichier_js'); // Assurez-vous d'importer votre fichier JavaScript ici

test('Doublement de nombre - Test de la fonction doubleNumber', () => {
	// Tester le cas où l'entrée est un nombre valide
	expect(doubleNumber(5)).toBe(10);
	
	// Tester le cas où l'entrée est un nombre négatif
	expect(doubleNumber(-3)).toBe(-6);

	// Tester le cas où l'entrée est zéro
	expect(doubleNumber(0)).toBe(0);

	// Tester le cas où l'entrée n'est pas un nombre
	expect(doubleNumber("abc")).toBeNaN();
});