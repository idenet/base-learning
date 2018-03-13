function EventTarget() {
  this.handlers = {}
}

EventTarget.prototype = {
  consturctor: EventTarget,
  addHanlder: function(type, handler) {
    // 判断是否有这个类型事件的数组
    if (typeof this.handlers[type] === undefined) {
      this.handlers[type] = []
    }
    // 添加事件
    this.handlers[type].push(handler)
  },
  fire: function(event) {
    // 扩充event
    if (!event.target) {
      event.target = this
    }

    if (this.handlers[event.type] instanceof Array) {
      var handlers = this.handlers[event.type]
      for (var i = 0, len = hanlders.length; i < len; i++) {
        hanlders[i](event)
      }
    }
  },
  removeHandler: function(type, handler) {
    if (this.handlers[type] instanceof Array) {
      var handlers = this.handlers[type]
      for (var i = 0, len = hanlders.length; i < len; i++) {
        if (handlers[i] === handler) {
          break
        }
      }
      handlers.splice(i, 1)
    }
  }
}
