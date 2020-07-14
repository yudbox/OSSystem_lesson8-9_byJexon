import React from 'react';
import { debounce } from 'lodash'
//import debounce from 'lodash/debounce';

class WindowSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {height: '', width: ''};

  }

  componentDidMount() {
    this.storeWindowSize(this.getWindowSize());
    /* change code below this line */
    window.addEventListener('resize', this.onResize);
    /* change code above this line */
  }

  componentWillUnmount() {
    /* change code below this line */
    window.removeEventListener('resize', this.onResize);
    /* change code above this line */
  }

  getWindowSize() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    return { height, width };
  }

  storeWindowSize({ height, width }) {
    this.setState({height, width});
  }



  onResize = debounce(() => {
    this.storeWindowSize(this.getWindowSize());
    console.log('onResize')
  }, 1000)


  render() {
    const { height, width } = this.state;
    return <div>
      <h2>Window size</h2>
      <div>Window height: {height} px, window width: {width} px</div>
      <br/>
      <textarea/>
    </div>
  }
}

const Task = () => {
  return (
    <div className="task" >
      <WindowSize/>
    </div>
  );
};

export default Task;
