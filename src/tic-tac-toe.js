import React, {Component} from 'react';
import {isGameCompleted, Players} from './game-logic'


export class TicTacToe extends Component {
  constructor() {
    super();
    this.state = {
      player: Players.P1,
      playStack:[]
    }
    this.turnCompleted = this.turnCompleted.bind(this);
  }
  turnCompleted(playInfo) {
    const newPlayStack = [...this.state.playStack, playInfo]; 
    return this.setState({
      player: this.state.player === Players.P1 ? Players.P2 : Players.P1,
      playStack: newPlayStack,
      isGameCompleted: isGameCompleted(newPlayStack, this.state.player)
    });
  }
  render(){
    return this.props.board({
      player: this.state.player,
      turnCompleted: this.turnCompleted
    });
  }
}