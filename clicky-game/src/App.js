//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import friends from "./friends.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    friends,
    clickedFriends: [],
    score: 0
  };

//when you click on a card ... the friends is taken out of the array
  imageClick = event => {
    const currentFriends = event.target.alt;
    const FriendsAlreadyClicked =
      this.state.clickedFriends.indexOf(currentFriends) > -1;

//if you click on a friends that has already been selected, the game is reset and cards reordered
    if (FriendsAlreadyClicked) {
      this.setState({
        friends: this.state.friends.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedFriends: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available friends, your score is increased and cards reordered
    } else {
      this.setState(
        {
          friends: this.state.friends.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedFriends: this.state.clickedFriends.concat(
            currentFriends
          ),
          score: this.state.score + 1
        },
//if you get all 12 friends corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              friends: this.state.friends.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedFriends: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.friends.map(friends => (
            <FriendCard
              imageClick={this.imageClick}
              id={friends.id}
              key={friends.id}
              image={friends.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;