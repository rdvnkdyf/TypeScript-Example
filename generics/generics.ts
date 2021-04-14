//---------------------------------example 1
// function identity(arg:number):number{
//     return arg;
// }

//----------------------------------example 2 
// function identity(arg: any): any {
//     return arg;
//   }

//-------------------------------------example 3 
// function identity<T>(arg:T):T{
//     return arg;
// }
// let output=identity<string>("myString");
// console.log(output);
// let output1 = identity("myString");
// //       ^ = let output: string
// console.log(output1);

//---------------------------------example 4 
// function identity<T>(arg: T): T {
//     return arg;
//   }

//------------------------------------example 5
// function loggingIdentity<T>(arg: T): T {
//     console.log(arg.length);
//   //Property 'length' does not exist on type 'T'.
//     return arg;
//   }

////////////////////////example 6
// function loggingIdentity<T>(arg: T[]): T[] {
//     console.log(arg.length);
//     return arg;
//   }

//-----------------------------------example 7
// function loggingIdentity<T>(arg: Array<T>): Array<T> {
//     console.log(arg.length); // Array has a .length, so no more error
//     return arg;
//   }

//--------------------------------example 8 
// function identity<T>(arg: T): T {
//     return arg;
//   }
  
// let myIdentity: <T>(arg: T) => T = identity;

//--------------------------------example 9
// function identity<T>(arg: T): T {
//     return arg;
//   }
  
// let myIdentity: <U>(arg: U) => U = identity;

//--------------------------------example 10 
// function identity<T>(arg: T): T {
//     return arg;
//   }
  
//   let myIdentity: { <T>(arg: T): T } = identity;

//-----------------------------------example 11
// interface GenericIdentityFn {
//     <T>(arg: T): T;
//   }
  
//   function identity<T>(arg: T): T {
//     return arg;
//   }
  
//   let myIdentity: GenericIdentityFn = identity;
//   console.log(myIdentity);

//-------------------------------------------example 11
// interface GenericIdentityFn<T> {
//     (arg: T): T;
//   }
  
//   function identity<T>(arg: T): T {
//     return arg;
//   }
  
//   let myIdentity: GenericIdentityFn<number> = identity;

//-----------------------------------------example 12 
// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
//   }
  
//   let myGenericNumber = new GenericNumber<number>();
//   myGenericNumber.zeroValue = 0;
//   myGenericNumber.add = function (x, y) {
//     return x + y;
//   };
// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "";
// stringNumeric.add = function (x, y) {
//   return x + y;
// };

// console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

//---------------------------------example 13 
// function loggingIdentity<T>(arg: T): T {
// console.log(arg.length);
//  // Property 'length' does not exist on type 'T'.
//     return arg;
// }

//-------------------------------example 14 
// interface Lengthwise {
//     length: number;
//   }
  
//   function loggingIdentity<T extends Lengthwise>(arg: T): T {
//     console.log(arg.length); // Now we know it has a .length property, so no more error
//     return arg;
//   }
// loggingIdentity(3); //Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.

//---------------------------------------example 15 
// interface Lengthwise {
//     length: number;
//   }
  
//   function loggingIdentity<T extends Lengthwise>(arg: T): T {
//     console.log(arg.length); // Now we know it has a .length property, so no more error
//     return arg;
//   }
// loggingIdentity({ length: 10, value: 3 });

//------------------------------example 16
// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//     return obj[key];
//   }
  
// let x = { a: 1, b: 2, c: 3, d: 4 };
  
// getProperty(x, "a");
// getProperty(x, "m");
// //Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.


//----------------------------------example 17
function create<T>(c: { new (): T }): T {
    return new c();
  }

  class BeeKeeper {
    hasMask: boolean;
  }
  
  class ZooKeeper {
    nametag: string;
  }
  
  class Animal {
    numLegs: number;
  }
  
  class Bee extends Animal {
    keeper: BeeKeeper;
  }
  
  class Lion extends Animal {
    keeper: ZooKeeper;
  }
  
  function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
  }
  
  createInstance(Lion).keeper.nametag;
  createInstance(Bee).keeper.hasMask;