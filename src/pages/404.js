import * as React from "react"
import { Link } from "gatsby"
import { mainTitle, mainSubtitle, mainTitleLink } from "../components/layout.module.css";


// markup
const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <h1 className={mainTitle}>Page not found</h1>
      <p className={mainSubtitle}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        <br />
        <Link to="/" className={mainTitleLink} style={{color:'#fff'}}>Go home</Link>
      </p>
    </main>
  )
}

export default NotFoundPage
