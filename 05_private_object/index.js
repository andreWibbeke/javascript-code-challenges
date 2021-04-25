// using symbols to create private variables

const user = {
  [Symbol("username")]: "andreW",
  [Symbol("password")]: "1234",
  age: 34,
};

console.log(user);
console.log(user.username);
console.log(user.password);
console.log(user.age);
