"use strict";
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


*/
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
