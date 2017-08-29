import React, {Component} from 'react';

export default class DrawSign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      player: undefined
    }
    this.turnPlayed = this.turnPlayed.bind(this);
  }
  componentDidUpdate(){
    //console.log(`${this.props.index} updated`)
  }
  shouldComponentUpdate(nextProps, nextState){
    if(this.state.done && this.state.player) return false;
    if(!nextState.done) return false;
    return true;
  }
  turnPlayed() {
    if(this.state.done){
      return;
    }
    const { player, index} = this.props
    this.setState({done: true, player});
    this.props.turnCompleted({
      player,
      index
    });
  }
  render() {
    const {player} = this.props;
    return <div onClick={this.turnPlayed}>
    {this.state.done? this.state.player: 'Click here'}</div>
  }
}