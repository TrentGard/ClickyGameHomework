import React, { Component } from 'react';
import Header from './components/Header';
import cards from './cards.json';
import Body from './components/Body';

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    message: "Click An Image To Begin!",
    cards: cards
  };

  gameOver() {
    const resetCards = this.state.cards.map(card => {
      return {
        ...card,
        clicked: false
      }
    })
    this.setState({
      score: 0,
      message: "Game Over!",
      cards: this.shuffle(resetCards)
    })
  };

  handleClick (id) {
    console.log(id);
    const cards = this.state.cards;
    const clone = [...cards];
    let didLose = false;
    clone.forEach(card => {
      if (card.id === id) {
        if (card.clicked) {
          didLose = true;
        }
        else {
          card.clicked = true;
          const newScore = this.state.score + 1;
          let topScore = this.state.topScore;
          if (newScore > topScore) {
            topScore = newScore;
          }
          this.setState({
            score: newScore,
            topScore: topScore,
          })
        }
      }
    });

    if (didLose) {
      this.gameOver();
    }
    else {
      this.setState({
        cards: this.shuffle(clone)
      })
    }
  };

  shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      const temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  render() {
    return (
      <div className="App">
        <Header
          headerMessage={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Body
          handleClick={id => this.handleClick(id)}
          cards={this.state.cards}
        />
      </div>
    );
  }
}

export default App;
