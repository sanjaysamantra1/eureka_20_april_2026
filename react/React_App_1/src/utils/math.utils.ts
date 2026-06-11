export default function add(a: number, b: number) {
  return a + b;
}
export function sub(a: number, b: number) {
  return a - b;
}
export function mul(a: number, b: number) {
  return a * b;
}

export function sumOfDigits(num: number) {
  let sum = 0;
  let rem;
  while (num != 0) {
    rem = num % 10;
    sum = sum + rem;
    num = Math.floor(num / 10);
  }
  return sum;
}
