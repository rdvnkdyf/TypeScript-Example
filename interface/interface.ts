//---Out First Interface 
// function printLabel(labeledObj:{label:string}){
//     console.log(labeledObj.label);
// }
// let myObj={size:10,label:"Size 10 Object"};
// printLabel(myObj);

// interface LabeledValue {
//     label: string;
//   }
  
//   function printLabel(labeledObj: LabeledValue) {
//     console.log(labeledObj.label);
//   }
  
//   let myObj1= { size: 10, label: "Size 10 Object" };
//   printLabel(myObj1);

//---Optional Properties 
// interface SquareConfig{
//     color?:string;
//     width?:number;
// }
// function createSquare(config: SquareConfig): { color: string; area: number }{
//     let newSquare={color:"white",area:100};
//     if(config.color){
//         newSquare.color=config.color;
//     }
//     if(config.width){
//         newSquare.area=config.width* config.width;
//     }
//     return newSquare;
// }
// let mySquare=createSquare({color:"black"});
// console.log(mySquare);
// interface SquareConfig {
//     color?: string;
//     width?: number;
//   }
  
//   function createSquare(config: SquareConfig): { color: string; area: number } {
//     let newSquare = { color: "white", area: 100 };
//     if (config.clor) { //error TS2551: Property 'clor' does not exist on type 'SquareConfig'. Did you mean 'color'?
//   //Property 'clor' does not exist on type 'SquareConfig'. Did you mean 'color'?
//       // Error: Property 'clor' does not exist on type 'SquareConfig'
//       newSquare.color = config.clor; //error TS2551: Property 'clor' does not exist on type 'SquareConfig'. Did you mean 'color'?
//   //Property 'clor' does not exist on type 'SquareConfig'. Did you mean 'color'?
//     }
//     if (config.width) {
//       newSquare.area = config.width * config.width;
//     }
//     return newSquare;
//   }
  
//   let mySquare = createSquare({ color: "black" });

//--Readonly properties
// interface Point{
//     readonly x:number;
//     readonly y:number;
// }
// let p1:Point={x:10,y:20};
// p1.x=5;//error   Cannot assign to 'x' because it is a read-only property.
// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error! Index signature in type 'readonly number[]' only permits reading.
// ro.push(5); // error! Property 'push' does not exist on type 'readonly number[]'.
// ro.length = 100; // error! Cannot assign to 'length' because it is a read-only property.
// a = ro; // error! The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
// let a:number[]=[1,2,3,4];
// let ro:ReadonlyArray<number>=a;
// a=ro as number[];
// console.log(a);

//--Excess Property Checks
// interface SquareConfig {
//     color?: string;
//     width?: number;
//     [propName:string]:any;
//   }
  
//   function createSquare(config: SquareConfig): { color: string; area: number } {
//     return {
//       color: config.color || "red",
//       area: config.width ? config.width * config.width : 20,
//     };
//   }
  
//   //let mySquare = createSquare({ colour: "red", width: 100 });
// //   Argument of type '{ colour: string; width: number; }' is not assignable to parameter of type 'SquareConfig'.
// //   Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?
// // let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
// // console.log(mySquare);
// let squareOptions = { colour: "red", width: 100 };
// let mySquare = createSquare(squareOptions);
// console.log(mySquare);
// let squareOptions1 = { colour: "red" };
// let mySquare1 = createSquare(squareOptions1); Type '{ colour: string; }' has no properties in common with type 'SquareConfig'.

//--Function Types 
// interface SearchFunc{
//   (source:string,subString:string):boolean;
// }
// let mySearch:SearchFunc;
// mySearch=function(source:string,subString:string){
//   let result=source.search(subString);
//   return result>-1;
// }
// console.log(mySearch("asdasd","asdasd"));
// let mySearch1: SearchFunc;

// mySearch1 = function (src: string, sub: string): boolean {
//   let result = src.search(sub);
//   return result > -1;
// };
// mySearch1("asdasd","asdasdsadasd");

// let mySearch2: SearchFunc;

// mySearch2 = function (src, sub) {
//   let result = src.search(sub);
//   return result > -1;
// };

// let mySearch3: SearchFunc;

// mySearch3 = function (src, sub) {
// //Type '(src: string, sub: string) => string' is not assignable to type 'SearchFunc'.
//   //Type 'string' is not assignable to type 'boolean'.
//   let result = src.search(sub);
//   return "string";
// };

