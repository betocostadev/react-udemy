import React from 'react';

import withData from '../../with-data';

const UserList = ({data}) => (
  <div className='container user-list'>
    <h1>Users List</h1>
    {data.map(user => (
      <div className='post' key={user.id}>
      <h1>{user.username}</h1>
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
      </div>
    ))}
  </div>
)

// If we were passing the dataSource inside the function, would be like:
// export default withData(UserList, 'https://jsonplaceholder.typicode.com/users');
// But we are using in the component.
export default withData(UserList);