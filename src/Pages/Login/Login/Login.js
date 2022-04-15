import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../socilaLogin/SocialLogin';
import './Login.css'

const Login = () => {
	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	] = useSignInWithEmailAndPassword(auth);
	const emailRef = useRef(" ");
	const passwordRef = useRef(" ");
	const navigate = useNavigate();
	const location = useLocation();
	let errorElement;

	const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);



	let from = location.state?.from?.pathname || '/';




	if (user) {
		//navigate('/home')
		navigate(from, { replace: true });
	}

	if (error) {
		errorElement = <div>
			<p className='text-danger'>Error: {error?.message}</p>
		</div>

	}

	const handelSubmit = event => {
		event.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		signInWithEmailAndPassword(email, password);
	}


	const handelResetPassword = async () => {
		const email = emailRef.current.value;
		await sendPasswordResetEmail(email);
		alert('Sent email');

	}


	return (
		<div className='container w-50 mx-auto'>
			<h1 className='text-primary text-center'>Please Log in</h1>
			<Form className='mt-5' onSubmit={handelSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" ref={passwordRef} placeholder="Password" required />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit" className='mx-auto w-50 d-block'>
					Log In
				</Button>
			</Form>
			{errorElement}
			<p className='text-danger'>New to Genius Car? <Link to='/registration' className='cursor text-decoration-none' onClick={handelResetPassword} >reset password</Link></p>
			<p className='text-danger'>ForgetPassword? <Link to='/registration' className='cursor text-decoration-none' >Registration</Link></p>
			<SocialLogin> </SocialLogin>
		</div>
	);

};

export default Login;