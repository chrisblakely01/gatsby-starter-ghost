/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import CookieConsent from "react-cookie-consent";
import { Link } from 'react-scroll';

// Styles
import '../../styles/app.css';
import '../../styles/plugins.css';
import '../../styles/style.css';

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ isHome, data, children, bodyClass }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const site = data.allGhostSettings.edges[0].node;
	// const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
	// const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1500);
		return () => clearTimeout(timer);
	}, []);

	const MenuList = () => <ul className="anchor_nav">
		<li><a href="/" onClick={() => setIsMenuOpen(!isMenuOpen)}>Home</a></li>
		<li><a href="/#about" onClick={() => setIsMenuOpen(!isMenuOpen)}>About</a></li>
		<li><a href="/#services" onClick={() => setIsMenuOpen(!isMenuOpen)}>Services</a></li>
		<li><a href="/#why-work-with-me" onClick={() => setIsMenuOpen(!isMenuOpen)}>Why work with me?</a></li>
		<li><a href="/#portfolio" onClick={() => setIsMenuOpen(!isMenuOpen)}>Portfolio</a></li>
		<li><a href="/#testimonials" onClick={() => setIsMenuOpen(!isMenuOpen)}>Testimonials</a></li>
		<li><a href="/#news" onClick={() => setIsMenuOpen(!isMenuOpen)}>Writing</a></li>
		<li><a href="/#contact" onClick={() => setIsMenuOpen(!isMenuOpen)}>Contact</a></li>
	</ul>;

	const HomeMenuList = () => <ul className="anchor_nav">
		<li><Link to="home" spy={true} smooth={true} duration={500} onClick={() => setIsMenuOpen(!isMenuOpen)}>Home</Link></li>
		<li><Link to="about" spy={true} smooth={true} duration={500} onClick={() => setIsMenuOpen(!isMenuOpen)}>About</Link></li>
		<li><Link to="services" spy={true} smooth={true} duration={500} onClick={() => setIsMenuOpen(!isMenuOpen)}>Services</Link></li>
		<li><Link to="why-work-with-me" spy={true} smooth={true} duration={500} onClick={() => setIsMenuOpen(!isMenuOpen)}>Why work with me?</Link></li>
		<li><Link to="portfolio" spy={true} smooth={true} duration={500} onClick={() => setIsMenuOpen(!isMenuOpen)}>Portfolio</Link></li>
		<li><Link to="testimonials" spy={true} smooth={true} duration={500} onClick={() => setIsMenuOpen(!isMenuOpen)}>Testimonials</Link></li>
		<li><Link to="articles" spy={true} smooth={true} duration={500} onClick={() => setIsMenuOpen(!isMenuOpen)}>Articles</Link></li>
		<li><Link to="contact" spy={true} smooth={true} duration={500} onClick={() => setIsMenuOpen(!isMenuOpen)}>Contact</Link></li>
	</ul>;

	const CookieAcceptButton = () => <span>Accept Cookies</span>;

	return (
		<Fragment>
			<Helmet>
				<html lang={site.lang} />
				<style type="text/css">{`${site.codeinjection_styles}`}</style>
				<link href="https://fonts.googleapis.com/css?family=Montserrat|Ubuntu" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
				<body className={bodyClass} />

				<script>
					{`"use strict";
					!function() {
					var t = window.driftt = window.drift = window.driftt || [];
					if (!t.init) {
						if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
						t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
						t.factory = function(e) {
						return function() {
							var n = Array.prototype.slice.call(arguments);
							return n.unshift(e), t.push(n), t;
						};
						}, t.methods.forEach(function(e) {
						t[e] = t.factory(e);
						}), t.load = function(t) {
						var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
						o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
						var i = document.getElementsByTagName("script")[0];
						i.parentNode.insertBefore(o, i);
						};
					}
					}();
					drift.SNIPPET_VERSION = '0.3.1';
					drift.load('dahzsti48zwa');`}
				</script>
			</Helmet>

			<div className="arlo_tm_wrapper_all">

				<div id="arlo_tm_popup_blog">
					<div className="container">
						<div className="inner_popup scrollable"></div>
					</div>
					<span className="close"><a href="#"></a></span>
				</div>

				{/* <!-- PRELOADER --> */}
				{isLoading && <div className="arlo_tm_preloader">
					<div className="spinner_wrap">
						<div className="spinner"></div>
					</div>
				</div>}
				{/* <!-- /PRELOADER --> */}

				{/* <!-- MOBILE MENU --> */}
				<div className="arlo_tm_mobile_header_wrap">
					<div className="main_wrap">
						<a href="/">
							<div className="logo_wrap_mob">
								Blakely<span style={{ color: `#E3872D` }}>Web</span>Development
								{/* <a href="#"><img src={desktopLogo} alt="" /></a> */}
							</div>
						</a>
						<div className="arlo_tm_trigger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<div className="hamburger hamburger--collapse-r">
								<div className="hamburger-box">
									<div className="hamburger-inner"></div>
								</div>
							</div>
						</div>
					</div>
					<div className={`arlo_tm_mobile_menu_wrap ${isMenuOpen ? `menu-open` : ` `}`}>
						<div className="mob_menu">
							{isHome ? <HomeMenuList /> : <MenuList />}
						</div>
					</div>
				</div>
				{/* <!-- /MOBILE MENU --> */}

				{/* <!-- CONTENT --> */}
				<div className="arlo_tm_content">

					{/* <!-- LEFTPART --> */}
					<div className="arlo_tm_leftpart_wrap">
						<div className="leftpart_inner">
							<a href="/">
								<div className="logo_wrap">
									Blakely<span style={{ color: `#E3872D` }}>Web</span>Development
									{/* <a href="#"><img src={desktopLogo} alt="" /></a> */}
								</div>
							</a>
							<div className="menu_list_wrap">
								{isHome ? <HomeMenuList /> : <MenuList />}
							</div>
							<div className="leftpart_bottom">
								<div className="social_wrap">
									<ul>
										<li><a href="https://twitter.com/chrisblakely01"><i className="xcon-twitter"></i></a></li>
										<li><a href="https://www.linkedin.com/in/chrisblakely01/"><i className="xcon-linkedin"></i></a></li>
									</ul>
								</div>
							</div>

							{/* <a className="arlo_tm_resize" href="#"><i className="xcon-angle-left"></i></a> */}
						</div>
					</div>
					<div className="arlo_tm_rightpart">
						<div className="rightpart_inner">
							{/* <!-- /LEFTPART --> */}
							{/* <!-- RIGHTPART --> */}
							{children}
							{/* <!-- /RIGHTPART --> */}
						</div>
					</div>
					<a className="arlo_tm_totop" href="#"></a>

				</div>
			</div>
			<CookieConsent buttonText={<CookieAcceptButton />} buttonStyle={{ margin: `10px` }} disableButtonStyles acceptOnScroll acceptOnScrollPercentage={1}>
				This website uses cookies to enhance the user experience. By continuing to browse this site, you agree to the use of these cookies.
			</CookieConsent>
		</Fragment>
	);
};

DefaultLayout.propTypes = {
	children: PropTypes.node.isRequired,
	bodyClass: PropTypes.string,
	isHome: PropTypes.bool,
	data: PropTypes.shape({
		file: PropTypes.object,
		allGhostSettings: PropTypes.object.isRequired,
	}).isRequired,
};

const DefaultLayoutSettingsQuery = props => (
	<StaticQuery
		query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
		render={data => <DefaultLayout data={data} {...props} />}
	/>
);

export default DefaultLayoutSettingsQuery;
