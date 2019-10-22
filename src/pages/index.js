/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect } from 'react'
import meImage from '../img/me.jpg'

import { Layout } from '../components/common'
import { Link } from 'gatsby';
import 'font-awesome/css/font-awesome.min.css';
import Fade from 'react-reveal/Fade';

import GGFeature from '../img/gg-logo-2.png';
import BeezerFeature from '../img/beezer.png';
import NantFeature from '../img/nant-logo.jpg';
import ClickEnergyFeature from '../img/click-energy-logo.png';
import FreeCodeCampLogo from '../img/freecodecamp-logo.jpg';
import HackernoonLogo from '../img/hackernoon-logo.png';
import BelfastCityAirportFeature from '../img/belfast-city-airport-logo.png';


/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Home = () => {
	return (
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
										<p> I'm a <span style={{ color: '#E3872D' }}>software developer</span> who helps startups and SME's build their apps, products and services</p>
									</div>
								</div>
							</div>

							<div className="arlo_tm_arrow_wrap bounce anchor">
								<a href="#about"><i className="xcon-angle-double-down"></i></a>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- ABOUT --> */}
				{/* <div className="arlo_tm_section relative" id="about">
					<div className="arlo_tm_about_wrapper_all">
						<div className="container">
							<div className="arlo_tm_title_holder">
								<h3>About Me</h3>
								<span>Main informations about me</span>
							</div>
							<div className="arlo_tm_about_wrap">
								<div className="author_wrap">
									<div className="leftbox">
										<div className="about_image_wrap parallax" data-relative-input="true">
											<div className="image layer" data-depth="0.1">
												<img src="img/about/550x640.jpg" alt="" />
												<div className="inner" data-img-url="img/about/1.jpg"></div>
											</div>
											<div className="border layer" data-depth="0.2">
												<img src="img/about/550x640.jpg" alt="" />
												<div className="inner"></div>
											</div>
										</div>

									</div>
									<div className="rightbox">
										<div className="arlo_tm_mini_title_holder">
											<h4>I'm Alan Michaelis and <span className="arlo_tm_animation_text_word"></span></h4>
										</div>
										<div className="definition">
											<p>Hi! My name is <strong>Alan Michaelis</strong>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.</p>
										</div>
										<div className="about_short_contact_wrap">
											<ul>
												<li>
													<span><label>Birthday:</label> 01.07.1990</span>
												</li>
												<li>
													<span><label>Age:</label> 28</span>
												</li>
												<li>
													<span><label>City:</label> New York, USA</span>
												</li>
												<li>
													<span><label>Interests:</label> Soccer, UFC</span>
												</li>
												<li>
													<span><label>Study:</label> Chicago University</span>
												</li>
												<li>
													<span><label>Degree:</label> Master</span>
												</li>
												<li>
													<span><label>Website:</label> <a href="#">www.mywebsite.com</a></span>
												</li>
												<li>
													<span><label>Mail:</label> <a href="mailto:example@gmail.com">mymail&#64;gmail.com</a></span>
												</li>
												<li>
													<span><label>Phone:</label> <a href="#">+77 022 177 05 05</a></span>
												</li>
												<li>
													<span><label>Twitter:</label> <a href="#">&#64;myusername</a></span>
												</li>
											</ul>
										</div>
										<div className="buttons_wrap">
											<ul>
												<li>
													<a href="index.html"><span>Download CV</span></a>
												</li>
												<li className="anchor">
													<a href="#contact"><span>Send Message</span></a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
				{/* <!-- /ABOUT --> */}

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
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
									{/* <p>Over the past 5 years I have built cloud software that has enabled startups and small businesses to go from the MVP stage to having paying customers.
									I know the importance of speed and cost when it comes to early stage business. WORKING TO BUDGETS {QUALITY}. Here's my toolset - if you don't know what any of these are, don't worry - These are simply the latest in software development technologies. Anyway enough about me,
									check out my services and previous work below, or get in touch.</p> */}
								</div>
								<div className="rightbox">
									<div className="progress_bar_wrap_total">
										{/* <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
											<div className="arlo_tm_progress" data-value="95" data-color="#000">
												<span><span className="label">Software Development - <span className="experience">5 years of experience</span></span><span className="number">95%</span></span>
												<div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap open"><div className="arlo_tm_bar" style={{ width: '95%' }}></div></div></div>
											</div>
											<div className="arlo_tm_progress" data-value="85" data-color="#000">
												<span><span className="label">Frontend Development - <span className="experience">3 years of experience</span></span><span className="number">70%</span></span>
												<div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap open"><div className="arlo_tm_bar" style={{ width: '70%' }}></div></div></div>
											</div>
											<div className="arlo_tm_progress" data-value="75" data-color="#000">
												<span><span className="label">Backend Development - <span className="experience">4 years of experience</span></span><span className="number">80%</span></span>
												<div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap open"><div className="arlo_tm_bar" style={{ width: '80%' }}></div></div></div>
											</div>
											<div className="arlo_tm_progress" data-value="90" data-color="#000">
												<span><span className="label">App Development - <span className="experience">2 years of experience</span></span><span className="number">60%</span></span>
												<div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap open"><div className="arlo_tm_bar" style={{ width: '60%' }}></div></div></div>
											</div>
										</div> */}

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
							{/* <div className="arlo_tm_about_wrap">
								<div className="buttons_wrap">
									<ul>
										<li>
											<a href="index.html"><span>Download CV</span></a>
										</li>
										<li className="anchor">
											<a href="#contact"><span>Send Message</span></a>
										</li>
									</ul>
								</div>
							</div> */}
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
													<img className="svg" src="img/svg/camera-diaphragm.svg" alt="" />
												</div>
												<div className="title_service">
													<h3>Service</h3>
												</div>
												<div className="text">
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
												</div>
											</div>
										</li>
										<li>
											<div className="inner">
												<div className="icon">
													<img className="svg" src="img/svg/new-tab.svg" alt="" />
												</div>
												<div className="title_service">
													<h3>Service</h3>
												</div>
												<div className="text">
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
												</div>
											</div>
										</li>
										<li>
											<div className="inner">
												<div className="icon">
													<img className="svg" src="img/svg/layers.svg" alt="" />
												</div>
												<div className="title_service">
													<h3>Service</h3>
												</div>
												<div className="text">
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
												</div>
											</div>
										</li>
									</Fade>
									<Fade bottom>
										<li>
											<div className="inner">
												<div className="icon">
													<img className="svg" src="img/svg/share.svg" alt="" />
												</div>
												<div className="title_service">
													<h3>Service</h3>
												</div>
												<div className="text">
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
												</div>
											</div>
										</li>
										<li>
											<div className="inner">
												<div className="icon">
													<img className="svg" src="img/svg/adobe-illustrator.svg" alt="" />
												</div>
												<div className="title_service">
													<h3>Service</h3>
												</div>
												<div className="text">
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
												</div>
											</div>
										</li>
										<li>
											<div className="inner">
												<div className="icon">
													<img className="svg" src="img/svg/adobe-illustrator.svg" alt="" />
												</div>
												<div className="title_service">
													<h3>Service</h3>
												</div>
												<div className="text">
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
												</div>
											</div>
										</li>
									</Fade>

								</ul>
							</div>
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
									<div className="main-work-grid-container" style={{ marginBottom: '70px' }}>
										<div className="work-item">
											<Link to="/works/giggrafter-scheduler">
												<img src={GGFeature} alt="Giggrafter" />
												<div className="main-work-link">
													Click for more info <i class="fa fa-arrow-right"></i>
												</div>
											</Link>
										</div>
										{/* <div className="portfolio-grid-item-top-2">
											<img src={EatStreetFeature} alt="" />
										</div> */}
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
											<img style={{ width: '65%' }} src={ClickEnergyFeature} alt="Click Energy" />
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
																	<p>“The team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for works.”</p>
																</div>
																<div className="name_holder">
																	<p>Antonio Baraley, CEO Founder</p>
																</div>
															</div>
														</li>
														<li className="item">
															<div className="inner">
																<div className="quotebox_wrap">
																	<i className="xcon-quote-left"></i>
																</div>
																<div className="definitions_wrap">
																	<p>“We were looking for a logo with a touch of modernism. The teama grasped our needs and produced a stunning design.”</p>
																</div>
																<div className="name_holder">
																	<p>Calena Gomez, AOC Designer</p>
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
													<a className="link_news" href="index.html"></a>
												</div>
												<div className="definitions_wrap">
													<div className="title_holder">
														<h3><a href="">How Developers Think: A Walkthrough of the Planning and Design Behind a Simple Web App</a></h3>
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
														<a href="https://www.freecodecamp.org/news/a-walk-through-the-developer-thought-process/" target="_blank"><span>Read More</span></a>
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
													<a className="link_news" href="index.html"></a>
												</div>
												<div className="definitions_wrap">
													<div className="title_holder">
														<h3><a href="index.html">The junior developer’s guide to writing super clean and readable code</a></h3>
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
														<a href="https://www.freecodecamp.org/news/the-junior-developers-guide-to-writing-super-clean-and-readable-code-cd2568e08aae/" target="_blank"><span>Read More</span></a>
													</div>
												</div>
											</div>
										</li>
										<li className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.4s">
											<div className="inner_list">
												<div className="image_wrap">
													<img className="small" src={HackernoonLogo} alt="" style={{
														padding: '25px',
														marginTop: '15px',
														paddingBottom: '0px',
													}} />
													<img className="big" src={HackernoonLogo} alt="" />
													<div className="news_image" data-url="img/blog/3.jpg"></div>
													<a className="link_news" href="index.html"></a>
												</div>
												<div className="definitions_wrap">
													<div className="title_holder">
														<h3><a href="index.html">Ace your first year as a junior software developer with this advice</a></h3>
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
														<a href="https://hackernoon.com/ace-your-first-year-as-a-junior-developer-with-this-advice-3610t3cmk" target="_blank"><span>Read More</span></a>
													</div>
												</div>
											</div>
										</li>

									</Fade></ul>
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
								<div className="leftbox">
									<div className="arlo_tm_mini_title_holder contact">
										<h4>Get in Touch</h4>
									</div>
									<div className="short_info_wrap">
										<ul>
											<li><p><label>Address:</label><span>123 Qwerty Avenue NYC, USA</span></p></li>
											<li><p><label>Email:</label><span><a href="mailto:hi@chrisblakely.dev">hi@chrisblakely.dev</a></span></p></li>
											<li><p><label>Phone:</label><span>+77 022 177 05 05</span></p></li>
										</ul>
									</div>
								</div>
								<div className="rightbox">
									<div className="arlo_tm_contact_wrap">
										<div className="main_input_wrap">
											<form action="/" method="post" className="contact_form" id="contact_form">
												<div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
												<div className="empty_notice"><span>Please Fill Required Fields</span></div>
												<div className="wrap">
													<input id="name" type="text" placeholder="Your Name" />
												</div>
												<div className="wrap">
													<input id="email" type="text" placeholder="Your Email" />
												</div>
												<div className="wrap">
													<textarea id="message" placeholder="Your Message"></textarea>
												</div>
												<div className="arlo_tm_button">
													<a id="send_message" href="#"><span>Send Message</span></a>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="arlo_tm_footer_wrap">
							<div className="container">
								<p>&copy; Copyright 2019. All Rights are Reserved.</p>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /CONTACT & FOOTER --> */}
			</Layout>
		</>
	)
}

export default Home
