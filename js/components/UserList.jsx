import React from 'react';
import UserData from './UserData';

export default function UserList({ handleClick, users }) {
  const usersList = users.map((userData, key) => (
    <UserData user={userData} key={key} handleClick={handleClick} />
  ));

  return (
    <div className='col-sm-8'>
      <div className='usr-list'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>{usersList}</tbody>
        </table>
      </div>
    </div>
  );
}
