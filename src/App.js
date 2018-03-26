import React, { Component } from 'react';
// import logo from './logo.svg';
import CityCard from "./components/CityCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Scoringarea from "./components/Scoringarea";
import cities from "./cities.json";
import './App.css';

class App extends Component {
  // Setting this.state.cities to the cities json array
  state = {
    cities,
    clickedCities:[],
    score:0,
    topscore: 0
  };

  //when you click on a city card it is taken out of the array
  imageClick = event => {
    const currentCity = event.target.alt;
    console.log(currentCity);
    const CityAlreadyClicked = this.state.clickedCities.indexOf(currentCity) > -1;
    console.log("Clicked Cities", this.state.clickedCities);

    //If city already selected is clicked, the game is reset, cards reordered, and topscore updated (if it warrants updating).
    if (CityAlreadyClicked) {
      this.setState({
        cities: this.state.cities.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCities: [],
        score: 0,
        topscore: Math.max(this.state.score,this.state.topscore)
      });
      alert("Game Over - You Lose! Start Game Again at 0");
      
    //If a city not yet clicked is clicked on, the score is increased and cards reordered
    } else {
      this.setState(
      {
          cities: this.state.cities.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCities: this.state.clickedCities.concat(currentCity), 
        score: this.state.score + 1
      },
        //If all 16 cities are correctly guessed, a winner is declared        
        () => {
          if (this.state.score === 16) {
            alert("YOU ARE A WINNER!");
            this.setState({
              cities: this.state.cities.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCities: [],
              score: 0
            });
          }
        }
        );
    } //else
  }; //imageClick

  // Map over this.state.cities and render a CityCard component for each city object
  render() {
    return (
      <Wrapper>
          <Title>World's Major Cities - Click, click, click ... Game</Title>
          <Subtitle>Click a city once, and only once, to advance; Twice resets score to 0; Max score of 16! <br></br>
            <Scoringarea topscore={this.state.topscore}>
                Top Score: {this.state.topscore}
            </Scoringarea>
            <Scoringarea score={this.state.score}>
                  Score: {this.state.score}
            </Scoringarea>
          </Subtitle>
          {/* </Wrapper>
          <Wrapper> */}
          {this.state.cities.map(cities => (
              <CityCard
                imageClick = {this.imageClick}
                id={cities.id}
                key={cities.id}
                name={cities.name}
                image={cities.image}
                // location={city.location}
              />
          ))}
      </Wrapper>
    ); //return
  } //render
} //class App

export default App;
