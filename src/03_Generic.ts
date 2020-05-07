// Generic is the way to advanced

//#region Implementation of getHashMap()
const getHashMap = <TKey, TVal>(hashFn: (key: TKey) => string) => {
  const data: {
    [hashKey: string]: TVal
  } = {};

  return {
    get: (key: TKey): TVal | undefined => data[hashFn(key)],
    set: (key: TKey, val: TVal) => { data[hashFn(key)] = val }
  };
}
//#endregion

const identityMap = getHashMap<number, string>(
  key => key.toString()
);
identityMap.set(1, 'hello');
identityMap.get(1); // hello
