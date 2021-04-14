//-------------------example 1
// class Greeter{
//     greeting:string;
//     constructor(message:string){
//         this.greeting=this.greeting;
//     }
//     greet(){
//         return "Hello ,"+this.greeting;
//     }
// }
// let greeter=new Greeter("World");
// console.log(greeter.greet());
//----------------------example 2 
// class Animal{
//     move(distanceInMeters:number=0){
//         console.log(`Animal moved ${distanceInMeters}m.`);
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log("Woof!Woof!");
//     }
// }
// const dog=new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();
//--------------------example 3 
// class Animal{
//     name:string;
//     constructor(theName:string){
//         this.name=theName;
//     }
//     move(distanceInMeters:number=0){
//         console.log(`Animal moved ${distanceInMeters}m.`);
//     }
// }
// class Snake extends Animal{
//     constructor(name:string){
//        super(name);
//     }
//     move(distanceInMeters=5){
//         console.log("Slithering");
//         super.move(distanceInMeters);
//     }
// }
// class Horse extends Animal{
//     constructor(name: string) {
//         super(name);
//       }
//       move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//       }
// }
// let sam=new Snake("Sammy the Python");
// let tom:Animal=new Horse("Tommy the Palomino");
// sam.move();
// tom.move(34);
//----------------------example 4
// class Animal{
//     public name:string;
//     public constructor(theName:string){
//         this.name=theName;
//     }
//     public move(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
//------------------------------------------example 5
// class Animal {
//     #name: string;
//     constructor(theName: string) {
//       this.#name = theName;
//     }
//   }
// new Animal("Cat").#name; //Property '#name' is not accessible outside class 'Animal' because it has a private identifier.
//-------------------------example 6
// class Animal {
//     private name: string;
//     constructor(theName: string) {
//       this.name = theName;
//     }
//   }
// new Animal("Cat").name; //Property 'name' is private and only accessible within class 'Animal'.
//-------------------------------example 7
// class Animal{
//     private name:string;
//     constructor(theName:string){
//         this.name=theName;
//     }
// }
// class Rhino extends Animal{
//     constructor(){
//         super("Rhino");
//     }
// }
// class Employee{
//     private name:string;
//     constructor(theName:string){
//         this.name=theName;
//     }
// }
// let animal=new Animal("Goat");
// let rhino=new Rhino();
// let employee=new Employee("Bob");
// animal = rhino;
// animal = employee; //Type 'Employee' is not assignable to type 'Animal'.
// //Types have separate declarations of a private property 'name'
//---------------------------------example 8
// class Person{
//     protected name:string;
//     constructor(name:string){
//         this.name=name;
//     }
// }
// class Employee extends Person{
//     private department: string;
//   constructor(name: string, department: string) {
//     super(name);
//     this.department = department;
//   }
//   public getElevatorPitch() {
//     return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//   }
// }
// let howard = new Employee("Howard", "Sales");
// console.log(howard.getElevatorPitch());
// console.log(howard.name);
//-----------------------------------example 9 
// class Person {
//     protected name: string;
//     protected constructor(theName: string) {
//       this.name = theName;
//     }
//   }
//   // Employee can extend Person
// // class Employee extends Person {
// //     private department: string;
// //     constructor(name: string, department: string) {
// //       super(name);
// //       this.department = department;
// //     }
// //     public getElevatorPitch() {
// //       return `Hello, my name is ${this.name} and I work in ${this.department}.`;
// //     }
// //   }
// // let howard = new Employee("Howard", "Sales");
// // let john = new Person("John"); //Constructor of class 'Person' is protected and only accessible within the class declaration.
//----------------------------------------example 10 
// class Octopus {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     constructor(theName: string) {
//       this.name = theName;
//     }
//   }
// let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit";  //Cannot assign to 'name' because it is a read-only property.
//-------------------------------example 11 
// class Octopus {
//     readonly numberOfLegs: number = 8;
//     constructor(readonly name: string) {}
//   }
// let dad = new Octopus("Man with the 8 strong legs");
// console.log(dad.name);
//----------------------------------example 12 
// class Employee {
//     fullName: string;
//   }
//   let employee = new Employee();
//   employee.fullName = "Bob Smith";
//   if (employee.fullName) {
//     console.log(employee.fullName);
//   }
//---------------------------------example 13
// const fullNameMaxLength = 10;
// class Employee {
//   private _fullName: string = "";
//   get fullName(): string {
//     return this._fullName;
//   }
//   set fullName(newName: string) {
//     if (newName && newName.length > fullNameMaxLength) {
//       throw new Error("fullName has a max length of " + fullNameMaxLength);
//     }
//     this._fullName = newName;
//   }
// }
// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//   console.log(employee.fullName);
// }
//-------------------------------------------example 14 
// class Grid {
//     static origin = { x: 0, y: 0 };
//     calculateDistanceFromOrigin(point: { x: number; y: number }) {
//       let xDist = point.x - Grid.origin.x;
//       let yDist = point.y - Grid.origin.y;
//       return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//     }
//     constructor(public scale: number) {}
//   }
// let grid1 = new Grid(1.0); // 1x scale
// let grid2 = new Grid(5.0); // 5x scale
// console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
//---------------------------------example 15 
// abstract class Animal {
//     abstract makeSound(): void;
//     move(): void {
//       console.log("roaming the earth...");
//     }
//   }
//-------------------------------------------example 16
// abstract class Department {
//     constructor(public name: string) {}
//     printName(): void {
//       console.log("Department name: " + this.name);
//     }
//     abstract printMeeting(): void; // must be implemented in derived classes
//   }
//   class AccountingDepartment extends Department {
//     constructor() {
//       super("Accounting and Auditing"); // constructors in derived classes must call super()
//     }
//     printMeeting(): void {
//       console.log("The Accounting Department meets each Monday at 10am.");
//     }
//     generateReports(): void {
//       console.log("Generating accounting reports...");
//     }
//   }
//   let department: Department; // ok to create a reference to an abstract type
//   //department = new Department(); // error: cannot create an instance of an abstract class
//   //Cannot create an instance of an abstract class.
//   department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
//   department.printName();
//   department.printMeeting();
//   //department.generateReports(); // error: department is not of type AccountingDepartment, cannot access generateReports
//  // Property 'generateReports' does not exist on type 'Department'.
//------------------------------------------example 17
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//       this.greeting = message;
//     }
//     greet() {
//       return "Hello, " + this.greeting;
//     }
//   }
// let greeter: Greeter;
// greeter = new Greeter("world");
// console.log(greeter.greet()); // "Hello, world"
//------------------------------------example 18
// let Greeter = (function () {
//     function Greeter(message) {
//       this.greeting = message;
//     }
//     Greeter.prototype.greet = function () {
//       return "Hello, " + this.greeting;
//     };
//     return Greeter;
//   })();
// let greeter;
// greeter = new Greeter("world");
// console.log(greeter.greet()); // "Hello, world"
//------------------------------------------example 19 
// class Greeter {
//     static standardGreeting = "Hello, there";
//     greeting: string;
//     greet() {
//       if (this.greeting) {
//         return "Hello, " + this.greeting;
//       } else {
//         return Greeter.standardGreeting;
//       }
//     }
//   }
//   let greeter1: Greeter;
//   greeter1 = new Greeter();
//   console.log(greeter1.greet()); // "Hello, there"
//   let greeterMaker: typeof Greeter = Greeter;
//   greeterMaker.standardGreeting = "Hey there!";
//   let greeter2: Greeter = new greeterMaker();
//   console.log(greeter2.greet()); // "Hey there!"
//   let greeter3: Greeter;
//   greeter3 = new Greeter();
//   console.log(greeter3.greet()); // "Hey there!"
//-------------------------------example 20
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
