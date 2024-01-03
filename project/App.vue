<script>
import { fn1, fn2 } from "app-handle-packet";
export function fn3() {
  console.log("fn3", "fn3 log2");
  
}
export default {
  onLaunch: function () {
    console.log("fn1 appvue 调用");
    fn1();

    console.log("fn2 appvue 调用");
    fn2();

    console.log("fn3 调用，结果正常打印");
    fn3();
  },
  onShow: function () {},
  onHide: function () {},
};
</script>

<style>
/*每个页面公共css */
</style>
