import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

const lessons = [
  { title: 'Lesson 1: title', description: 'Lesson 1: description' },
  { title: 'Lesson 2: title', description: 'Lesson 2: description' },
  { title: 'Lesson 3: title', description: 'Lesson 3: description' },
  { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]
class Lesson extends React.Component {
  /* TODO */
  clickLesson(lesson) {
    console.log(`${lesson.index}-${lesson.title}`)
  }

  render() {
    const { lesson } = this.props
    return (
      <div onClick={this.clickLesson.bind(this, lesson)}>
        <h1>{lesson.title}</h1>
        <p>{lesson.description}</p>
      </div>
    )
  }
}

class LessonsList extends React.Component {
  /* TODO */
  render() {
    return (
      <div>
        {lessons.map((lesson, index) => (
          <Lesson lesson={{ index, ...lesson }} key={index} />
        ))}
      </div>
    )
  }
}
ReactDOM.render(<LessonsList />, document.getElementById('root'))
registerServiceWorker()
