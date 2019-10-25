/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// Styles
import '../../styles/app.css'
import '../../styles/plugins.css'
import '../../styles/style.css'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass }) => {

	const [isLoading, setIsLoading] = useState(true);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const site = data.allGhostSettings.edges[0].node
	// const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
	// const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1500);
		return () => clearTimeout(timer);
	}, []);

	const MenuList = () =>
		<ul className="anchor_nav">
			<li><a href="/">Home</a></li>
			<li><a href="/#about">About</a></li>
			<li><a href="/#services">Services</a></li>
			<li><a href="/#portfolio">Portfolio</a></li>
			<li><a href="/#testimonials">Testimonials</a></li>
			<li><a href="/#news">Writing</a></li>
			<li><a href="/#contact">Contact</a></li>
		</ul>

	return (
		<Fragment>
			<Helmet>
				<html lang={site.lang} />
				<style type="text/css">{`${site.codeinjection_styles}`}</style>
				<link href="https://fonts.googleapis.com/css?family=Montserrat|Ubuntu" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
				<body className={bodyClass} />
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
								Chris<span style={{ color: '#E3872D' }}>Blakely</span>.dev
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
					<div className={`arlo_tm_mobile_menu_wrap ${isMenuOpen ? 'menu-open' : ' '}`}>
						<div className="mob_menu">
							<MenuList />
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
									Chris<span style={{ color: '#E3872D' }}>Blakely</span>.dev
								{/* <a href="#"><img src={desktopLogo} alt="" /></a> */}
								</div>
							</a>
							<div className="menu_list_wrap">
								<MenuList />
							</div>
							<div className="leftpart_bottom">
								<div className="social_wrap">
									<ul>
										<li><a href="#"><i className="xcon-facebook"></i></a></li>
										<li><a href="#"><i className="xcon-twitter"></i></a></li>
										<li><a href="#"><i className="xcon-linkedin"></i></a></li>
										<li><a href="#"><i className="xcon-instagram"></i></a></li>
										<li><a href="#"><i className="xcon-behance"></i></a></li>
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
		</Fragment>
	)
}

DefaultLayout.propTypes = {
	children: PropTypes.node.isRequired,
	bodyClass: PropTypes.string,
	isHome: PropTypes.bool,
	data: PropTypes.shape({
		file: PropTypes.object,
		allGhostSettings: PropTypes.object.isRequired,
	}).isRequired,
}

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
)

export default DefaultLayoutSettingsQuery
