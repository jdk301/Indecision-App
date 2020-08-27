function square(x) {
  return x * x;
}
console.log(square(3));

// Arrow functions are anonymous
const squareArrow = (x) => {
  return x * x;
};
console.log(squareArrow(9));

// Shorthand Arrow function (Same as above)
const squareArrow2 = (x) => x * x;
console.log(squareArrow2(2));

////////////////////////////////////////////////
// Challenge- Arrow functions
// getFirstName('Mike Smith') -> "Mike"  (from es6-let-const)
// Create regularl arrow function
// Create arrow function using shorthand syntax
////////////////////////////////////////////////
const fullName = "Mike Smith";
let firstName;

const getFirstName = (firstName) => {
  return fullName.split(" ")[0];
};
console.log(getFirstName(fullName));

const getFirstName2 = (firstName) => fullName.split(" ")[0];
console.log(getFirstName2(fullName));

// CORRECT SOLUTION //
const getFirstName3 = (fullName) => {
  return fullName.split(" ")[0];
};
console.log(getFirstName3("Justin Kim"));

const getFirstName4 = (fullName) => fullName.split(" ")[0];
console.log(getFirstName4("JJ Kim"));
