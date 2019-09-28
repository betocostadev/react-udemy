import React from 'react';
import withData from '../../with-data';

const UserProfile = ({ data, name, email }) => (
  <div className='container'>
    <h1>{name}</h1>
    <h2>{email}</h2>
    <p>Posts:</p>
    {data.map(post => (
      <div className='post' key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>))
    }
  </div>
)

// Wrap the UserProfile component in the WithData as below:
export default withData(UserProfile);