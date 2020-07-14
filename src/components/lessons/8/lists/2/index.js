import React from 'react';

const friends = [
  'Mikenzi',
  'Cash',
  'Steven',
  'Kimmy',
  'Doug'
];

const ListItem = ({name}) => {
  return(
    <li>
      {name}
    </li>
  )
}


const List = () => {
  // Render a list using the "friends" being passed in.
  let generatorId = Math.floor(Math.random()*100)
  return (
    <ul>
       {friends.map(friend=> <ListItem name={friend} key={generatorId} /> )}
    </ul>
  );
};

const Task = () => {
  return (
    <div>
      <List friends={friends} />
    </div>
  );
};

export default Task;
