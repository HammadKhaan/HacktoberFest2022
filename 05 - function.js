const arrowFunc = () => {
  console.log("Arrow function");
};

function normalFunction() {
  console.log("Normal Function")
}

function concatStrings(str1, str2) {
  return str1.toString() + str2.toString();
}

arrowFunc();
normalFunction();

const sum = (a, b = 10) => {
  return a + b;
};

console.log(sum(10));
console.log(sum(10, 20));
console.log(concatStrings('Hello','World'));
console.log(concatStrings('Hello',1));
console.log(concatStrings(2,1));
