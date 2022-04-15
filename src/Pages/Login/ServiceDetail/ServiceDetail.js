import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
	return (

		<div>
			<h1>This is service details</h1>
			<div>
				<Link to='/checkout' className='btn btn-primary'>Checkout</Link>
			</div>
		</div>
	);
};

export default ServiceDetail;