import { graphql } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import Seo from '../../components/seo';
import Layout from '../../components/Layout';
import Post from '../../components/Post';

const PostList = styled.ul`
  padding: 0 24px 0 24px;
`;

export default function Blog({ data }) {
  const posts = data.allMdx.edges;

  const postsItems = posts.map(post => (
    <Post
      key={post.node.fields.slug}
      slug={post.node.fields.slug}
      title={post.node.frontmatter.title}
      date={post.node.frontmatter.date}
      description={post.node.frontmatter.description}
    />
  ));

  return (
    <Layout>
      <Seo title="Blog" />

      <PostList>{postsItems}</PostList>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt")
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
