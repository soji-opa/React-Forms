import React from 'react';

export default function App() {
	const [formData, setFormData] = React.useState({
		email: '',
		password: '',
		newPassword: '',
		isJoin: '',
	});
	/**
	 * Challenge: Connect the form to local state
	 *
	 * 1. Create a state object to store the 4 values we need to save.
	 * 2. Create a single handleChange function that can
	 *    manage the state of all the inputs and set it up
	 *    correctly
	 * 3. When the user clicks "Sign up", check if the
	 *    password & confirmation match each other. If
	 *    so, log "Successfully signed up" to the console.
	 *    If not, log "passwords to not match" to the console.
	 * 4. Also when submitting the form, if the person checked
	 *    the "newsletter" checkbox, log "Thanks for signing
	 *    up for our newsletter!" to the console.
	 */
	function handleChange(event) {
		const { type, value, name, checked } = event.target;
		setFormData((prevState) => {
			return {
				...prevState,
				[name]: type === 'checkbox' ? checked : value,
			};
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (formData.password != formData.newPassword) {
			console.log('passwords do not match');
		}

		if (formData.isJoin === true) {
			console.log('Thanks for signin up for our newsletter!');
		} else {
			console.log('Hit the newsletter checkbox, you nub head');
		}
		console.log(formData);
	}

	return (
		<div className='form-container'>
			<form className='form' onSubmit={handleSubmit}>
				<input
					type='email'
					placeholder='Email address'
					className='form--input'
					value={formData.email}
					name='email'
					onChange={handleChange}
				/>
				<input
					type='password'
					placeholder='Password'
					className='form--input'
					value={formData.password}
					name='password'
					onChange={handleChange}
				/>
				<input
					type='password'
					placeholder='Confirm password'
					className='form--input'
					value={formData.newPassword}
					name='newPassword'
					onChange={handleChange}
				/>

				<div className='form--marketing'>
					<input
						id='okayToEmail'
						type='checkbox'
						checked={formData.isJoin}
						name='isJoin'
						onChange={handleChange}
					/>
					<label htmlFor='okayToEmail'>I want to join the newsletter</label>
				</div>
				<button className='form--submit'>Sign up</button>
			</form>
		</div>
	);
}
