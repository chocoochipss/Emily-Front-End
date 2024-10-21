// Rest Parameter & Spread Operator
// 1. Rest Parameter

// Tanpa Rest Parameter
const func1 = (param1, param2, param3, param4, param5) => {
  console.log(param1, param2, param3, param4, param5);
};

func1("A", "B", "C", "D", "E");

// Dengan Rest Parameter
const func2 = (...params) => {
  //...params bertipe ARRAY
  console.log(params);
};

func2("A", "B", "C", "D", "E");

// rest parameter harus berada di terakhir dalam parameter list
const func3 = (param1, param2, ...params) => {
  console.log(param1, param2);
  console.log(params);
};

// Mini exercisee
const penjumlahan = (...arr) => {
  let arr = [a, b, c, d, e];
  let hasil = 0;
  arr.forEach((item) => (hasil += item));
};
console.log(penjumlahan(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