//--Indexable Types 
// interface StringArray{
//   [index1,number]:string;
// }
// let myArray:StringArray;
// myArray=["Bob","Fred"];
// let myStr:string=myArray[0];
// console.log(myStr);
// interface Animal{
//   name:string;
// }
// interface Dog extends Animal{
//   breed:string;
// }
// // Error: indexing with a numeric string might get you a completely separate type of Animal!
// interface NotOkay {
//   [x: number]: Animal;
// //Numeric index type 'Animal' is not assignable to string index type 'Dog'.
//   [x: string]: Dog;
// }
// interface NumberDictionary {
//   [index: string]: number;
//   length: number; // ok, length is a number
//   name: string; // error, the type of 'name' is not a subtype of the indexer
// //Property 'name' of type 'string' is not assignable to string index type 'number'.
// }
// interface NumberOrStringDictionary {
//   [index: string]: number | string;
//   length: number; // ok, length is a number
//   name: string; // ok, name is a string
// }
// interface ReadonlyStringArray {
//   readonly [index: number]: string;
// }

// let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Mallory"; // error!  Index signature in type 'ReadonlyStringArray' only permits reading.

//--Class Types 
// interface ClockInterface {
//   currentTime: Date;
// }

// class Clock implements ClockInterface {
//   currentTime: Date = new Date();
//   constructor(h: number, m: number) {}
// }
// interface ClockInterface1 {
//   currentTime: Date;
//   setTime(d: Date): void;
// }

// class Clock1 implements ClockInterface1 {
//   currentTime: Date = new Date();
//   setTime(d: Date) {
//     this.currentTime = d;
//   }
//   constructor(h: number, m: number) {}
// }
// interface ClockConstructor2 {
//   new (hour: number, minute: number);
// }

// class Clock2 implements ClockConstructor2 {
// //Class 'Clock' incorrectly implements interface 'ClockConstructor'.
//   //Type 'Clock' provides no match for the signature 'new (hour: number, minute: number): any'.
//   currentTime: Date;
//   constructor(h: number, m: number) {}
// }
// interface ClockConstructor {
//   new (hour: number, minute: number): ClockInterface;
// }

// interface ClockInterface {
//   tick(): void;
// }

// function createClock(
//   ctor: ClockConstructor,
//   hour: number,
//   minute: number
// ): ClockInterface {
//   return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//   constructor(h: number, m: number) {}
//   tick() {
//     console.log("beep beep");
//   }
// }

// class AnalogClock implements ClockInterface {
//   constructor(h: number, m: number) {}
//   tick() {
//     console.log("tick tock");
//   }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);
// console.log(digital);
// console.log(analog);
// interface ClockConstructor{
//   new(hour:number,minute:number):ClockInterface;
// }
// interface ClockInterface{
//   tick():void;
// }
// const Clock:ClockConstructor=class Clock implements ClockInterface{
//   constructor(h:number,m:number){}
//   tick(){
//     console.log("beep beep ");
//   }
// };
// let clock=new Clock(12,17);
// clock.tick();

//--Extending Interfaces
// interface Shape {
//   color: string;
// }

// interface Square extends Shape {
//   sideLength: number;
// }

// let square = {} as Square;
// square.color = "blue";
// square.sideLength = 10;
// console.log(square.color);
// console.log(square.sideLength);
// interface Shape1 {
//   color: string;
// }

// interface PenStroke1 {
//   penWidth: number;
// }

// interface Square1 extends Shape1, PenStroke1 {
//   sideLength: number;
// }

// let square1 = {} as Square1;
// square1.color = "blue";
// square1.sideLength = 10;
// square1.penWidth = 5.0;
// console.log(square1.color);
// console.log(square1.sideLength);
// console.log(square1.penWidth);

//--Hybrid Types
// interface Counter {
//   (start: number): string;
//   interval: number;
//   reset(): void;
// }

// function getCounter(): Counter {
//   let counter = function (start: number) {} as Counter;
//   counter.interval = 123;
//   counter.reset = function () {};
//   return counter;
// }

// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;

//--Interfaces Extending Classes
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

class ImageControl implements SelectableControl {
//Class 'ImageControl' incorrectly implements interface 'SelectableControl'.
  //Types have separate declarations of a private property 'state'.
  private state: any;
  select() {}
}

