import "bootstrap"
import "bootstrap/scss/bootstrap.scss"
import './App.css';
import React from 'react';
import Form from './Components/Form/Form.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    }
  }

  render() {
    return (
      <div className="container">
       <Form />
      </div>
    );
  }
}
export default App;