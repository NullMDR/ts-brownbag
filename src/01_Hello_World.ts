// Hello World!!

let helloBoolean = true;
const helloString: string = 'Hello World';
const helloNumber = 0;
const helloArray = ['Hello', 'World', 1];
const helloTuple: [string, string, number] = ['Hello', 'World', 1];

const helloFunc = (a: number, b: number): number => a + b;
const helloFunc2 = (a: number, b: number): number => {
  return a + b;
};

interface Phone {
  call: (number: string) => void;
}

interface MobilePhone extends Phone {
  charge: () => void;
}

type SmartPhone = MobilePhone & {
  installApp: (appPkg: ArrayBuffer) => void;
};

