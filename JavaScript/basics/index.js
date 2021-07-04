let sum = 0;

for (let i = 0; i < 1000; i++) {
  sum += i;
}

let integer = 0;
let remainder = 0;

integer = Math.trunc(sum / 1234);
remainder = sum % 1234;

console.log(integer > remainder);
