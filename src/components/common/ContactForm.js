import React, { useState } from 'react';

const ContactForm = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [phoneNumber, setPhoneNumber] = useState();
	const [message, setMessage] = useState();
	const [showSuccess, setShowSuccess] = useState(false);
	const [showError, setShowError] = useState(false);

	const encode = data => Object.keys(data)
		.map(key => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
		.join(`&`);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(`/`, {
			method: `POST`,
			headers: { 'Content-Type': `application/x-www-form-urlencoded` },
			body: encode({ "form-name": `contact`, name, email, phoneNumber, message }),
		})
			.then((resp) => {
				if (resp.ok) {
					setShowSuccess(true);
				} else {
					setShowError(true);
				}
			})
			.catch(() => setShowError(true));
	};

	return (
		<form className="contact_form" onSubmit={handleSubmit}>
			{showSuccess && <div className="returnmessage">Thanks for your message! I will be in contact soon.</div>}
			{showError && <div className="returnmessage-error">Looks like something went wrong. Please again, if the error persists please contact me via phone or email. Sorry for any inconvenience!.</div>}
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