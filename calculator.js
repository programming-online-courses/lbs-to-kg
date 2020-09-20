const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const convertPoundsToKg = (lbs) => {
    const ONE_POUND_IN_KG = 0.45359237;
    return lbs * ONE_POUND_IN_KG;
}

rl.question('Pounds: ', (lbs) => {
    const kgs = convertPoundsToKg(lbs);
    console.log("Kilograms: ", kgs)
    rl.close();
});

