import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
	console.log(service);
	const { id, name, img, description, price } = service;
	const navigate = useNavigate()

	//service button 
	const handelNavigateToServiceDetail = id => {
		navigate(`service/${id}`);
	}
	return (
		<div className='col-sm-12 col-md-2 col-lg-4 col-12 gx-5 gy-5'>
			<div class="card" style={{ width: "18rem" }}>
				<img src={img} alt="..." />
				<div class="card-body">
					<h5 class="card-title">{name}</h5>
					<h4 class="card-title">{price}</h4>
					<p className='card-title'>{description}</p>
					<button className='btn btn-primary' onClick={() => handelNavigateToServiceDetail(id)}>Go to some where</button>
				</div>
			</div>


		</div >
	);
};

export default Service;