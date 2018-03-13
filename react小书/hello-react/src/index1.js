import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

class Title extends React.Component {
  handleClickOnTitle(args, e) {
    // 注意如果不进行绑定this，this是undefined；因为react在调用的时候是直接调用方法，
    // 而不是获取组件的this再调用
    console.log(this, args)
    // bind之后 this就是组件的this了，并且bind也能传入参数;注意当传入参数之后，event总是对应最后的参数
    console.log(e.target.innerHTML)
  }
  render() {
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this, 'hello')}>React 小书</h1>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <Title />
      </div>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <div>
        <h2>this is main</h2>
      </div>
    )
  }
}
class Footer extends React.Component {
  render() {
    return (
      <div>
        <h2>this is footer</h2>
      </div>
    )
  }
}
class Index extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <Title />
        </Header>
        <Main />
        <Footer />
      </div>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById('root'))
registerServiceWorker()
