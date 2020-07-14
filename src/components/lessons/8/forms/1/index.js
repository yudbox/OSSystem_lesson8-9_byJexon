import React, { Component } from 'react';

function sendEmail(name, mail, message) {
  const params = { name, mail, message };
  let alertText = 'Email sending request in process.\nEmail params:\n';
  alertText += Object.keys(params).map(i => `${i}: ${params[i]}`).join('\n');
  alert(alertText);
}

class UncontrolledForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameRef = React.createRef();
    this.mailRef = React.createRef();
    this.messageRef = React.createRef();
    // change code below this line
      this.state={
        name:'',
        mail:'',
        message:''
      }
    // change code above this line
  }

  setInputData = (e) => {
    let fieldName = e.currentTarget.id
    switch(fieldName) {
      case 'name':
        this.setState({
          name:this.nameRef.current.value
        })
        break;
      case 'mail':
        this.setState({
          mail:this.mailRef.current.value
        })
        break;
      case 'message':
        this.setState({
          message:this.messageRef.current.value
        })
        break;

        default:
          break;
    }



  }

  handleSubmit = (e) => {

    // change code below this line

    
    let name = this.state.name
    let mail = this.state.mail
    let message = this.state.message

    sendEmail(name, mail, message);

    // change code above this line
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* change code below this line */}
        <div>
          <label htmlFor="name">Name:</label>
          <input onBlur={this.setInputData} ref={this.nameRef} type="text" id="name" name="user_name" />
        </div>
        <div>
          <label htmlFor="mail">E-mail:</label>
          <input onBlur={this.setInputData}  ref={this.mailRef} type="email" id="mail" name="user_mail" />
        </div>
        <div>
          <label htmlFor="msg">Message:</label>
          <textarea onBlur={this.setInputData}  ref={this.messageRef}  id="message" name="user_message"></textarea>
        </div>
        <button type='submit'>Submit!</button>
        {/* change code above this line */}
      </form>
    );
  }
}

const Task = () => {
  return (
    <div>
      <UncontrolledForm />
    </div>
  );
};

export default Task;
