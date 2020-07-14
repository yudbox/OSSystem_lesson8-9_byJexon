import React from 'react';

class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emailRef = React.createRef();
    this.agreeRef = React.createRef();
    this.state = {
      email: '',
      checkbox: false
  
    }

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { emailRef, agreeRef } = this;
    const email = emailRef.current.value;
    const agreeCheckbox = agreeRef.current.checked;

    if (!email) {
      alert(`entry valid email first, please`);
    }

    if (agreeCheckbox) {
      alert(`email: ${email}`);
    } else {
      alert(`agree, please`);
    }
  };

  onInputChange = (e) => {
    const email = e.target.value;
    this.setState({
      email
    })
  }

  onCheckboxChange = (e) => {
    const checkbox = e.target.checked;
    this.setState({
      checkbox
    })

  }

  render() {
    const { emailRef, agreeRef } = this;
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.onInputChange} value={this.state.email} type="email" ref={emailRef} />
        <input onClick={this.onCheckboxChange} checked={this.state.checkbox}  type="checkbox" ref={agreeRef} />
      </form>
    );
  }
}

class ControlledForm extends React.Component {
  // your code is here
  render() {
    return null;
  }
}

const Task = () => {
  return (
    <div>
      <UncontrolledForm/>
      <ControlledForm/>
    </div>
  );
};

export default Task;
