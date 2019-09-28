/* HOC - Higher Order Components
Higher Order Components give the ability to add a component the additional functionality it needs.
To put it simply, a Higher Order Component is a function that gets a component and returns us a new and enhanced component.
Some libraries like With Router, and Connect in Redux provides HOCs.
*/
import React from 'react';

import UserProfile from './components/user-profile/user-profile.component';
import UserList from './components/user-list/user-list.component';

import './App.scss';

function App() {
  return (
    <div className="App">
      <UserList dataSource='https://jsonplaceholder.typicode.com/users' />
      <UserProfile
        name='Yihua'
        email='yihuazangmaister@gmail.com'
        dataSource='https://jsonplaceholder.typicode.com/posts' />
    </div>
  );
}

export default App;
