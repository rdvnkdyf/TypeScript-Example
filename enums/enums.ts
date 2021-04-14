//-------------------example 1
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right,
//   }
// console.log(Direction);

//-------------------------example 2 
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right,
//   }

//----------------------------------example 3 
// enum UserResponse {
//     No = 0,
//     Yes = 1,
//   }
  
//   function respond(recipient: string, message: UserResponse): void {
//     // ...
//   }
  
//   respond("Princess Caroline", UserResponse.Yes);

//-------------------------------------example 4 
// enum E {
//     A = getSomeValue(),
//     B,
// //Enum member must have initializer.
//   }

//-------------------------example 5 
// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT",
//   }

//----------------------------example 6 
// enum BooleanLikeHeterogeneousEnum {
//     No = 0,
//     Yes = "YES",
//   }

//-------------------------------example 7
// E.X is constant:
// enum E {
//     X,
//     }

//----------------------------example 8
// enum E1 {
//     X,
//     Y,
//     Z,
//     }
    
// enum E2 {
//     A = 1,
//     B,
//     C,
// }

//--------------------------------example 9
// enum FileAccess{
//     //constant members 
//     None,
//     Read=1<<1,
//     Write=1<<2,
//     ReadWrite=Read | Write,
//     //computed member 
//     G="123".length, 
// }

//----------------------------example 10 
// enum ShapeKind {
//     Circle,
//     Square,
//   }
  
//   interface Circle {
//     kind: ShapeKind.Circle;
//     radius: number;
//   }
  
//   interface Square {
//     kind: ShapeKind.Square;
//     sideLength: number;
//   }
  
//   let c: Circle = {
//     kind: ShapeKind.Square,
//  // Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
//     radius: 100,
//   };

//----------------------------example 11 
// enum E {
//     Foo,
//     Bar,
//   }
  
//   function f(x: E) {
//     if (x !== E.Foo || x !== E.Bar) {
//   //This condition will always return 'true' since the types 'E.Foo' and 'E.Bar' have no overlap.
//       //
//     }
//   }

//--------------------------example 12 
// enum E{
//     X,
//     Y,
//     Z
// }

//------------------------------example 13 
// enum E {
//     X,
//     Y,
//     Z,
//   }
  
//   function f(obj: { X: number }) {
//     return obj.X;
//   }
  
//   // Works, since 'E' has a property named 'X' which is a number.
//   console.log(f(E));

//--------------------------------------example 14 
// enum LogLevel{
//     ERROR,
//     WARN,
//     INFO,
//     DEBUG
// }
// type LogLevelStrings=keyof typeof LogLevel;
// function printImportant(key:LogLevelStrings,message:string){
//     const num=LogLevel[key];
//     if(num<=LogLevel.WARN){
//         console.log("Log level key is:", key);
//     console.log("Log level value is:", num);
//     console.log("Log level message is:", message);
//     }
// }
// printImportant("ERROR","This is a message");

//-----------------------------example  15 
// enum Enum {
//     A,
//   }
  
// let a = Enum.A;
// let nameOfA = Enum[a]; // "A"

//-----------------------------example 16
// const enum Enum {
//     A = 1,
//     B = A * 2,
//   }

//-----------------------------example 17 
// const enum Direction{
//     Up,
//     Down,
//     Left,
//     Right
// }
// // let directions=[
// //     Direction.Up,
// //     Direction.Down,
// //     Direction.Left,
// //     Direction.Right,
// // ];
// //-------------------------------------example 18
// "use strict";
// let directions = [
//     0 /* Up */,
//     1 /* Down */,
//     2 /* Left */,
//     3 /* Right */,
// ];

//---------------------------example 19 
declare enum Enum{
    A=1,
    B,
    C=2,
}



