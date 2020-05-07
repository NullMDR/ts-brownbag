// keyof, typeof, in

const actionTable = {
  addOne: (a: number) => a + 1,
  getPets: (...morePets: string[]) => ['Cat'].concat(morePets),
} as const;

actionTable.addOne(2); // 3
actionTable.getPets('Dog'); // ['Cat', 'Dog]

// Write a generic 'performAction'
type ActionKey = keyof typeof actionTable; // 'getPets' | 'addOne'

type PartActionKey = Exclude<ActionKey, 'getPets'>; // 'addOne'

const performAction = <TAction extends ActionKey>(
  actionKey: TAction,
  ...args: Parameters<(typeof actionTable)[TAction]>
): ReturnType<(typeof actionTable)[TAction]> => {
  return actionTable[actionKey].apply(undefined, args);
}

performAction('addOne', 2); // 3
performAction('getPets', 'Dog'); // ['Cat', 'Dog']

// Write high level function with correct types
type ActionData = {
  [key in ActionKey]: Parameters<(typeof actionTable)[key]>
}
type ActionResultTable = {
  [key in ActionKey]: ReturnType<(typeof actionTable)[key]>
};

const getActionResult = (data: ActionData) => {
  const result: Partial<ActionResultTable> = {};
  Object.keys(actionTable).forEach((key) => {
    result[key] = performAction(key as ActionKey, data[key]);
  });
  return result as ActionResultTable;
}

const { addOne, getPets } = getActionResult({
  addOne: [2],
  getPets: ['Dog']
});
