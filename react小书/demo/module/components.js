class Component {
  constructor(props = {}) {
    this.props = props
  }
  setState(state) {
    const oldEl = this.el
    this.state = state
    this._renderDOM()
    this.onStateChange && this.onStateChange(oldEl, this.el)
  }
  _renderDOM() {
    this.el = createDomFromString(this.render())
    this.onClick &&
      this.el.addEventListener('click', this.onClick.bind(this), false)
    return this.el
  }
}
const mount = (component, wrapper) => {
  wrapper.appendChild(component._renderDOM())
  component.onStateChange = (oldEl, newEl) => {
    wrapper.insertBefore(newEl, oldEl)
    wrapper.removeChild(oldEl)
  }
}
