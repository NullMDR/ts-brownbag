// Is that variable a number?
function isNumber(x: any): x is number {
  return typeof x === "number";
}

function isString(x: any): x is string {
  return typeof x === "string";
}

function padLeft(value: string, padding: string | number) {
  let result: string;

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

padLeft("A", "B"); // 'BA'
padLeft("A", 2); // '  A'

// Fish can't fly. Typescript knows that.
type Fish = {
  discriminator: 'fish',
  swim: () => void
};

type Bird = {
  discriminator: 'bird',
  fly: () => void
};

const action = (animal: Fish | Bird) => {
  if (animal.discriminator === 'fish') {
    // animal.fly();
    animal.swim();
  } else {
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
}