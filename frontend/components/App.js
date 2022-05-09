import React from 'react'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: true
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1> Todos </h1>
          <ul>
            { 
              todos.map(todo => {
                return (<li>{todo.task} { todo.completed ? <span> - completed - </span> : <span> - incomplete - </span> }</li>)
              })
            }
          </ul>

          <form>
            <input/>
            <button> Add </button>
          </form>

          <button> Clear </button>
      </div>
    )
  }
}
