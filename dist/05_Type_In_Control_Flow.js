//#region Implementation of padLeft()
// Is that variable a number?
function isNumber(x) {
    return typeof x === "number";
}
function isString(x) {
    return typeof x === "string";
}
function padLeft(value, padding) {
    let result;
    if (isNumber(padding)) {
        // padding is number
        result = Array(padding + 1).join(" ") + value;
    }
    if (isString(padding)) {
        // padding is string
        result = padding + value;
    }
    return result;
}
//#endregion
padLeft("A", "B"); // 'BA'
padLeft("A", 2); // '  A'
const action = (animal) => {
    if (animal.discriminator === 'fish') {
        // animal.fly();
        animal.swim();
    }
    else {
        animal.fly();
    }
    switch (animal.discriminator) {
        case 'fish':
            // animal.fly();
            animal.swim();
            break;
        case 'bird':
            animal.fly();
            break;
    }
};
//#endregion
