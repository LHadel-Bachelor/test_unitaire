const { doubleNumber } = require('./mult.test.js');

test('Doublement de nombre - Test de la fonction doubleNumber', () => {
	// Tester le cas où l'entrée est un nombre valide
	it('should return 10',() =>(
		expect (doubleNumber(5)).toBe(10)
	))	
		// Tester le cas où l'entrée est un nombre négatif
	it('should return -6',() =>(
		expect (doubleNumber(-3)).toBe(-6)
	))		
		// Tester le cas où l'entrée est zéro
	it('should return 0',() =>(
		expect (doubleNumber(0)).toBe(0)
	))
	it('should return nothing',() =>(
		// Tester le cas où l'entrée n'est pas un nombre
		expect (doubleNumber("abc")).toBeNaN()
	))
});