import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const ProfileImage = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "portrait.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img className="profile-image" fluid={data.profileImage.childImageSharp.fluid} />
}
