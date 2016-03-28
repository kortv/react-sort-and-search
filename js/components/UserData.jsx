import React from 'react';

export default function UserData({ handleClick, user }) {
  const imgSrc = `images/${user.image}.svg`;
  return (
    <tr onClick={handleClick} data-id={user.id}>
      <td data-id={user.id}><img src={imgSrc} /></td>
      <td data-id={user.id}>{ user.name }</td>
      <td data-id={user.id}>{ user.age }</td>
      <td data-id={user.id}>{ user.phone }</td>
    </tr>
  );
}
