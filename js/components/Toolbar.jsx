import React from 'react';

export default function ({ sortNames }) {
  return (
    <div>
      <button className="btn btn-default" data-kind="name" onClick={sortNames}>Sort by name</button>
      <button className="btn btn-default" data-kind="age"onClick={sortNames}>Sort by age</button>
    </div>
  );
}
