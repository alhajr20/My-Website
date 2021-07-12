import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header";
import '../styles/index.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          logo
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.logo} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1100,
          padding: `0 20px`,
        }}
      >
        <main style={{padding: `100px 0`}}>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
            padding: `24px 0`
          }}
        >
          © {new Date().getFullYear()} Khalid Beriev
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
