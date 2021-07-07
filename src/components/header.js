import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import logo from '../images/KB.png';

const Header = () => (
  <header
    style={{
      background: `none`,
      marginBottom: `1.45rem`,
    }}

    className="header"
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1100,
        padding: `10px 20px`,
      }}
      className="header__wrapper"
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <img src={logo} alt="header logo" />
        </Link>
      </h1>

      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
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
