/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (result.error) {
    reporter.panic('There was a problem loading your project');
    return;
  }

  const projects = result.data.allProjectsJson.edges;
  projects.forEach(({ node: project }) => {
    const { slug } = project;

    actions.createPage({
      path: `/projects/${slug}/`,
      component: require.resolve('./src/templates/project.js'),
      context: { slug }
    })
  })
}
// // You can delete this file if you're not using it
