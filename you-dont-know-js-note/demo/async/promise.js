if (!Promise.map) {
  Promise.map = function (vals, cb) {
    // 一个等待所有被映射的promise的新promise
    return Promise.all(
    // 注意：普通的数组`map(..)`， 将值的数组变为promise的数组
    vals.map(function (val) {
      // 将`val`替换为一个在`val` 异步映射完成后才解析的新promise
      return new Promise(function (resolve) {
        cb(val, resolve);
      });
    }));
  };
}
var p1 = Promise.resolve(21);
var p2 = Promise.resolve(42);
var p3 = Promise.reject("Oops");

// 将列表中的值翻倍，即便它们在Promise中
Promise.map([
  p1, p2, p3
], function (pr, done) {
  // 确保列表中每一个值都是Promise
  Promise
    .resolve(pr)
    .then(
    // 将值作为`v`抽取出来
    function (v) {
      // 将完成的`v`映射到新的值
      done(v * 2);
    },
    // 或者，映射到promise的拒绝消息上
    done);
})
  .then(function (vals) {
    console.log(vals); // [42,84,"Oops"]
  });