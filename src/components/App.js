import React from 'react';
import './App.css';
import Form from './Form.js';
import Quiz from './Quiz'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectValue: 1,
      questions: [],
    }
  }

  handleSelectForm = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState = {
      selectValue: e.target.value,
    };
  }

  randomGenerator = (questions, classChoice) => {
    if (classChoice === "ti2") {
      this.setState({
        questions: questions.ti2,
      })
    }
    else if (classChoice === "ti3") {
      this.setState({
        questions: questions.ti3,
      })
    }
    else if (classChoice === "ti4") {
      this.setState({
        questions: questions.ti4,
      })
    }
  }

  handleButtonClick = () => {
    fetch("db/db.json")
    .then(response => response.json())
    .then(data => {
      this.setState({questions: data});
    })
    .catch(error => console.log(error));

    this.randomGenerator(this.state.questions, this.state.selectValue);
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="main-title">Generator pytań testowych z informatyki</h1>
        <Form handleSelectForm={this.handleSelectForm} selectValue={this.state.selectValue} handleButtonClick={this.handleButtonClick}/>
      </div>
    )
  }
}

export default App;
