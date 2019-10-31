import React from 'react';

const ContactForm = () => (
	<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
		<input type="hidden" name="form-name" value="contact" />
		<div className="wrap">
			<input id="name" type="text" placeholder="Your Name*" required />
		</div>
		<div className="wrap">
			<input id="email" type="text" placeholder="Your Email*" required />
		</div>
		<div className="wrap">
			<input id="phone" type="text" placeholder="Your Phone Number*" required />
		</div>
		<div className="wrap">
			<textarea id="message" placeholder="Your Message*" required></textarea>
		</div>
		<div className="arlo_tm_button">
			<button type="submit"><span>Send Message</span></button>
		</div>
	</form>
);

export default ContactForm;