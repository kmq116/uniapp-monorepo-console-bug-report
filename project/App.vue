<script>
import { fn1, fn2 } from "app-handle-packet";

export default {
  onLaunch: function () {
    console.log("fn1 appvue 调用");
    fn1();

    console.log("fn2 appvue 调用");
    fn2();
  },
  onShow: function () {},
  onHide: function () {},
};
</script>

<style>
/*每个页面公共css */
</style>
