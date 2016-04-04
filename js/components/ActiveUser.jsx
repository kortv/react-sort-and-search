import React from 'react';

export default function ({ user }) {
  const imgSrc = `images/${user.image}.svg`;
  return (
    <div className='col-sm-4'>
      <div className='act-usr'>
        <img className='img-responsive' src={imgSrc} alt={ user.image } />
        <h2>
          { user.name }
        </h2>
        <table className='table table-responsive'>
          <tbody>
            <tr>
              <td>Age:</td>
              <td>{ user.age }</td>
            </tr>
            <tr>
              <td>Favorite animal:</td>
              <td>{ user.image }</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{ user.phone }</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Favorite phrase: </strong>{ user.phrase }
        </p>
      </div>
    </div>
  );
}
