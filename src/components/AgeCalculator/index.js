// Write your code here.
import {Component} from 'react'

import './index.css'

class AgeCalculator extends Component {
  state = {data: '', age: ''}

  alp = () => {
    const dob = document.getElementById('input').value
    let errorMsg
    if (
      dob.includes(' ') ||
      parseInt(dob, 10) > 2021 ||
      dob.match(/^[A-Za-z]+$/)
    ) {
      errorMsg = 'Enter the year that you are Born'
      return this.setState({data: errorMsg, age: ''})
    }

    const realAge = 2021 - parseInt(dob, 10)
    return this.setState({data: '', age: realAge})
  }
  //  You are 23 years old by the end of 2021

  render() {
    const {data, age} = this.state
    let textToDisplay
    if (age === '') {
      textToDisplay = data
      // eslint-disable-next-line prettier/prettier
      // eslint-disable-next-line eqeqeq
    } else if (age == 1) {
      textToDisplay = `You are ${age} year old by the end of 2021`
    } else {
      textToDisplay = `You are ${age} years old by the end of 2021`
    }

    return (
      <div>
        <h1>Age Calculator</h1>
        <input
          id="input"
          type="text"
          placeholder="Enter the year that you are born"
        />
        <p>{textToDisplay}</p>
        <button onClick={this.alp}>Calculate</button>
        <img src="https://assets.ccbp.in/frontend/react-js/age-calculater-persons-img.png" />
      </div>
    )
  }
}

export default AgeCalculator
