import React, { useEffect } from 'react'

import { MetaData } from '../../components/common/meta';
import { Layout } from '../../components/common';
import IntroImage1 from '../../img/blog/1.jpg';
import IntroImage2 from '../../img/blog/1.jpg';
import FeatureImage1 from '../../img/blog/1.jpg';
import FeatureImage2 from '../../img/blog/1.jpg';

const Beezer = () =>
    <>
        <MetaData location={location} />
        <Layout>
            <div class="arlo_tm_portfolio_single_wrap">
                <div class="container">
                    <div class="title_holder">
                        <h3>Beezer Platform</h3>
                    </div>
                    <div class="details_wrap">
                        <div class="leftbox">
                            <img src={IntroImage1} alt="" style={{ marginBottom: '10px' }} />
                            <img src={IntroImage2} alt="" />
                        </div>
                        <div class="rightbox">
                            <div class="name_holder">
                                <h3>Project Details</h3>
                            </div>
                            <div class="short_list">
                                <ul>
                                    <li>
                                        <span class="first">Company Type :</span>
                                        <span class="second">Startup</span>
                                    </li>
                                    <li>
                                        <span class="first">Category :</span>
                                        <span class="second">SaaS cloud application</span>
                                    </li>
                                    <li>
                                        <span class="first">Technologies :</span>
                                        <span class="second">Java, Spring Boot, AWS, Kubernetes, Docker</span>
                                    </li>
                                    <li>
                                        <span class="first">Integrations :</span>
                                        <span class="second">Striple, GAA</span>
                                    </li>
                                </ul>
                            </div>
                            <p>Beezer was a cloud platform that allows sports clubs and organisations to create and interact with their community of teams, fans and members.</p>
                            <p>
                                My role as a software developer in the company was to design, and implement microservices that were key to the Beezer platform. The Beezer platform was used to power the Official GAA App.
                            </p>
                            <p>
                                The main challenge I faced was coordinating with other teams and third partys, to ensure quick efficient release of product features.
                                Key accomplishments include creating a notification service, allow sports club members to recieve notifications from their sports clubs, and creating a payment service, which allowed sports clubs and organisations to accept payments 
                                from members via the app.
                            </p>

                            <p>
                                My efforts for Beezer formed the groundwork which allowed the creation of the Offical GAA app, processing 1000's of notifications and 100's of payments from club members.
                            </p>
                        </div>
                    </div>
                    <div class="images_list">
                        <ul>
                            <li>
                                <img src={FeatureImage1} alt="" />
                            </li>
                            <li>
                                <img src={FeatureImage2} alt="" />
                            </li>
                        </ul>
                    </div>
                    <div class="pagination_wrap">
                        <div class="prev">
                            <a href="#">Prev</a>
                        </div>
                        <div class="next">
                            <a href="#">Next</a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </>

export default Beezer;