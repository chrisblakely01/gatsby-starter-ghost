import React, { useEffect } from 'react';

import { MetaData } from '../../components/common/meta';
import { Layout } from '../../components/common';
import IntroImage1 from '../../img/blog/1.jpg';
import IntroImage2 from '../../img/blog/1.jpg';
import FeatureImage1 from '../../img/blog/1.jpg';
import FeatureImage2 from '../../img/blog/1.jpg';

const NantHealth = () => <>
        <Layout>
        	<div className="arlo_tm_portfolio_single_wrap">
        		<div className="container">
        			<div className="title_holder">
        				<h3>Nanthealth Health Notebook</h3>
        			</div>
        			<div className="details_wrap">
        				<div className="leftbox">
        					<img src={IntroImage1} alt="" style={{ marginBottom: `10px` }} />
        					<img src={IntroImage2} alt="" />
        				</div>
        				<div className="rightbox">
        					<div className="name_holder">
        						<h3>Project Details</h3>
        					</div>
        					<div className="short_list">
        						<ul>
        							<li>
        								<span className="first">Company Type :</span>
        								<span className="second">Multinational Enterprise</span>
        							</li>
        							<li>
        								<span className="first">Category :</span>
        								<span className="second">Mobile first SaaS cloud application</span>
        							</li>
        							<li>
        								<span className="first">Website :</span>
        								<span className="second">www.nanthealth.com/</span>
        							</li>
        							<li>
        								<span className="first">Technologies :</span>
        								<span className="second">Angular, Java, Spring Boot, AWS, kubernetes</span>
        							</li>
        						</ul>
        					</div>
        					<p>Nanthealth is a healthcare platform based in California. The company is focused on developing and marketing a range of healthcare solutions.</p>
        					<p>
                                My role as a software developer in the company was to design, and implement microservices and mobile views that were key to the Health Notebook application. 
                                Health Notebook tracks fitness activity, and syncs with popular fitness devices such as Garmin and FitBit
        					</p>
        					<p>
                                The main challenge I faced was designing user interfaces that allowed large amounts of data to be displayed in a mobile first, user friendly manner.
                                Key accomplishments include creating and maintaining the Insurance feature, allowing users to add and manage their insurance information through the app.
        					</p>
        					<p>
                                My efforts for NantHealth meant that the Health Notebook application was completed in a timely manner and rolled out to large enterprise's such as BT, who's 1000's of staff benefited from the application.
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
        			<div className="pagination_wrap">
        				<div className="prev">
        					<a href="#">Prev</a>
        				</div>
        				<div className="next">
        					<a href="#">Next</a>
        				</div>
        			</div>
        		</div>
        	</div>
        </Layout>
    </>;

export default NantHealth;