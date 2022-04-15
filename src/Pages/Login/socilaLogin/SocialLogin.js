import React from 'react';
import './SocialLogin.css'
import google from '../../../images/social-logo/google.png'
import facebook from '../../../images/social-logo/facebook.png'
import github from '../../../images/social-logo/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
	const navigate = useNavigate();
	let errorElement;

	if (error || githubError) {
		errorElement = <div>
			<p className='text-danger'>Error: {error?.message} {githubError?.message}</p>
		</div>

	}

	if (user || githubUser) {
		navigate('/home');
	}
	return (
		<div>
			<div className='first-second'>
				<div className='first-div'></div>
				<p>or</p>
				<div className='second-div'></div>
			</div>
			{errorElement}
			<div>
				<button className='btn btn-info d-block mx-auto w-50 mb-2' onClick={() => signInWithGoogle()}> <img src={google} alt="" className='logo-img' /> Google log in</button>
				<button className='btn btn-info d-block mx-auto w-50 mb-2'> <img src={facebook} alt="" className='logo-img' /> facebook log in</button>
				<button className='btn btn-info d-block mx-auto w-50 mb-2' onClick={() => signInWithGithub()}> <img src={github} alt="" className='logo-img' /> Github log in</button>
			</div>
		</div>
	);
};

export default SocialLogin;