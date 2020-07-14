import React from 'react';
import PropTypes from 'prop-types'

const buttons = [
  'first',
  'nano',
  'bob',
  'tomato',
];

class Index extends React.Component {
  state = {activeButtonName: ''}

  clickHandler = (name) => {
    this.setState({activeButtonName: name});
  }

  render() {
    const { activeButtonName } = this.state;
    return (
      <div>
        {buttons.map((i, index) => (
        <Button clickHandler={this.clickHandler} 
        key={index} 
        name={i}
        isActive = {this.state.activeButtonName === i}
        />))}
        <Details name={activeButtonName}/>
      </div>
    );
  }
}

class Button extends React.Component {

  clickHandler = () => {
    let name = this.props.name
    this.props.clickHandler(name)
  }

  render() {
    const { name } = this.props;
    const { isActive } = this.props;
    return (
      <button
        onClick={this.clickHandler}
        style={{color: isActive ? 'red': 'blue'}}
      >
        {name}
      </button>
    );
  }
}



function Details({ name }) {
  return <div>{name}</div>;
}


const Task = () => {
  return <Index/>;
};

export default Task;


Button.propTypes = {
  clickHandler: PropTypes.func,
  name: PropTypes.string,
  isActive: PropTypes.bool,
}