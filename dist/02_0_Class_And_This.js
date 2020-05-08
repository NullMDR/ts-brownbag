// Class smells OO
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    // public constructor(private greeting: string) { }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}
class HelloWorldGreeter extends Greeter {
    constructor() {
        super('World!');
    }
}
const hello = new HelloWorldGreeter();
console.log(hello.greet()); // Hello World!
//#region Tricks in js class
// Access private? Yes you can.
// console.log(hello.greeting);
console.log(hello['greeting']); // 'World'
// The problem of "bind this"
const greet = hello.greet;
// console.log(greet()); // Error!
console.log(greet.call(hello)); // Hello, World!
// old-school function
function holyGreet() {
    return `Holy ${this.greeting}`;
}
console.log(holyGreet.call(hello)); // Holy World!
//#endregion
//# sourceMappingURL=02_0_Class_And_This.js.map