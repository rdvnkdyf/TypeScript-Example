// console.log("Merhaba Dünya")
// //Statik tipleme ``
// let a:string;
// let b:number;
// let c:boolean;
// a="Hello World"
// b=22
// c=true 
// console.log(a);
// console.log("Typescript 1 deniyoruz");
// console.log(a,b,c);
// //Dinamik tipleme 
// let d:any; //Herhangi bir tip 
// d="You rock my world";
// console.log(d);
// d=25;
// console.log(25);

//----ARRAY OLUSTURMA---- string array olusturduysak number eleman ekleyemeyiz
// let langs:string[];
// let numbers:number[];
// let boolValue:Array<boolean>;
// langs=["PHP","Java","C++","Python"];
// numbers=[1,2,3,4,5];
// boolValue=[true,false,false];
// let a:Array<number>=[1,2,3,4,5,6,7];
// console.log(langs);
// //Spread operator 
// console.log(...langs);
// console.log(...numbers);
// console.log(...boolValue);
// console.log(...a);

//fonksiyon olusturma 
// function  addNumbers(num1:number,num2:number){
//     console.log(num1+num2);
// }
// addNumbers(10,20);
// //addNumbers("Merhaba",20);
// function  addNumbers1(num1:number,num2:number):number{
//    return num1+num2;
// }
// addNumbers(10,20);
//optional parameters 
// function  addNumbers2(num1:number,num2?:number){
//     if(typeof num2==='undefined'){
//         return num1;
//     }
//     return num1+num2;
// }
// console.log(addNumbers2(10));
// console.log(addNumbers2(10,20));
// function  addNumbers2(num1:number,num2:number):void{
       
//         console.log(num1+num2);
//         return;
//     }
// addNumbers2(10,20);

//SINIFLAR 
// class Person{
//     name:string;
//     age:number;
//     phone:string;
//     constructor(name:string,age:number,phone:string){
//         this.name=name;
//         this.age=age;
//         this.phone=phone;
//         console.log("Kisi olusturuldu");
//     }
//     showInfos(){
//         console.log(`İsim:${this.name} Yas:${this.age} Phone:${this.phone}`)
//     }
// }
// class Employee extends Person{
//    salary:number;
//    constructor(name:string,age:number,phone:string,salary:number){
//        super(name,age,phone);
//        this.salary=salary;
//    }
//    showInfos(){
//     super.showInfos();
//     console.log("Maas: "+this.salary);
// }
//    changeDepartment(){
//        console.log("Departman Değiştiriliyor");
//    }
// }
// let person1=new Person("Ridvan Kadayifci",22,"123456");
// person1.showInfos();
// //console.log(person1.name); class degiskeni public olursa bu sekilde erişilir
// let employee1=new Employee("Mustafa Murat",22,"123456",4000);
// employee1.showInfos();
// employee1.changeDepartment();
// interface IDatabase{
//     add();
//     get();
//     delete();
//     update();
// }
// class MySql implements IDatabase{
//     add(){
//         console.log("MySql add");
//     }
//     get(){
//         console.log("MySql get");
//     }
//     delete(){
//         console.log("MySql delete");
//     }
//     update(){
//         console.log("MySql update");
//     }
// }
// let mysql=new MySql();
// mysql.add();
// class MongoDb implements IDatabase{
//     add(){
//         console.log("MongoDb add");
//     }
//     get(){
//         console.log("MongoDb get");
//     }
//     delete(){
//         console.log("MongoDb delete");
//     }
//     update(){
//         console.log("MongoDb update");
//     }
// }
// function addDatabase(database:IDatabase){
//     database.add();
// }
// addDatabase(new MySql());
// addDatabase(new MongoDb());
abstract class Database{
    get(){
        console.log("Database Get");
    }
    add(){
        console.log("Database Add");
    }
    abstract delete();
    abstract update();
}
class MySql extends Database{
         
         delete(){
             console.log("MySql delete");
         }
         update(){
             console.log("MySql update");
         }
          }
     
class MongoDb extends Database{
         
         delete(){
             console.log("MongoDb delete");
         }
         update(){
             console.log("MongoDb update");
         }
     }
function addDatabase(database:Database){
            database.delete();
         }
addDatabase(new MySql());
addDatabase(new MongoDb());