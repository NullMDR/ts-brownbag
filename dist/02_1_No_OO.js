// Object Oriented is not the best solution
const getGreeter = (message) => {
    const greeting = message;
    return {
        greet: () => `Hello, ${greeting}`
    };
};
const getGreeterSimplified = (message) => ({ greet: () => `Hello, ${message}` });
const getHelloWorldGreeter = () => getGreeter('World!');
const hello2 = getHelloWorldGreeter();
console.log(hello2.greet()); // Hello World!
// Access private? Not allowed.
console.log(hello2['message']); // undefined
// Closure works well in function
const greet2 = hello2.greet;
console.log(greet2()); // Hello World!
//# sourceMappingURL=02_1_No_OO.js.map