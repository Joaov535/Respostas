function fibonacci(num) {
  let a = 0;
  let b = 1;
  let temp;
  while (b < num) {
    temp = b;
    b = a + b;
    a = temp;
  }
  return b === num;
}

const verificacao = 34;

console.log(fibonacci(verificacao));
