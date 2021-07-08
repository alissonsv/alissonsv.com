const path = require('path');
const slugify = require('slugify');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  return graphql(`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            slug
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMdx.edges;

    posts.forEach(post => {
      createPage({
        path: `${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.slug,
        },
      });
    });

    return null;
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const slug = `/blog/${slugify(node.frontmatter.title.toLowerCase())}`;

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
