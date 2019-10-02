import React from 'react';
import PropTypes from 'prop-types';

export default function PasswordVerify(props) {
	const { min, text, children } = props;

	let needUpperCase = false;
	let needLowerCase = false;
	let tooShort = false;
	let needNumber = true;
	let numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

	if (text.toLowerCase() === text) {
		needUpperCase = true;
	}

	if (text.toUpperCase() === text) {
		needLowerCase = true;
	}

	if (text.length < min) {
		tooShort = true;
	}

	numbersArray.forEach((number) => {
		if (text.includes(number)) {
			needNumber = false;
		}
	});

	console.log(needUpperCase);

	return(
		children(needUpperCase, needLowerCase, needNumber, tooShort)
	);
}

PasswordVerify.propTypes = {
	min: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired
}
