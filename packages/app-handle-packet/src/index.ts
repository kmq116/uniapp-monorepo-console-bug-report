export function fn1() {
  console.log("fn1 log1", "fn1 log2");
}
export function fn2() {
  console.log("fn2 log1", "fn2 log2");
}

console.log("app-handle-packet 包内部调用");
console.log(fn1());
console.log(fn2());
