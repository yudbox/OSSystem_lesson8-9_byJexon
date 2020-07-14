import React from 'react';

const User = ({username}) => {
  return(
    <li>
      {username}
    </li>
  )
}

function Users({ users, online }) {
  let generatorId = Math.floor(Math.random()*100)

  const status = online ? 'Online' : 'Offline';
  // const usersToRender = null;//change code here
  const usersItems = users.filter(user => user.online )// change code here);
  return (
    <div>
      <h1>Current {status} Users: {usersItems.length} </h1>
      <ul>
        {usersItems.map(user=> <User {...user} key={generatorId} />)}
      </ul>
    </div>
  );
};

const users = [
  {
    username: 'Jeff',
    online: true
  },
  {
    username: 'Alan',
    online: false
  },
  {
    username: 'Mary',
    online: true
  },
  {
    username: 'Jim',
    online: false
  },
  {
    username: 'Sara',
    online: true
  },
  {
    username: 'Laura',
    online: true
  }
];

const Task = () => {
  return (
    <div>
      <Users users={users} online={true} />
    </div>
  );
};

export default Task;
