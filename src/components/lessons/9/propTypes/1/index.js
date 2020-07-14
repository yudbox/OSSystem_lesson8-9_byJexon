import React from 'react';
import blogPosts from './blogPosts.json';
import PropTypes from 'prop-types';

const Author = ({ username, name }) => (
  <div className="author" >
    <div>username: {username}</div>
    <div>name: {name}</div>
  </div>
);

const Comment = ({ author, comment }) => (
  <li className="comment" >
    <div><Author {...author} /></div>
    <p>{comment}</p>
  </li>
);

const Comments = ({ comments }) => (
  <ul>
    {comments.map(i => (<Comment {...i} key={i.id} />))}
  </ul>
);


const BlogPosts = ({ posts }) => {
  return (
    <React.Fragment>
      {posts.map(({ id, author, body, comments }) => (
        <section key={id} >
          <Author {...author} />
          <p>{body}</p>
          <Comments comments={comments} />
        </section>
      ))}
    </React.Fragment>
  );
};

const Task = () => {
  return (
    <div>
      <BlogPosts posts={blogPosts} />
    </div>
  );
};

export default Task;

BlogPosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.object.isRequired,
      body: PropTypes.string,
      comments: PropTypes.arrayOf(PropTypes.object)
    })
  ).isRequired
};

Author.propTypes = {
  username: PropTypes.string,
  name: PropTypes.oneOf(['User 1', 'User 2', 'User 3']),
}

Comments.propTypes = {
  coments: PropTypes.array
}

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    author: PropTypes.exact({
      username: PropTypes.string,
      name: PropTypes.string
    }),   
    comment: PropTypes.string,
}

Comment.defaultProps = {
  comment:'11111111111111HeyHeyHey2222222Yoyyoyoyoy'
}