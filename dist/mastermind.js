function evaluateGuess(secretCode, guess) {
    if (secretCode.length !== guess.length) {
        throw new Error("Le code secret et la tentative doivent avoir la même longueur");
    }
    // Copie des tableaux pour ne pas modifier les originaux
    const secretCopy = [...secretCode];
    const guessCopy = [...guess];
    let exactMatches = 0;
    for (let i = 0; i < secretCode.length; i++) {
        if (guessCopy[i] === secretCopy[i]) {
            exactMatches++;
            secretCopy[i] = '_';
            guessCopy[i] = '#';
        }
    }
    // Compte les couleurs correctes mais mal placées
    let colorMatches = 0;
    for (let i = 0; i < secretCode.length; i++) {
        if (guessCopy[i] !== '#') {
            const matchIndex = secretCopy.findIndex(color => color === guessCopy[i] && color !== '_');
            if (matchIndex !== -1) {
                colorMatches++;
                secretCopy[matchIndex] = '_';
            }
        }
    }
    return { exactMatches, colorMatches };
}
// Exemples d'utilisation
const secretCode = ['rouge', 'bleu', 'vert', 'jaune'];
const testCases = [
    ['rouge', 'bleu', 'vert', 'jaune'], // Tout correct
    ['rouge', 'bleu', 'jaune', 'vert'], // 2 exacts, 2 mal placés
    ['jaune', 'vert', 'bleu', 'rouge'], // 0 exacts, 4 mal placés
    ['noir', 'noir', 'noir', 'noir'], // Tout faux
];
console.log("Code secret:", secretCode);
testCases.forEach((guess, index) => {
    try {
        const result = evaluateGuess(secretCode, guess);
        console.log(`\nTentative ${index + 1}: ${guess}`, `\n- Couleurs bien placées: ${result.exactMatches}`, `\n- Couleurs correctes mais mal placées: ${result.colorMatches}`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Erreur pour la tentative ${index + 1}:`, error.message);
        }
    }
});
export default evaluateGuess;
