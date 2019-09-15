import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          maxWidth: 960,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer className="footer-container">
          <span className="footer-block">Copyright {new Date().getFullYear()} Brandon Leung</span>
          <span>Designed inspired by Nick Zuber, built with Gatsby.</span> 
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
