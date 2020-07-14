import React from 'react';
import PropTypes from 'prop-types'


class VoteComponent extends React.PureComponent {

  style = {
    padding: '8px',
    marginTop: '16px',
    border: 'solid 1px grey',
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (this.state.votesNumber !== prevState.votesNumber) {
  //     this.props.onVote(this.state.votesNumber);
  //   }
  // }

  increase = () => {
    this.props.onIncrease();
  }

  decrease = () => {
    this.props.onDecrease();
  }

  render() {
    const { resolution, terminalNumber } = this.props;
    return (
      <div style={this.style} >
        <h6>Terminal number: {terminalNumber}</h6>
        <h3>Resolution: "{resolution}"</h3>
        <button onClick={this.decrease}>No</button>
        <button onClick={this.increase}>Yes</button>
      </div>
    );
  }
}

const VotingDisplay = ({ resolution, result }) => {
  return (
    <React.Fragment>
      <h1>Resolution: {resolution}</h1>
      <h2>Result: {result}</h2>
    </React.Fragment>
  );
}






class VotingSystem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      votesNumber: 0,
    };
  }

  onVote = (votesNumber) => {
    this.setState({votesNumber});
  }

  onIncrease = () => {
    this.setState({
      votesNumber: this.state.votesNumber + 1
    });
  }

  onDecrease = () => {
    this.setState({
      votesNumber: this.state.votesNumber - 1
    });
  }

  render() {
    const { resolution } = this.props;
    const { votesNumber } = this.state;
    return (
      <React.Fragment>
        <VotingDisplay resolution={resolution} result={votesNumber} />

        <VoteComponent resolution={resolution}
                       onIncrease={this.onIncrease} 
                       onDecrease={this.onDecrease}  
                       terminalNumber={1} />

        <VoteComponent resolution={resolution} 
                       onIncrease={this.onIncrease} 
                       onDecrease={this.onDecrease}
                       terminalNumber={2} />

        <VoteComponent resolution={resolution}
                       onIncrease={this.onIncrease} 
                       onDecrease={this.onDecrease}
                       terminalNumber={3} />
      </React.Fragment>
    );
  }
}

const resolution = 'Free beer to all programmers';

const Task = () => {
  return (
    <div>
      <VotingSystem resolution={resolution} />
    </div>
  );
};

export default Task;


VotingSystem.propTypes = {
  resolution: PropTypes.string
}

VoteComponent.propTypes = {
  resolution: PropTypes.string,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
  terminalNumber: PropTypes.number
}

VotingDisplay.propTypes = {
  result: PropTypes.number
}
