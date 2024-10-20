// Functie voor het berekenen van het aantal Cum Laude studenten
function cumLaude(gradesArray) {
    if (!Array.isArray(gradesArray)) {
        throw new Error("Input moet een array zijn.");
    }
    let count = 0;
    for (let i = 0; i < gradesArray.length; i++) {
        if (typeof gradesArray[i] !== 'number') {
            throw new Error("Alle elementen in de array moeten getallen zijn.");
        }
        if (gradesArray[i] >= 8) {
            count++;
        }
    }
    return count;
}

try {
    console.log(cumLaude(grades)); // Verwachte uitkomst: 6
    console.log(cumLaude("niet een array")); // Fout: Input moet een array zijn.
} catch (error) {
    console.error(error.message);
}

try {
    console.log(cumLaude([6, "vier", 5])); // Fout: Alle elementen in de array moeten getallen zijn.
} catch (error) {
    console.error(error.message);
}

// Functie voor het berekenen van het gemiddelde cijfer
function averageGrade(gradesArray) {
    if (!Array.isArray(gradesArray)) {
        throw new Error("Input moet een array zijn.");
    }
    let sum = 0;
    for (let i = 0; i < gradesArray.length; i++) {
        if (typeof gradesArray[i] !== 'number') {
            throw new Error("Alle elementen in de array moeten getallen zijn.");
        }
        sum += gradesArray[i];
    }
    let average = sum / gradesArray.length;
    return Math.round(average * 100) / 100; // Afronden op twee decimalen
}

try {
    console.log(averageGrade(grades)); // Verwachte uitkomst: 6.64
    console.log(averageGrade({a: 1, b: 2})); // Fout: Input moet een array zijn.
} catch (error) {
    console.error(error.message);
}

try {
    console.log(averageGrade([8, 9, "vier", 6, 10])); // Fout: Alle elementen in de array moeten getallen zijn.
} catch (error) {
    console.error(error.message);
}

// Functie voor het vinden van het hoogste cijfer
function highestGrade(gradesArray) {
    if (!Array.isArray(gradesArray)) {
        throw new Error("Input moet een array zijn.");
    }
    let max = gradesArray[0];
    for (let i = 1; i < gradesArray.length; i++) {
        if (typeof gradesArray[i] !== 'number') {
            throw new Error("Alle elementen in de array moeten getallen zijn.");
        }
        if (gradesArray[i] > max) {
            max = gradesArray[i];
        }
    }
    return max;
}

try {
    console.log(highestGrade(grades)); // Verwachte uitkomst: 9
    console.log(highestGrade(12345)); // Fout: Input moet een array zijn.
} catch (error) {
    console.error(error.message);
}

try {
    console.log(highestGrade([8, 9, null, 6, 10])); // Fout: Alle elementen in de array moeten getallen zijn.
} catch (error) {
    console.error(error.message);
}
