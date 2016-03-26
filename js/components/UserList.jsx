import React from 'react';
import UserData from './UserData';

export default function UserList(props) {
  const users = props.users.map((userData, key) => (
		<UserData user={userData} key={key} />
  ));

  return (
    <div>
			{users}
    </div>
  );
}
