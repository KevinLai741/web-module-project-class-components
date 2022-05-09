import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Todos </h1>
          <ul>
            <li>Do the laundry</li>
            <li>Wash the dishes</li>
            <li>Clean room</li>
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
