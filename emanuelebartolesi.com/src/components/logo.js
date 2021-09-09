import React from "react"
import { Link } from "gatsby"

const Logo = props => (
  <div className="site-logo">
    {/* <Link to="/">{props.title}</Link> */}
    <Link to="/"><img src="/assets/KasukenBlogLogo.png" alt="Emanuele Bartolesi" height="40px" /></Link>
  </div>
)

export default Logo
