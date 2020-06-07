import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

import './ContactForm.scss';

export default function ContactForm() {
	const [dataForm, setDataform] = useState(initialFormState());
	const { t } = useTranslation();

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
					<span>{t('CONTACT.FORM.getInTouch')}</span>
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
					<label htmlFor='name'>{t('CONTACT.FORM.name')} *</label>
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
					<label htmlFor='name'>{t('CONTACT.FORM.email')} *</label>
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
					<label htmlFor='subject'>{t('CONTACT.FORM.subject')} *</label>
				</div>
				<div className='form__group'>
					<textarea
						name='message'
						onChange={(e) => updateDataForm(e)}
						value={dataForm.message}
						className='form__input-ta'
						required
					></textarea>
					<label htmlFor='message'>{t('CONTACT.FORM.message')} *</label>
				</div>
				<div className='form__group'>
					<button type='submit' className='btn-primary'>
						{t('CONTACT.FORM.send')}
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
