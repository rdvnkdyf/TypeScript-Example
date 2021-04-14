// //BASIC TYPES 

// // --Boolean
// let isDone:boolean=false;
// console.log(isDone)

// //--Number 
// let decimal:number=6;
// console.log(decimal)
// let hex:number=0xf00d;
// console.log(hex)
// let binary:number=0b1010;
// console.log(binary)
// let octal:number=0o744;
// console.log(octal)
// let big:bigint=100n;
// console.log(big)

// //--String 
// let color:string="blue";
// console.log(color)
// color='red';
// console.log(color)
// let fullName:string=`Bob Bobbington`;
// let age:number=37;
// let sentence:string=`Hello,my name is ${fullName}.I'll be ${age+1} years old next month.`;
// console.log(sentence);
// let sentence1:string=
// "Hello,my name is "+
// fullName+
// ".\n\n"+
// "I'll be "+
// (age+1)+
// "years old next month..";
// console.log(sentence1);

// //--Array 
//  let list2:number[]=[1,2,3];
//  console.log(... list2);
//  let list1:Array<number>=[1,2,3];
//  console.log(... list1);
//  //--Tuple 
//  let x:[string,number];
//  x=["hello",10];//ok 
//  console.log(x);
//  // x=[10,"hello"] error 
//  console.log(x[0].substring(1)); //ok 
//  //console.log(x[1].substring(1)); error
//  //x[3]="world"; //error TS2493: Tuple type '[string, number]' of length '2' has no element at index '3 
// //console.log(x[5].toString()); //error TS2493: Tuple type '[string, number]' of length '2' has no element at index '5'.

// //---Enum
// enum Color{
//     Red,
//     Green,
//     Blue,
// } 
// let c:Color=Color.Green;
// console.log(c);
// enum Color1{
//     Red=1,
//     Green,
//     Blue,
// } 
// let c1:Color1=Color1.Green;
// console.log(c1);
// enum Color3 {
//     Red = 1,
//     Green = 2,
//     Blue = 4,
//   }
// let c3: Color3 = Color3.Green;
// console.log(c3);

// enum Color4 {
//     Red = 1,
//     Green,
//     Blue,
//   }
//   let colorName: string = Color4[2];
  
//   // Displays 'Green'
//   console.log(colorName);

//--Unknown
// let notSure:unknown=4;
// console.log(notSure);
// notSure="maybe a string instead";
// console.log(notSure);
// notSure=false;
// console.log(notSure);
// declare const maybe: unknown;
// //const aNumber: number = maybe; //error TS2322: Type 'unknown' is not assignable to type 'number'.
// if (maybe === true) {
//     // TypeScript knows that maybe is a boolean now
//     const aBoolean: boolean = maybe;
//     // So, it cannot be a string
//     //const aString: string = maybe; //error TS2322: Type 'boolean' is not assignable to type 'string'.
// }
// if (typeof maybe === "string") {
//     // TypeScript knows that maybe is a string
//     const aString: string = maybe;
//     // So, it cannot be a boolean
//     //const aBoolean: boolean = maybe;//error TS2322: Type 'string' is not assignable to type 'boolean'.
  
//   }

//--Any 
// declare function getValue(key:string):any;
// // OK, return value of 'getValue' is not checked
// const str: string = getValue("myString");
// let looselyTyped: any=4;
// // OK, ifItExists might exist at runtime
// looselyTyped.ifItExists();
// // OK, toFixed exists (but the compiler doesn't check)
// looselyTyped.toFixed();
// let strictlyTyped:unknown=4;
// // strictlyTyped.toFixed(); error TS2339: Property 'toFixed' does not exist on type 'unknown'.
//let looselyTyped:any={};
//let d=looselyTyped.a.b.c.d;  //  ^ = let d: any 

//--Void 
// function warnUser():void{
//     console.log("This is my warning message");
// }
// warnUser()
// let unusable:void=undefined;
// // OK if `--strictNullChecks` is not given
// unusable=null;
// console.log(unusable);

//--Null and Undefined 
// Not much else we can assign to these variables!
// let u: undefined = undefined;
// let n: null = null;
// console.log(u);
// console.log(n);

//--Never 
// Function returning never must not have a reachable end point
// function error(message: string): never {
//     throw new Error(message);
//   }
  
//   // Inferred return type is never
//   function fail() {
//     return error("Something failed");
//   }
  
//   // Function returning never must not have a reachable end point
//   function infiniteLoop(): never {
//     while (true) {}
//   }

// //--Object 
// declare function create(o:object | null):void;
// // OK
// create({ prop: 0 });
// create(null);
// create(undefined); // Remember, undefined is not a subtype of null
// //create(42); //error TS2345: Argument of type 'number' is not assignable to parameter of type 'object'.
// //create("string");  //error TS2345: Argument of type 'string' is not assignable to parameter of type 'object'
// //create(false); //error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'object'.

//--Type assertions 
// let someValue: unknown = "this is a string";
// console.log(someValue);
// let strLength: number = (someValue as string).length;
// console.log(strLength);
// let someValue1: unknown = "this is a string";
// console.log(someValue1);
// let strLength1: number = (<string>someValue).length;
// console.log(strLength1);

//--About Number, String, Boolean, Symbol and Object
function reverse(s:String):String{
    return s.split("").reverse().join("");
}
console.log(reverse("hello world"));

function reverse1(s: string): string {
    return s.split("").reverse().join("");
  }
  
console.log(reverse1("hello world"));
