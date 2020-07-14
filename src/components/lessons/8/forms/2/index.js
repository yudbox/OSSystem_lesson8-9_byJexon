import React from 'react';

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: '',
      isFormSended: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit(event) {
    // change code below this line
      event.preventDefault();
      this.setState({
        submit: this.state.input,
        isFormSended: true,
        input: ''

      })

    // change code above this line
  }

  disabledTitle = () => {
    this.setState({
      isFormSended: false
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { /* change code below this line */ }
            <input onChange={this.handleChange} onFocus={this.disabledTitle} value={this.state.input} type="text"/>
          { /* change code above this line */ }
          <button type='submit'>Submit!</button>
        </form>
        { /* change code below this line */ }
        {this.state.isFormSended && 
        <h1>The value of sended text is <b>{this.state.submit}</b> </h1>}
    
        { /* change code above this line */ }
      </div>
    );
  }
};

const Task = () => {
  return (
    <div>
      <ControlledForm/>
    </div>
  );
};

export default Task;
