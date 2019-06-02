import React from "react";
import Nav from "./components/NavContainer";
import Jumbo from "./components/Jumbotron";
import Char from "./components/characters.json";
import Col from "./components/Col";
import Cards from "./components/Cards";
import { all } from "q";

class App extends React.Component {
  state = {
    click: "Click on an Image!",
    count: 0,
    score: 0,
    char: Char,
    imageClass: ""
  };

  componentWillMount() {
    this.shuffleArray(this.state.char);
    
  }

  handleIncrement = e => {
    e.preventDefault();

    const allChar = this.state.char;

    if (!allChar[e.target.dataset.index].isClicked) {
      allChar[e.target.dataset.index].isClicked = true;

      this.setState({ char: allChar });
      this.setState({ count: this.state.count + 1, click: "Good Job" });
      this.shuffleArray(this.state.char);
    } else {
      //Set Top Score

      this.setState({imageClass: "shake"})
      this.setState({
        score:
          this.state.score < this.state.count
            ? this.state.count
            : this.state.score
      });

      //Reset Count and Change Play text
      this.setState({ count: 0, click: "TRY AGAIN!" });

      //Reset click tracking to false
      allChar.forEach(element => {
        element.isClicked = false;
      });
      
    }
    //Alert Play if they Won
    if (this.state.count >= 11) {
      this.setState({ count: 0, score: 12 });

      alert("You Won!!!");
      allChar.forEach(element => {
        element.isClicked = false;
      });
    }
  };

  shuffleArray = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({ char: array, imageClass: ""});
  };

  render() {
    return (
      <div>
        <Nav
          click={this.state.click}
          count={this.state.count}
          score={this.state.score}
        />
        <Jumbo />
        <div className="container flex">
          {this.state.char.map((char, index) => (
            <Col>
              <Cards
                key={index}
                data={index}
                id={char.id}
                divclass={this.state.imageClass}
                handleIncrement={this.handleIncrement}
              />
            </Col>
          ))}
        </div>
      </div>
    );
  }
}

export default App;


//TODO: Build a Main Component
//TODO: LOGIC : Declare and Empty Array
//TODO: Build an Array of image names
//TODO: Use the image name
