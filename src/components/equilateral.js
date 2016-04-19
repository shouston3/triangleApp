import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Equilateral extends Component {
  render () {
    return (
      <div>
        <h1>Equilateral page</h1>
        <Link to='/'><h3>Back to Home</h3></Link>
        <div className='triangleContainer'>
          <img src='../../assets/equilateralTriangle.png' style={{ margin: '3% 5%' }}/>
        </div>
      </div>
    )
  }
}
