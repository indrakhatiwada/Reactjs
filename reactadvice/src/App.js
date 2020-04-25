import React from 'react';
import axios from 'axios'

import './App.css';

class App extends React.Component {

  state = {
    advice: ''
  }
  componentDidMount() {
    this.fetchAdvice()

  }
  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip
        this.setState({
          advice
        })


      })
      .catch((error) => {
        console.log(error)

      })
  }

  render() {
    const { advice } = this.state
    return (
      <div className="App">
        <div className=" card">
          <h1 className="heading">{advice}</h1>
          <br />


        </div>
        <input type="submit" value="Get advice" className="button" onClick={this.fetchAdvice} />

      </div>
    );
  }
}

export default App;
