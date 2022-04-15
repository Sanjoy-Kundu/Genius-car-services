import React from 'react';


const Footer = () => {
	const today = new Date();
	const year = today.getFullYear()


	return (
		<div>
			<p className='text-center'>copywrite {year}</p>
		</div>
	);
};

export default Footer;