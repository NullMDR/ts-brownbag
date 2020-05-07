// Generic is the way to advanced
const getHashMap = (hashFn) => {
    const data = {};
    return {
        get: (key) => data[hashFn(key)],
        set: (key, val) => { data[hashFn(key)] = val; }
    };
};
const identityMap = getHashMap(key => key.toString());
identityMap.set(1, 'hello');
identityMap.get(1); // hello
