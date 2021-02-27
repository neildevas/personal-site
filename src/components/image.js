import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */
// Fixed will be a set width, fluid will be 100% of its container
const Image = ({ isFluid = false }) => {
  const data = useStaticQuery(graphql`
    query {
        image: file(relativePath:{eq:"hero-image-largest.png"}) {
            id
            childImageSharp {
                fluid(maxHeight:500, maxWidth:500) {
                    ...GatsbyImageSharpFluid
                }
                fixed(height:500) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
  `)

  if (isFluid) {
    if (!data?.image?.childImageSharp?.fluid) {
      return <div>Picture not found</div>
    }

    return (
      <Img
        fluid={data.image.childImageSharp.fluid}
        objectFit={'cover'}
        imgStyle={{ height: "100%", width: '100%'}}
        // objectPosition="50% 50%"
        alt="hero-image"
      />
    )
  }

  if (!data?.image?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      objectFit={'cover'}
      // objectPosition="50% 50%"
      alt="hero-image"
    />
  )
}

export default Image
