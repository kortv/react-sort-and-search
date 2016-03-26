import React from 'react';

export default function UserData(props) {
  return (
    <div className="row">
      <div className="col-xs-2">{props.user.image}</div>
      <div className="col-xs-4">{props.user.name}</div>
      <div className="col-xs-2">{props.user.age}</div>
      <div className="col-xs-4">{props.user.phone}</div>
    </div>
  );
}
