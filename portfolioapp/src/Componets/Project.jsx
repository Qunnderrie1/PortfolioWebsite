import React from 'react'
import '../App.css'
import Shinetime561 from '../Images/MobileDetailing.PNG'
import weatherapp from '../Images/weatherapp.PNG'
import tictactoe from '../Images/tictactoe.PNG'

const Project = () => {
  return (
    <div  id='project' className='projectContainer container-fluid'>
        <hr />
      <h2 className='headerText'>&#x3D;&gt; Project</h2>

    <div className="projects-list">

    <div className="card">
      <div className="card-body">
        <div className="card-img">
          <img src={Shinetime561}  />
        </div>
        <div className="card-title">
          <h4>ShineTime561</h4>
        </div>
        <div className="card-description">
        <p>ShineTime561 is a mobile detailing website that provide customers the ability to book 
            appointments for services.</p>
            <a href='https://qunnderrie1.github.io/ShineTime561-Web/' className='btn projectBtn'>View</a>
        </div>
      </div>
      </div>

      <div className="card">
      <div className="card-body">
        <div className="card-img">
          <img src={weatherapp} />
        </div>
        <div className="card-bottom">
        <div className="card-title">
          <h4>Weather App</h4>
        </div>
        <div className="card-description">
        <p>Display weather information that the user has entered.</p>
          <a href='https://qunnderrie1.github.io/WeatherApp-Project-/' className='btn projectBtn'>View</a>
        </div>
        </div>
      </div>
      </div>

      <div className="card">
      <div className="card-body">
        <div className="card-img">
          <img src={tictactoe} />
        </div>
        <div className="card-title">
          <h4>Tic-Tac-Toe</h4>
        </div>
        <div className="card-description">
        <p>Tic Tac Toe is a web game app that allows players to play against either other locally. 
            First player to get X in a row or O in a row wins the game.</p>
            <a href='https://qunnderrie1.github.io/TicTacToe/' className='btn projectBtn '>View</a>
        </div>
      </div>
      </div>


    </div>
      

    </div>
  )
}

export default Project;