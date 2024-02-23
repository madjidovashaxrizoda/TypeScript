/* What is TS?
It is programming language to address shortcomings of JS. It is created by Microsoft.
TS is a JS with type checking.
Benefits
1. Static Typing => if variable declared as a number, you can not change it into string
2. Code Completion
3. Refactoring
4. Shorthand notations

Drawbacks
1. Compilation => transpilation happens when the code u write in TS should be compiled and translated into JS
2. Discipline in coding

TS => intoduces new types like:
1. any
2. unknown
3. never
4. enum
5. tuple

In TS, if u are using a large number, you separate it with _ , to make it easier to read.

You do not have to add annotation => type of value. For example:
let sales = 123_456_789; it will know that it is number by looking to value.

// let sales: number = 123_456_789;
// let course: string = 'TypeScript';
// let is_published: boolean = true; 

----------- Object/Function ----------
function calculateTax( income: number => u should write void, not a number, if ur function does not return value. , taxYear = 2022 ){
if (taxYear < 2022) {
    return income * 1.2;
}  return income * 1.3;
}
calculateTax(10_000); 

function getFullName(userEntity): string {
    return `${userEntity.firstname} ${userEntity.surname}`;
}


const user = {
firstname: "Anton",
surname: "Larichev",
city: "Moscow",
age: 33
}

console.log(getFullName(user));

let info:{
        officedId: number,
    isOpened: boolean,
    contacts: {
        phone: string,
        email: string,
        address: {
            city: string
        }
    }
}
let employee: {
    id: number,
    name?: string
 } = { id: 1 };
 employee.name ="Mosh";
 Use ? mark when it is necessary. For exmaple: we should not use this mark here because every employee has a name, when it was, for example fax, you could use ? mark since not everyone has a fax machine. So that's why do like this.
 let employee: {
    id: number,
    name: string
 } = { id: 1, name: 'Mosh };

-------- Massivs -----------
In TS, in an array there should be similar type of elements.
 let numbers: number[] = [1, 2, 3];
 let numbers = [1, 2, 3]; => u can write like this too, TS will know that the array consists of only numbers.

const skills: string[] = ["DEV", "DEVOPS", "TESTING"]; 
or u can use 
const skills: Array<string> = ["DEV", "DEVOPS", "TESTING"];

for (const skill of skills) {
    console.log(skill.toLowerCase());
    
}

const res = skills
.filter((s: string) => s !== "DEVOPS")
.map(s => s + '!')
.reduce((a,b) => a + b)

console.log(res);

----------- Tuples ----------
It is a fixed length array where each element has a particular type.
  let user: [number, string] = [1, "Mosh"] => because you wrote only number and string inside of the array, you can not add 3 element, because it will show error.

  const skill: [number, string] = [1, 'Dev'];

  const [id, skillName] = skill;

  const arr: [number, string, ...boolean[]] = [1, 'sdf', true, true] => we are using spread operator.


  ---------- ReadOnly ---------
const skill: [number, string] = [1, "Dev"]
skill[0] = 2;

if u put readonly, after skill:, u can not modify the elements of an array.

const skill: readonly [number, string] = [1, "Dev"]
or u can use 
const skill: ReadonlyArray<string> = ["Hello", "Dev"]
skill[0] = 2; => it will show error


 ----------- Enums ----------

 Using an enum we can represent a list of related constants and if we define our enums using the constant keyword, the compiler will generate more optimazed code.

  const small = 1;
  const medium = 2;
  const large = 3; => we can rewrite this code with enums

  //PascalCase

  enum Size { Small = 1, Medium, Large } => you can write ur own values and it can be other type too. Foe example: Small = 's', but if u do this you should add value to each of them. 

  let mySize: Size = Size.Medium;
  console.log(mySize); //2

enum StatusCode {
    SUCCESS = 's',
    IN_PROCESS = 'p',
    FAILED = 'f'
}
const res = {
    message: 'Done',
    statusCode: StatusCode.SUCCESS
}
function action(status: StatusCode) {
    
}
action(StatusCode.SUCCESS);

function compute() {
    return 3;
}

enum Roles{
    ADMIN = 1,
    USER = ADMIN * 2,
    FOLLOWER = compute()
}

enum Roles2{
    ADMIN = 1,
    USER = 2
    
}
 const res2 = Roles2.ADMIN; // const res2 = 1;




 enum QuestinStatus {
Published = 'published',
Draft = 'draft',
Deleted = 'deleted'
}

async function getFaqs(req:{
    topicId: number,
    status: QuestinStatus
}): Promise<{
    question: string,
    anwser: string,
    tags: string[],
    likes: number,
    status: string
}[]> {
    const res = await fetch('/faqs', {
        method: 'Post',
        body: JSON.stringify(req)
    })
    const data = await res.json();
    return data;
}


 ----- Union Types -------

    With union types we can give a variable or a function parameter more than one type. 

    function kgToLbs( weight: number | string ): number {
        //Narrowing => use this technique to narrow down this union type into a more specific type, to see the methods of the type

        if( typeof weight === 'number'){
return weight * 2.2;
        }else{
            return parseInt(weight) * 2.2;
        }
    }

    function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err);
  } else {
    console.log(err);
  }
}

function logObject(obj: { a: number } | { b: number }) {
  if ("a" in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

const a = 1 => equal to const a: 1;


    ------- Type Aliases -------

    Using type alias you can define a custom type.
      let employee: {
    id: number,
    name: string, 
    retire: (date: Date) => void
 } = { id: 1,
     name: 'Mosh,
    retire: (date:Data)=> {
        console.log(date)
    } }; => there are several problems here, so i would write this code in an alias type

    type Employee = {
        readonly id: number,
         name: string, 
    retire: (date: Date) => void
    }
    let employee: Employee = {
        id: 1, 
        name: 'Mosh',
        retire: (date:Data)=> {
        console.log(date)
    }
    } => so now you have a single place where we define the shape of an employee object and we can reuse this in multiple places.


     ------ Intersection Types -----

    Technique for combining types called intersection.

    type User = {
        name: string,
        age: number,
        skills: string[]
    }

    type Role = {
        id: number
    }

    type UserWithRole = User & Role;

    let user: UserWithRole = {
name: 'sas',
age: 17,
skills: ['1', '2'],
id: 1
    }


    if there is name in both user and Role, then we will use this technique:

    type UserWithRole = {
        user: User,
        role: Role
    }


     ------ Literal types ------

    Sometimes we want to limit values. We can assign to a variable. This is where we use literal types. 
    Literal (exact, specific)

    let quantity: number; => we should change number to a specific number. 
    let quantity: 50 = 50; => if we write 51, not 50 it will show error.
    let metric: 'cm' | 'inch';

    function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1{
        return 1;
    }
 fetchWithAuth('s', 'post');

 let method = 'post';
 fetchWithAuth('s', method as 'post') => use method as when the variable is let


  -------- Interfaces --------

  you can use interface and type, for example:

  interface User = {
      name: string,
        age: number,
        skills: string[]

        log: (id:number) => string;
  }

  interface Role = {
    roleId:number;
  }
   
  interface UserWithRole extends User, Role{
createdAt: Date;
  }

     let user: UserWithRole = {
name: 'sas',
age: 17,
skills: ['1', '2'],
roleId: 1,
createdAt: new Date()

log(id){
    return "";
}
}

 --------- Differences between interface and type ---------

 1. interface User {
    name: string;
 }
 interface User {
    age: number;
 }
 const user: User = {
    name: 'as',
    age: 17 
 }  => u can do this with interface but not with type

 2. type ID = string | number; => u can do not do this with interface, you should change it into object:

 interface IDI {
    ID: string | number
 }


 -------- Optional --------

interface User {
login: string;
password?: string;
}

const user: User = {
login: 'a@a.ru',
password: '1'
}

function multiply(first: number, second?: number): number{
    if (!second) {
       return first * first;
    } 
    return first * second;
}
console.log(multiply(5));

interface UserPro {
login: string;
password?: {
    type: 'primary' | 'secondary'
}
}

function testPass(user: UserPro) {
    const t = user.password?.type
}

function test(params?: string) {
    const t = params ?? multiply(5);
}


 ------- Exercise --------

 interface Payement{
sum: number;
from: number;
to: number;
}

enum Status {
    SUCCESS = 'success',
    FAILED = 'failed'
}

interface payementRequest extends Payement {}

interface dataSucces extends Payement{
databaseId: number; 
}

interface dataFail {
    errorMessage: string;
    errorCode: number;
}

interface responseSuccess {
    status: Status.SUCCESS,
    data: dataSucces
}

interface responseFail {
status: Status.FAILED,
data: dataFail
}

function get(): responseSuccess | responseFail {
    
}


with type guard
 type Res = responseSuccess | responseFail;
 function isSuccess(res: Res): res is responseSuccess{
    if(res.status === Status.SUCCESS){
        return true;
    } return false;
 }

 function isData(res: Res): number{
if(isSuccess(res)){
    return res.data.database;
} else{
    throw new Error(res.data.errorCode)
}
 }



----------- Void ----------

type void is when the function is not returning anything.
there are some differences between void and undefined. If function returns smth, for example number | undefined, the type will be undefined.

type voidFunc = () => void;
const f: voidFunc = () => {
    return true;
} => this function will not return true, it will return void, since function void ignores all the types inside of it. 


---------- Unknown --------

Any and unknown are a little bit similar, but unknown is stricter than any. to use unknown we must define a type of it. Always check the type of unknown.
Union type with unknown is always unknown. For example: type U1 = unknown | string; => U1 is unknown
Intersection with unknown is not unknown. For example: type U2 = unknown & string; => U2 is string

async function getData(){
    try {
        await fetch('');
    } catch (error) {
        if (error instanceof Error ){
            console.log(error.message);
        }
    }
}


--------- Never ---------

we use never when the function never returns.
We can not define never. For example: const a:never = ?;
But we can define void. For example: const a:void = unknown.

function generateError(message:string): never{
    throw new Error(message);
}
function isString(x: string | number): boolean{
    if(typeof x === "string"){
        return true;
    }else if(typeof x === "number"){
        return false;
    }
    generateError("will not work")
}


---------- Casting of types -------

let a = 5;
let b:string = a.toString()

let e:string = new String(a).valueOf() => String is not a string. It is an object,

let c = 'sdf';
let d:number = parseInt(c);

interface User{
    name: string;
    email: string;
    login: string;
}

const user:User = {
    name: 'Vasa',
    email: '212@mail.ru,
    login: 'vasia'
}

or

const user = {
    name: 'Vasa',
    email: '212@mail.ru,
    login: 'vasia'
} as User

interface Admin {
    name: string;
    role: number;
}

First method => (but it is not recommended, since admin does not have email and login, but spread operator will add these properties to admin)
const admin: Admin = {
    ...user,
    role: 1
}

Second method => function mapping (use this one)

function userToAdmin(user:User): Admin {
    return {
        name: user.name,
        role: 1
    }
}


------------- Type Guard -----------

Using type predicates
To define a type guard, we simply need to define a function whose return type is a type predicate:

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
let pet = getSmallPet();
 if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}


Using the in operator
The in operator also acts as a narrowing expression for types.

For a n in x expression, where n is a string literal or string literal type and x is a union type, the “true” branch narrows to types which have an optional or required property n, and the “false” branch narrows to types which have an optional or missing property n.

function move(pet: Fish | Bird) {
  if ("swim" in pet) {
    return pet.swim();
  }
  return pet.fly();
}


------- Class -------

class User {
    name: string;
    age: number;

constructor();
constructor(name: string);
constructor(age: number);
constructor(name: string, age: number);
constructor(ageOrName?: string | number, age?: number){
if(typeof ageOrName === 'string'){
     this.name = ageOrName;
}else if (typeof ageOrName === 'number') {
    this.age = ageOrName;
}
if (typeof age === 'number') {
    this.age = age;
}
}
    
}
const user = new User();
 const user2 = new User('Bloom');
 const user3 = new User(33);
 const user4 = new User('Bloom', 33)

// class Admin {
//     role: number;
// }
// const admin = new Admin();
// admin.role = 1; // if u write like this ts will throw u an error, but now it is not throwing an error, bc i change strictPropertyInitialization:true from tsconfig.json to strictPropertyInitialization:false

------- Methods -------

enum PaymentStatus {
    Holded,
    Processed,
    Reversed
}

class Payment{
    id: number;
    status: PaymentStatus = PaymentStatus.Holded;
    createdAt: Date = new Date();
updatedAt: Date;

constructor(id:number){
    this.id = id;
}

getPaymentLifeTime(): number{
return new Date().getTime() - this.createdAt.getTime();
}

unholdPayment() {
    if(this.status === PaymentStatus.Processed){
        throw new Error('Payment will not be returned!')
    }
    this.status = PaymentStatus.Reversed;
    this.updatedAt = new Date();
}
}

const payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
const time = payment.getPaymentLifeTime();
console.log(time);


----- Exercise ------

class User {
    skills: string[];

    addSkill(skill:string);
    addSkill(skills:string[]);
    addSkill(skillOrSkills: string | string[]){
if(typeof skillOrSkills === 'string'){
    this.skills.push(skillOrSkills)
}else this.skills.concat(skillOrSkills);
    }
}


--------- Getter or Setter ---------


how to do that when login should be user- and then login?

class User{
    _login: string;
password: string;

//first method:

getLogin(l:string){
    this.login = 'user-' + l;
}

//second method

set login(l: string){
    this._login = 'user-' + l;
}

get login(){
    return 'no-login';
}

}

const user = new User();
user.login = "myLogin"
console.log(user.login); //no-login => get can change














    
*/















