import React from 'react';
import Nav from "./components/NavContainer";
import Jumbo from "./components/Jumbotron";
import Char from "./components/characters.json";



class App extends React.Component {
  state = {
    click: "Click on an Image!",
    count: 0,
    score: 0,
    char: Char
  };

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  handleTopScore = () => {
    // We always use the setState method to update a component's state
    this.state.score > this.state.count
      ? this.setState({ score: this.state.count })
      : this.setState({ score: this.state.score });
  };

  render() {
    return (
      <div>
        <Nav click={this.state.click} count={this.state.count} score={this.state.score} />
        <Jumbo />
      </div>
    );
  }
}



export default App;


//TODO: Build a Nav Component
//TODO: Build a Header Component
//TODO: Build a Main Component
//TODO: LOGIC : Declare and Empty Array
//TODO: Build an Array of image names
//TODO: Use the image name

