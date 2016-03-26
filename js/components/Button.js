import React from 'react';

const Button = ({ count, update }) => (
	<button className="btn btn-default" onClick={update}>
		Кнопка была нажата {count} раз
	</button>
);

export default Button;
