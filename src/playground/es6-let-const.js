var nameVar = "Justin";
var nameVar = "Mike";
console.log("nameVar", nameVar);

//You can reassign 'let' but CANNOT redefine
let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// let & const are function-scoped && block-scoped
// function getPetName() {
//   let petName = "Hal";
//   return petName;
// }

// let petName = getPetName();
// console.log(petName);

// Block scoping
const fullName = "Justin Kim";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);

// Throughout this course we will use 'const' first then 'let' if we need to. Never 'var'

// Only use 'let' when you plan on REASSIGNING that variable
