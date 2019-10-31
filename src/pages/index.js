/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import meImage from '../img/me.jpg';

import { Layout } from '../components/common';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMobileAlt, faCode, faTools, faComments, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import Fade from 'react-reveal/Fade';

import GGFeature from '../img/gg-logo-2.png';
import BeezerFeature from '../img/beezer.png';
import NantFeature from '../img/nant-logo.jpg';
import ClickEnergyFeature from '../img/click-energy-logo.png';
import FreeCodeCampLogo from '../img/freecodecamp-logo.jpg';
import HackernoonLogo from '../img/hackernoon-logo.png';
import BelfastCityAirportFeature from '../img/belfast-city-airport-logo.png';
import ContactForm from '../components/common/ContactForm';

/**
* Main index page (home page)
*/
const Home = () => (
	<>
		{/* <MetaData /> */}
		<Layout isHome={true}>
			<div className="arlo_tm_section" id="home">
				<div className="arlo_tm_hero_header_wrap">
					<div className="arlo_tm_universal_box_wrap">
						<div className="bg_wrap">
							<div className="overlay_image hero jarallax" data-speed="0"></div>

							<div className="overlay_color hero"></div>
						</div>
						<div className="content hero">
							<div className="inner_content">
								<div className="image_wrap">
									<img src={meImage} alt="" />
								</div>
								<div className="name_holder">
									<h3>Chris <span>Blakely</span></h3>
								</div>
								<div className="text_typing">
									<p> I'm a freelance <span className="orange-text">Web & App developer</span> who helps startups and SMEs build their products and services</p>
									{/* <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
								</div>
								<div className="hero-contact-button-wrapper">
									<a href="/#contact">
										<button><span>Work with me</span></button>
									</a>
								</div>
							</div>
						</div>

						<div className="arlo_tm_arrow_wrap bounce anchor">
							<a href="#about"><i className="xcon-angle-double-down"></i></a>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- ABOUT/SKILLS --> */}
			<div className="arlo_tm_section" id="about">
				<div className="arlo_tm_skills_wrap">
					<div className="container">
						<div className="arlo_tm_title_holder">
							<h3>About Me</h3>
							<span>Main informations about me</span>
						</div>
						<div className="inner_wrap">
							<div className="leftbox">
								<div className="arlo_tm_mini_title_holder">
									{/* <h4>Some About my Abilities</h4> */}
								</div>
								{/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p> */}
								<p>
									Over the past 5 years I have built web and mobile applications that has enabled startups and SMEs to go from the idea stage to having paying customers.
								</p>
								<p>
									I know that cost and speed are critical when trying to start a business or launch a product. My approach to development ensures your products and services spend <span className="orange-text-bold">less time in development</span> and <span className="orange-text-bold">more time in the hands of your users</span>.
								</p>
								<p>
									Anyway enough about me,
									check out my services and previous work below, or get in touch and let's work together!
								</p>

								<div className="arlo_tm_about_wrap">
									<div className="buttons_wrap">
										<ul>
											<li>
												<a href="#contact"><span>Request CV</span></a>
											</li>
											<li className="anchor">
												<a href="#contact"><span>Contact</span></a>
											</li>
										</ul>
									</div>
								</div>

							</div>
							<div className="rightbox">
								<div className="progress_bar_wrap_total">
									<p>Here's my toolset - if you don't know what any of these are, don't worry - These are simply the latest in web and app development technologies. </p>

									<ul className="chip-list">
										<li className="chip">
											HTML
										</li>

										<li className="chip">
											JavaScript
										</li>

										<li className="chip">
											CSS
										</li>

										<li className="chip">
											SCSS
										</li>
										<li className="chip">
											Bootstrap
										</li>
										<li className="chip">
											Material UI
										</li>
										<li className="chip">
											jQuery
										</li>
										<li className="chip">
											React.js
										</li>
										<li className="chip">
											Redux
										</li>
										<li className="chip">
											Angular 8
										</li>
										<li className="chip">
											Vue.js
										</li>
										<li className="chip">
											Gatsby.js
										</li>
										<li className="chip">
											Node.js
										</li>
										<li className="chip">
											React Native
										</li>
										<li className="chip">
											Ionic
										</li>
										<li className="chip">
											Progressive Web Apps
										</li>
										<li className="chip">
											Babel
										</li>
										<li className="chip">
											Webpack
										</li>
										<li className="chip">
											JSON
										</li>
										<li className="chip">
											NPM/Yarn
										</li>
										<li className="chip">
											Java
										</li>
										<li className="chip">
											Spring Boot
										</li>
										<li className="chip">
											Amazon Web Services
										</li>
										<li className="chip">
											Firebase
										</li>
										<li className="chip">
											Postgres SQL
										</li>
										<li className="chip">
											MongoDB
										</li>
										<li className="chip">
											MySQL
										</li>
										<li className="chip">
											REST API's
										</li>
										<li className="chip">
											GraphQL
										</li>
										<li className="chip">
											OAuth
										</li>
										<li className="chip">
											End To End Testing
										</li>
										<li className="chip">
											Integration Testing
										</li>
										<li className="chip">
											Unit Testing
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /SKILLS --> */}

			{/* <!-- SERVICES --> */}
			<div className="arlo_tm_section" id="services">
				<div className="arlo_tm_services_wrap">
					<div className="container">
						<div className="arlo_tm_title_holder">
							<h3>Services</h3>
							<span>How I can help your business</span>
						</div>
						<div className="list_wrap">
							<ul>
								<Fade bottom>
									<li>
										<div className="inner">
											<div className="icon">
												<FontAwesomeIcon icon={faHome} size="3x" />
											</div>
											<div className="title_service">
												<h3>Web Development</h3>
											</div>
											<div className="text">
												<p>Whether it's frontend or backend development, I'm here to help with your web development needs</p>
											</div>
										</div>
									</li>
									<li>
										<div className="inner">
											<div className="icon">
												<FontAwesomeIcon icon={faMobileAlt} size="3x" />
											</div>
											<div className="title_service">
												<h3>App Development</h3>
											</div>
											<div className="text">
												<p>Everyone you meet will have a smartphone. I can help give your business a mobile presence with beautiful apps </p>
											</div>
										</div>
									</li>
									<li>
										<div className="inner">
											<div className="icon">
												<FontAwesomeIcon icon={faCode} size="3x" />
											</div>
											<div className="title_service">
												<h3>Web/Mobile Hybrid</h3>
											</div>
											<div className="text">
												<p>Need a web application and mobile app capabilities, but don't have the budget for both? Using the latest technologies, I can help </p>
											</div>
										</div>
									</li>
								</Fade>
								<Fade bottom>
									<li>
										<div className="inner">
											<div className="icon">
												<FontAwesomeIcon icon={faTools} size="3x" />
											</div>
											<div className="title_service">
												<h3>MVP's & Prototypes</h3>
											</div>
											<div className="text">
												<p>I can help bringing your idea to life with a minimal viable product (MVP) you can show users and investors</p>
											</div>
										</div>
									</li>
									<li>
										<div className="inner">
											<div className="icon">
												<FontAwesomeIcon icon={faChrome} size="3x" />
											</div>
											<div className="title_service">
												<h3>Responsive Websites</h3>
											</div>
											<div className="text">
												<p>Did you know that 57% of web traffic is from a mobile device? I can make sure your website gives mobile users the best experience</p>
											</div>
										</div>
									</li>
									<li>
										<div className="inner">
											<div className="icon">
												<FontAwesomeIcon icon={faComments} size="3x" />
											</div>
											<div className="title_service">
												<h3>Consultation</h3>
											</div>
											<div className="text">
												<p>Have an idea and don't know where to start? Need resassurance about your current codebase? Get in touch for a no strings attached consultation</p>
											</div>
										</div>
									</li>
								</Fade>

							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="arlo_tm_section" id="services">
				<div className="arlo_tm_skills_wrap">
					<div className="container">
						<div className="arlo_tm_title_holder">
							<h3>Why work with me?</h3>
							<span>Why we should work together to create your apps and services</span>
						</div>
						<div className="work_with_me_list_wrap row">
							&nbsp;
						</div>
						<Fade bottom>
							<div>
								<ul className="fa-ul">

									<li>
										<span className="icon-li"><FontAwesomeIcon icon={faCheckSquare} size="2x" /></span>
										<p>I'm not just another developer - I have a business mindset and will work with you to really understand your business goals and needs</p>
									</li>
									<li>
										<span className="icon-li"><FontAwesomeIcon icon={faCheckSquare} size="2x" /></span>
										<p>Proven experience in getting web and mobile apps from idea stage to product launch</p>
									</li>
									<li><span className="icon-li"><FontAwesomeIcon icon={faCheckSquare} size="2x" /></span>
										<p>
											Web and app development doesn't have to be confusing. I'll explain everything in simple terms so you understand exactly what's happening. No unneeded technical jargon here!
										</p>
									</li>
									<li><span className="icon-li"><FontAwesomeIcon icon={faCheckSquare} size="2x" /></span>
										<p>
											We'll be in constant communication. I will provide regular demo's and progress reports to give you peace of mind that thing's are going in the right direction
										</p>
									</li>
									<li>
										<span className="icon-li"><FontAwesomeIcon icon={faCheckSquare} size="2x" /></span>
										<p>
											Competitive rates and payment options that suits you
										</p>
									</li>

								</ul>
							</div>
						</Fade>
					</div>
				</div>
			</div>

			{/* <!-- /SERVICES --> */}

			{/* <!-- PORTFOLIO --> */}
			<div className="arlo_tm_section relative" id="portfolio">
				<div className="arlo_tm_portfolio_wrapper_all">

					{/* <!-- PORTFOLIO FILTER --> */}
					<div className="arlo_tm_second_portfolio">
						<div className="container">
							<div className="arlo_tm_portfolio_wrap">
								<div className="arlo_tm_title_holder portfolio">
									<h3>Latest Work</h3>
									<span>Check out my latest work</span>
								</div>
								<div className="arlo_tm_portfolio_titles"></div>
								<div className="main-work-grid-container">
									<div className="work-item">
										<Link to="/works/giggrafter-scheduler">
											<img src={GGFeature} alt="Giggrafter" />

										</Link>
									</div>
								</div>
								<div className="main-work-link" >
									<Link to="/works/giggrafter-scheduler">
										<button><span style={{ marginRight: `10px` }}>View details</span><i className="fa fa-arrow-right"></i></button>
									</Link>

								</div>
								<div className="arlo_tm_title_holder portfolio">
									<h3>Other Work</h3>
									<span>Here's some of the other company's I've worked with. If you would like to know more <a href="/#contact">get in touch!</a></span>
								</div>
								<div className="arlo_tm_portfolio_titles"></div>
								<div className="other-work-grid-container">
									{/* <div className="portfolio-grid-item-top-2">
											<img src={EatStreetFeature} alt="" />
										</div> */}
									<div className="other-work-item">
										<img src={BeezerFeature} alt="Beezer" />
									</div>
									<div className="other-work-item">
										<img src={NantFeature} alt="Nant Health" />
									</div>
									<div className="other-work-item">
										<img src={BelfastCityAirportFeature} alt="Belfast City Airport" />
									</div>
									<div className="other-work-item">
										<img style={{ width: `65%` }} src={ClickEnergyFeature} alt="Click Energy" />
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /PORTFOLIO FILTER --> */}

				</div>
			</div>
			{/* <!-- /PORTFOLIO --> */}

			{/* <!-- TESTIMONIALS --> */}
			<div className="arlo_tm_section" id="testimonials">
				<div className="arlo_tm_testimonials_wrapper_all">
					<div className="arlo_tm_universal_box_wrap">
						<div className="bg_wrap">
							<div className="overlay_image testimonial jarallax" data-speed="0"></div>
							<div className="overlay_color testimonial"></div>
						</div>
						<div className="content testimonial">
							<div className="arlo_tm_testimonial_wrap">
								<div className="container">
									<div className="carousel_wrap">
										<ul className="owl-carousel">
											<Fade left cascade>
												<div>
													<li className="item">
														<div className="inner">
															<div className="quotebox_wrap">
																<i className="xcon-quote-left"></i>
															</div>
															<div className="definitions_wrap">
																<p>“Chris was key in creating the GigGrafter product. He showed sound technical knowledge to design product features key to the business, as well as writing high-quality robust code across the entire technology stack.</p>
																<p> Besides being a strong developer, Chris understood our business goals and needs, suggesting changes to features to reduce development time, without compromising on quality or user experience.”</p>
															</div>
															<div className="name_holder">
																<p>Barry Lynch, Co-founder, GigGrafter</p>
															</div>

															<div>
																<Link to="/works/giggrafter-scheduler">
																	<button><span>View GigGrafter Work</span></button>
																</Link>
															</div>
														</div>
													</li>
												</div>
											</Fade>

										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /TESTIMONIALS --> */}

			{/* <!-- COUNTERBOX --> */}
			{/* <div className="arlo_tm_section">
					<div className="container">
						<div className="arlo_tm_counter_wrap" data-col="4" data-delay="300">
							<ul className="arlo_tm_counter_list arlo_tm_miniboxes">
								<li>
									<div className="inner arlo_tm_minibox">
										<h3><span><span className="arlo_tm_counter" data-from="0" data-to="2222" data-speed="3000">0</span></span></h3>
										<span>Projects Completed</span>
									</div>
								</li>
								<li>
									<div className="inner arlo_tm_minibox">
										<h3><span><span className="arlo_tm_counter" data-from="0" data-to="333" data-speed="3000">0</span>K</span></h3>
										<span>Lines of Code</span>
									</div>
								</li>
								<li>
									<div className="inner arlo_tm_minibox">
										<h3><span><span className="arlo_tm_counter" data-from="0" data-to="8888" data-speed="3000">0</span></span></h3>
										<span>Happy Clients</span>
									</div>
								</li>
								<li>
									<div className="inner arlo_tm_minibox">
										<h3><span><span className="arlo_tm_counter" data-from="0" data-to="777" data-speed="3000">0</span>+</span></h3>
										<span>My Awwwards</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div> */}
			{/* <!-- /COUNTERBOX --> */}

			{/* <!-- NEWS --> */}
			<div className="arlo_tm_section" >
				<div className="arlo_tm_news_wrap" >
					<div className="container">
						<div className="arlo_tm_title_holder news" id="news">
							<h3>Writing</h3>
							<span>Check out my writing. I've written for major tech publications such as FreeCodeCamp.org, Hackernoon and Medium</span>
						</div>
						<div className="arlo_tm_list_wrap blog_list">
							<ul className="total">
								<Fade bottom>
									<li className="wow fadeInUp" data-wow-duration="1.2s">
										<div className="inner_list">
											<div className="image_wrap">
												<img className="small" src={FreeCodeCampLogo} alt="" />
												<img className="big" src={FreeCodeCampLogo} alt="" />
												<div className="news_image" data-url="img/blog/1.jpg"></div>
												<a className="link_news" href="https://www.freecodecamp.org/news/a-walk-through-the-developer-thought-process/"></a>
											</div>
											<div className="definitions_wrap">
												<div className="title_holder">
													<h3><a href="https://www.freecodecamp.org/news/a-walk-through-the-developer-thought-process/">How Developers Think: A Walkthrough of the Planning and Design Behind a Simple Web App</a></h3>
												</div>
												<div className="definition">
													<p>Good code starts with good planning. In this article I talk about the steps to plan and design a simple web application, producing efficent more robust code</p>
												</div>
												<div className="arlo_tm_popup_share_wrap">
													<ul>
														<li><a href="#">Facebook</a></li>
														<li><a href="#">Twitter</a></li>
														<li><a href="#">Linkedin</a></li>
														<li><a href="#">Behance</a></li>
													</ul>
												</div>
												<div className="read_more">
													<a href="https://www.freecodecamp.org/news/a-walk-through-the-developer-thought-process/" target="_blank" rel="noopener noreferrer"><span>Read More</span></a>
												</div>
											</div>
										</div>
									</li>
									<li className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.2s">
										<div className="inner_list">
											<div className="image_wrap">
												<img className="small" src={FreeCodeCampLogo} alt="" />
												<img className="big" src={FreeCodeCampLogo} alt="" />
												<div className="news_image" data-url="img/blog/2.jpg"></div>
												<a className="link_news" href="https://www.freecodecamp.org/news/the-junior-developers-guide-to-writing-super-clean-and-readable-code-cd2568e08aae/"></a>
											</div>
											<div className="definitions_wrap">
												<div className="title_holder">
													<h3><a href="https://www.freecodecamp.org/news/the-junior-developers-guide-to-writing-super-clean-and-readable-code-cd2568e08aae/">The junior developer’s guide to writing super clean and readable code</a></h3>
												</div>
												<div className="definition">
													<p>It can be easier to write code that a computer can understand, and much harder to write code than other developers can understand. This article, aimed at junior developers, describes some common techniques to write clean, maintainable code</p>
												</div>
												<div className="arlo_tm_popup_share_wrap">
													<ul>
														<li><a href="#">Facebook</a></li>
														<li><a href="#">Twitter</a></li>
														<li><a href="#">Linkedin</a></li>
														<li><a href="#">Behance</a></li>
													</ul>
												</div>
												<div className="read_more">
													<a href="https://www.freecodecamp.org/news/the-junior-developers-guide-to-writing-super-clean-and-readable-code-cd2568e08aae/" target="_blank" rel="noopener noreferrer"><span>Read More</span></a>
												</div>
											</div>
										</div>
									</li>
									<li className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.4s">
										<div className="inner_list">
											<div className="image_wrap">
												<img className="small" src={HackernoonLogo} alt="" style={{
													padding: `25px`,
													marginTop: `15px`,
													paddingBottom: `0px`,
												}} />
												<img className="big" src={HackernoonLogo} alt="" />
												<div className="news_image" data-url="img/blog/3.jpg"></div>
												<a className="link_news" href="https://hackernoon.com/ace-your-first-year-as-a-junior-developer-with-this-advice-3610t3cmk"></a>
											</div>
											<div className="definitions_wrap">
												<div className="title_holder">
													<h3><a href="https://hackernoon.com/ace-your-first-year-as-a-junior-developer-with-this-advice-3610t3cmk">Ace your first year as a junior software developer with this advice</a></h3>
												</div>
												<div className="definition">
													<p> Starting a career as a software developer can be tough. There are many unknowns, things to learn and nerves to overcome. In this article I talk about some key advice junior developers can follow to make sure they have a great first year in the software development industry </p>
												</div>
												<div className="arlo_tm_popup_share_wrap">
													<ul>
														<li><a href="#">Facebook</a></li>
														<li><a href="#">Twitter</a></li>
														<li><a href="#">Linkedin</a></li>
														<li><a href="#">Behance</a></li>
													</ul>
												</div>
												<div className="read_more">
													<a href="https://hackernoon.com/ace-your-first-year-as-a-junior-developer-with-this-advice-3610t3cmk" target="_blank" rel="noopener noreferrer"><span>Read More</span></a>
												</div>
											</div>
										</div>
									</li>

								</Fade>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /NEWS --> */}

			{/* <!-- CONTACT & FOOTER --> */}
			<div className="arlo_tm_section" id="contact">
				<div className="container">
					<div className="arlo_tm_title_holder contact">
						<h3>Contact Me</h3>
						<span>Get in touch with me</span>
					</div>
				</div>
				<div className="arlo_tm_footer_contact_wrapper_all">
					<div className="arlo_tm_contact_wrap_all">
						<div className="container">
							<p style={{ marginBottom: `50px`, textAlign: `center` }}>
								If you would like to work together, have any questions, or would like to know more about how I can help your business, feel free to get in touch and I'll get straight back to you.
							</p>
							<p></p>
							<div className="leftbox">
								<div className="arlo_tm_mini_title_holder contact">
									<h4>Get in Touch</h4>
								</div>
								<div className="short_info_wrap">
									<ul>
										<li><p><label>Business Hours:</label><span>9:00am - 5:00pm (Monday - Friday) </span></p></li>
										<li><p><label>Email:</label><span><a href="mailto:hi@chrisblakely.dev">hi@chrisblakely.dev</a></span></p></li>
										<li><p><label>Phone:</label><span>+447305362095</span></p></li>
									</ul>
								</div>
							</div>
							<div className="rightbox">
								<div className="arlo_tm_contact_wrap">
									<div className="main_input_wrap">
										<ContactForm />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="arlo_tm_footer_wrap">
						<div className="container">
							<p>&copy; Copyright Blakely Web Development LTD 2019. All Rights are Reserved.</p>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /CONTACT & FOOTER --> */}
		</Layout>
	</>
);

export default Home;
