const identityFn = (input: number) => input.toString();

const identityWithCb = (input: number, cb: (output: string) => void) => {
  const output = input.toString();
  cb(output);
}

identityWithCb(1, (output) => console.log(output));

// Promisify!
const promisify = (
  fn: (
    input: number,
    cb: (output: string) => void
  ) => void
): (input: number) => Promise<string> => {
  return (input: number) => {
    return new Promise(resolve => {
      fn(input, (output) => resolve(output));
    });
  }
}

const identityAsync = promisify(identityWithCb);
const someAsyncFn = async () => {
  const result = await identityAsync(1);
  console.log(result);
}

//#region Let's infer type from input argument!
type GetArgType<Fn> = Fn extends (input: infer Input, ...args: any) => any
  ? Input
  : never;
type GetOutputType<Fn> = Fn extends (_: any, cb: infer Cb) => any
  ? Cb extends (output: infer Output) => any
    ? Output
    : never
  : never;
const smartPromisify = <
  Fn extends Function,
  Input = GetArgType<Fn>,
  Output = GetOutputType<Fn>
>(
  fn: Fn
): (input: Input) => Promise<Output> =>
  (input: Input) => new Promise<Output>(resolve => {
    fn(input, ((output: Output) => resolve(output)));
  })
//#endregion

const smartIdentityAsync = smartPromisify(identityWithCb);

// Argument list could also be inferred
type GetArgList<Fn> = Fn extends (...args: infer TArgs) => any
  ? TArgs
  : never;
type IdentityFnArg = GetArgList<typeof identityWithCb>;
type IdentityFnInputArg = IdentityFnArg[0];
type IdentityFnCbArg = IdentityFnArg[1];
