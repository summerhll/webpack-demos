 /**webpack4: 针对scss的懒加载, 需要以下代码。如果不加上下面的代码，控制台会报错，样式也不会变化 */
import "style-loader/lib/addStyles";
import "css-loader/lib/css-base";
/**************************************** */

import "./scss/base.scss";

var loaded = false;
window.addEventListener("click", function() {
  if (!loaded) {
    import(/* webpackChunkName: 'style'*/ "./scss/common.scss").then(_ => {
      console.log("Change bg-color of html");
      loaded = true;
    });
  }
});
