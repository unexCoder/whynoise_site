import * as React from 'react'
import {container} from './layout.module.css'
import NavBar from './NavBar'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {

    return (
        <div>
            <main className={container}>
                <NavBar />
                <Header />
                {children}
                <Footer />
            </main>
        </div>
    )
}

export default Layout
