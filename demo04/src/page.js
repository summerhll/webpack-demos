/**
 * requir.ensure(): 只是加载并不执行
 * import(): 加载并且自动执行
 * 
 * 因为是单页应用，所以只要引用入口文件即可
 */

 //方法一： import

// import(/* webpackChunkName: 'subPageA'*/ "./subPageA").then(function(subPageA) {
//   console.log(subPageA);
// });

// import(/* webpackChunkName: 'subPageB'*/ "./subPageB").then(function(subPageB) {
//   console.log(subPageB);
// });

// import(/* webpackChunkName: 'lodash'*/ "lodash").then(function(_) {
//   console.log(_.join(["1", "2"]));
// });


//方法二： require.ensure
require.include("./module.js"); // 将subPageA和subPageB共用的module.js打包在此page中

require.ensure(
  ["./subPageA.js", "./subPageB.js"],
  function () {
    var subPageA = require("./subPageA");
    var subPageB = require("./subPageB");
  },
  "subPage"
);

require.ensure(
  ["lodash"],
  function () {
    var _ = require("lodash");
    _.join(["1", "2"]);
  },
  "vendor"
);

export default "page";
