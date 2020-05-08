// Generic is the way to advanced
//#region Implementation of getHashMap()
const getHashMap = (hashFn) => {
    const data = {};
    return {
        get: (key) => data[hashFn(key)],
        set: (key, val) => { data[hashFn(key)] = val; }
    };
};
//#endregion
const identityMap = getHashMap(key => key.toString());
identityMap.set(1, 'hello');
identityMap.get(1); // hello
//# sourceMappingURL=03_Generic.js.map