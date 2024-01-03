export * from "./dist/index";
import { fn1, fn2 } from "./dist/index";
console.log("app-handle-packet 包index.js 调用");
console.log(fn1());
console.log(fn2());