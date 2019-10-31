import React, { useState } from 'react';

const ContactForm = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [phoneNumber, setPhoneNumber] = useState();
	const [message, setMessage] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		fetch(`/`, {
			method: `POST`,
			headers: { 'Content-Type': `application/x-www-form-urlencoded` },
			body: {
				'form-name': form.getAttribute(`name`),
				name,
				email,
				phoneNumber,
				message,
			},
		})
			.then(console.log(`success`))
			.catch(error => alert(error));
	};

	return (
		<form method="post" className="contact_form" id="contact_form"
			name="contact"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			onSubmit={handleSubmit}
		>
			<input type="hidden" name="form-name" value="contact" />
			<div className="wrap">
				<input id="name" type="text" placeholder="Your Name*" required onChange={e => setName(e.target.value)} />
			</div>
			<div className="wrap">
				<input id="email" type="text" placeholder="Your Email*" required onChange={e => setEmail(e.target.value)} />
			</div>
			<div className="wrap">
				<input id="phone" type="text" placeholder="Your Phone Number*" required onChange={e => setPhoneNumber(e.target.value)} />
			</div>
			<div className="wrap">
				<textarea id="message" placeholder="Your Message*" required onChange={e => setMessage(e.target.value)}></textarea>
			</div>
			<div className="arlo_tm_button">
				<button type="submit"><span>Send Message</span></button>
			</div>
		</form>
	);
};

export default ContactForm;