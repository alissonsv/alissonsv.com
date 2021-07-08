/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import Seo from '../components/seo';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';

const Article = styled.article`
  padding-top: 20px;

  * {
    color: white;
  }

  h2,
  h3 {
    font-weight: 700;
    line-height: 1.1;
    padding: 24px 0 16px 0;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  table,
  td,
  th {
    border: 2px solid #444a53;
    padding: 6px 13px 6px 6px;
  }

  tr:nth-child(even) {
    background-color: #2f3640;
  }

  thead {
    font-weight: 700;
  }

  code {
    background-color: #2f3640;
    padding: 3px;
    border-radius: 6%;
    font-weight: 700;
  }

  ul {
    padding-left: 24px;
    list-style: disc;
  }

  ol {
    padding-left: 24px;
    list-style: decimal;
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: 700;
  }

  a {
    color: #428cea;
  }

  blockquote {
    border-left: 0.25em solid #adbac7;

    padding: 0 1em 0 1em;
    p {
      color: #adbac7;
    }
  }
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const Time = styled.time`
  font-size: 0.8rem;
  color: #adbac7;
`;

const Body = styled.div`
  font-weight: 300;
  line-height: 1.25rem;
  padding-top: 20px;
  padding-bottom: 40px;
`;

const components = {
  code: CodeBlock,
};

export default function BlogPost({ data }) {
  const post = data.mdx;

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <main>
        <Link to="/blog">← Voltar pro blog</Link>
        <Article>
          <Title>{post.frontmatter.title}</Title>
          <Time>{post.frontmatter.date}</Time>

          <Body>
            <MDXProvider components={components}>
              <MDXRenderer>{post.body}</MDXRenderer>
            </MDXProvider>
          </Body>
        </Article>
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt")
      }
    }
  }
`;
