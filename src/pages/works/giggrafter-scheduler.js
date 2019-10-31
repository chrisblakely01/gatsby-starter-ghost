import React from 'react';

import { Layout } from '../../components/common';
import IntroImage2 from '../../img/showcase-image-1.png';
import IntroImage3 from '../../img/gg1.png';
import FeatureImage1 from '../../img/gg2.png';
import FeatureImage2 from '../../img/gg-mobile.png';

import GGLogo from '../../img/gg-logo-2.png';

const GiggrafterScheduler = () => <>
		<Layout isHome={false}>
			<div className="arlo_tm_portfolio_single_wrap">
				<div className="container">
					<div className="title_holder">
						<h3>Giggrafter Scheduler</h3>
					</div>
					<div className="details_wrap">
						<div className="leftbox">
							<div style={{ backgroundColor: `#343e48`, marginBottom: `20px` }}>
								<img src={GGLogo} alt="Giggrafter scheduler logo" style={{ padding: `10px` }} />
							</div>
							<img className="image" src={IntroImage2} alt="" style={{ marginBottom: `20px` }} />
							<img className="image" src={IntroImage3} alt="" />

						</div>
						<div className="rightbox">
							<div className="name_holder">
								<h3>Project Details</h3>
							</div>
							<div className="short_list">
								<ul>
									<li>
										<span className="first">Company Type :</span>
										<span className="second">Startup</span>
									</li>
									<li>
										<span className="first">Category :</span>
										<span className="second">SaaS cloud application</span>
									</li>
									<li>
										<span className="first">Website :</span>
										<span className="second"><a href="http://www.giggrafter.com" target="_blank" rel="noopener noreferrer">www.giggrafter.com</a></span>
									</li>
									<li>
										<span className="first">Technologies :</span>
										<span className="second">React.js, Redux, Java, Spring Boot, AWS, Postgres, Git</span>
									</li>
								</ul>
							</div>
							<p> Giggrafter rota software helps users to create, publish and manage budgeted rotas
                                in minutes allowing them to respond quickly to changing employee availability or business need.</p>
							<p>
								My role as the software developer in the company was to architect, design, and implement business critical features, across web and mobile.
                                The process followed software development best practices which I enforced; 2 week sprints, standups, code reviews, and early testing and demos.
							</p>
							<p>
								The main challenge I faced was balancing speed, code quality and business impact when designing and implementing product features.
                                Key accomplishments include rearchitecting and rebuilding the rota view within the web application in 5 weeks. This provided performance improvements and better UI interactions,
                                allowing for a better user experience. As well as this, I created a responsive mobile view in 3 weeks, allowing users to view their rota from mobile devices.
							</p>
						</div>
					</div>
					<div className="images_list">
						<ul>
							<li>
								<img src={FeatureImage1} alt="" />
							</li>
							<li>
								<img src={FeatureImage2} alt="" />
							</li>
						</ul>
					</div>
					{/* <div class="pagination_wrap">
                        <div class="prev">
                            <a href="#">Prev</a>
                        </div>
                        <div class="next">
                            <a href="#">Next</a>
                        </div>
                    </div> */}
				</div>
			</div>
		</Layout>
	</>;

export default GiggrafterScheduler;