/**
 * 惰性函数
 * @param {*} elem
 * @param {*} type
 * @param {*} handle
 */
var addEvent = function(elem, type, handle) {
  if (window.addEventListener) {
    addEvent = function(elem, type, handle) {
      elem.addEventListener(type, handle, false)
    }
  } else if (window.attacheEvent) {
    addEvent = function(elem, type, handle) {
      elem.attacheEvent(`on${type}`, handle)
    }
  } else {
    addEvent = function(elem, type, handle) {
      elem['on' + type] = handle
    }
  }
  // 修改后调用
  addEvent(elem, type, handle)
}
/**
 * 通过柯里化实现
 */
var addEvent = (function() {
  if (window.addEventListener) {
    return function(el, type, fn) {
      el.addEventListener(
        type,
        function(e) {
          fn.call(el, e)
        },
        false
      )
    }
  }
})()

var myId = document.getElementById('nodo')
addEvent(myId, 'click', function() {
  console.log(1)
})
console.log(addEvent.toString())
addEvent(myId, 'click', function() {
  console.log(2)
})
console.log(addEvent.toString())
