// keyof, typeof, in
const actionTable = {
    addOne: (a) => a + 1,
    getPets: (...morePets) => ['Cat'].concat(morePets),
};
actionTable.addOne(2); // 3
actionTable.getPets('Dog'); // ['Cat', 'Dog]
const performAction = (actionKey, ...args) => {
    return actionTable[actionKey].apply(undefined, args);
};
//#endregion
performAction('addOne', 2); // 3
performAction('getPets', 'Dog'); // ['Cat', 'Dog']
const getActionResult = (data) => {
    const result = {};
    Object.keys(actionTable).forEach((key) => {
        result[key] = performAction(key, data[key]);
    });
    return result;
};
const { addOne, getPets } = getActionResult({
    addOne: [2],
    getPets: ['Dog']
});
//#endregion
//# sourceMappingURL=06_String_Literal_In_Index.js.map