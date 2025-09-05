function confirmEnding(stringA, stringB) {
  let difference = stringA.length - stringB.length;
  let newString = stringA.substring(difference);
  console.log(newString);
  if (stringB == newString) {
    return true;
  } else {
    return false;
  }
}

let stringOne = "I love JavaScript";
let stringTwo = "JavaScript";
console.log(confirmEnding(stringOne, stringTwo));
