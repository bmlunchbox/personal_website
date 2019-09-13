import PropTypes from "prop-types"
import React from "react"
import ProfileImage from "../components/image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div className="header-container">
      <h1 style={{ margin: 0 }}>
          {siteTitle}
      </h1>

      <div className="portrait">
        <ProfileImage />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
