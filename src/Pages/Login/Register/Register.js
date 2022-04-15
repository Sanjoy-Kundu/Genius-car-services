import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import auth from '../../../firebase.init'
import SocialLogin from '../socilaLogin/SocialLogin';

const Register = () => {
	const navigate = useNavigate();
	//email handeling
	const [
		createUserWithEmailAndPassword,
		user,
		loading,
		error,
	] = useCreateUserWithEmailAndPassword(auth);
	const [agree, setAgree] = useState(false);

	if (user) {
		navigate('/home')
	}

	const handelRegister = event => {
		event.preventDefault();
		const name = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;
		const confirmpassword = event.target.confirmpassword.value;
		/* 	const agree = event.target.terms.checked; */
		//console.log(name, email, password, confirmpassword);

		if (agree) {
			createUserWithEmailAndPassword(email, password);
		}

	}


	return (
		<div className='container w-50 mx-auto'>
			<h1 className='text-primary'>Please Regiestration</h1>
			<form className='w-100' onSubmit={handelRegister}>
				<input type="text" name="name" id="" placeholder='Enter Your Name' /> <br />
				<input type="email" name="email" placeholder='Enter Your Email' id="" /> <br />
				<input type="password" name="password" placeholder='Enter Your Password' id="" />
				<input type="password" name="confirmpassword" placeholder='Confirm Password' id="" />
				<br />
				<input onClick={() => setAgree(!agree)} type="checkbox" name='terms' id='terms' />
				<label className={agree ? 'text-danger' : 'text-black'} htmlFor="terms" >Accepts terms and condition</label> <br />
				<input
					disabled={!agree}
					type="submit" value='Register' className='btn btn-primary  mx-auto mt-2' />
			</form>
			<p className='text-primary'>Already have an account ? <Link to='/login' className='text-danger text-decoration-none'>Log in</Link></p>
		</div>
	);
};

export default Register;