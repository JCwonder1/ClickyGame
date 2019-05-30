import React from "react";
import Nav from "./NavContainer";

class Main extends React.Component {
  state = {
    count: 0,
    score: 0
  };

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  handleTopScore = () => {
    // We always use the setState method to update a component's state
    this.state.score > this.state.count ? this.setState({ score: this.state.count}) : this.setState({score: this.state.score});
  };

  

  render() {
    return (
    <Nav 
        count={this.state.count}
        score={this.state.score}
    />
    )}
}

export default Main;