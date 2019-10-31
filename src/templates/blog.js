import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout, PostCard, Pagination } from '../components/common';
import { MetaData } from '../components/common/meta';

/**
* Main blog page 
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Blog = ({ data, location, pageContext }) => {
	const posts = data.allGhostPost.edges;
	return (
		<>
			<MetaData location={location} />
			<Layout isHome={false}>
				<div className="blog-container">
					<div className="container">
						<div className="arlo_tm_title_holder news" style={{ paddingBottom: `50px` }}>
							<h3>Blog</h3><span>Check out our latest News</span>
						</div>
						<div className="arlo_tm_section">
							<section className="post-feed">
								{posts.map(({ node }, index) => (
									// The tag below includes the markup for each post - components/common/PostCard.js
									<PostCard key={`${node.id}_${index}`} post={node} />
								))}
							</section>
							<Pagination pageContext={pageContext} />
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
};

Blog.propTypes = {
	data: PropTypes.shape({
		allGhostPost: PropTypes.object.isRequired,
	}).isRequired,
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired,
	}).isRequired,
	pageContext: PropTypes.object,
};

export default Blog;

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;
