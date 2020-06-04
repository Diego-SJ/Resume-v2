import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useToasts } from 'react-toast-notifications';

import './ContactForm.scss';

export default function ContactForm() {
	const [dataForm, setDataform] = useState(initialFormState());

	const updateDataForm = (e) => {
		setDataform({
			...dataForm,
			[e.target.name]: e.target.value,
		});
	};

	const { addToast } = useToasts();

	var service_id = 'gmail';
	var template_id = 'cv_form';
	var user_id = 'user_VWDQ4L4IXK2FhHzyVKYUn';

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.send(service_id, template_id, dataForm, user_id).then(
			(result) => {
				if (result.text === 'OK') {
					addToast('Email sent successfully', {
						appearance: 'success',
						autoDismiss: true,
						autoDismissTimeout: 2000,
					});
					setDataform(initialFormState());
				} else {
					addToast(result.text, {
						appearance: 'warning',
						autoDismiss: true,
						autoDismissTimeout: 3000,
					});
				}
			},
			(error) => {
				addToast(error.text, {
					appearance: 'error',
					autoDismiss: true,
					autoDismissTimeout: 3000,
				});
			},
		);
	};

	return (
		<>
			<form id='contactForm' className='form' onSubmit={(e) => sendEmail(e)}>
				<h1 className='secondary'>
					<span>Get In Touch</span>
				</h1>
				<div className='form__group'>
					<input
						name='sender'
						type='text'
						onChange={(e) => updateDataForm(e)}
						value={dataForm.sender}
						className='form__input'
						required
					/>
					<label htmlFor='name'>Enter your name *</label>
				</div>
				<div className='form__group'>
					<input
						name='email'
						type='email'
						onChange={(e) => updateDataForm(e)}
						value={dataForm.email}
						className='form__input'
						required
					/>
					<label htmlFor='name'>Enter your email *</label>
				</div>
				<div className='form__group'>
					<input
						name='subject'
						type='text'
						onChange={(e) => updateDataForm(e)}
						value={dataForm.subject}
						className='form__input'
						required
					/>
					<label htmlFor='subject'>Enter your subject *</label>
				</div>
				<div className='form__group'>
					<textarea
						name='message'
						onChange={(e) => updateDataForm(e)}
						value={dataForm.message}
						className='form__input-ta'
						required
					></textarea>
					<label htmlFor='message'>Enter your message *</label>
				</div>
				<div className='form__group'>
					<button type='submit' className='btn-primary'>
						Send Mail
					</button>
				</div>
			</form>
		</>
	);
}

function initialFormState() {
	return {
		sender: '',
		email: '',
		subject: '',
		message: '',
	};
}
