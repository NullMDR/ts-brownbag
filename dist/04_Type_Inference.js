var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const identityFn = (input) => input.toString();
const identityWithCb = (input, cb) => {
    const output = input.toString();
    cb(output);
};
identityWithCb(1, (output) => console.log(output));
// Promisify!
const promisify = (fn) => {
    return (input) => {
        return new Promise(resolve => {
            fn(input, (output) => resolve(output));
        });
    };
};
const identityAsync = promisify(identityWithCb);
const someAsyncFn = () => __awaiter(this, void 0, void 0, function* () {
    const result = yield identityAsync(1);
    console.log(result);
});
const smartPromisify = (fn) => (input) => new Promise(resolve => {
    fn(input, ((output) => resolve(output)));
});
//#endregion
const smartIdentityAsync = smartPromisify(identityWithCb);
