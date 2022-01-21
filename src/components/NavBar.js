import React from 'react';
import {mainNavBar} from './layout.module.css'
import { Link } from 'gatsby';

export default function NavBar() {
  return (
  <div>
    <nav className={mainNavBar}>
        <ul>
            <li><Link to='/'>Home</Link></li>
                <li><Link to='/culture'>Culture</Link></li>
                <li><Link to='/politics'>Politics</Link></li>
                <li><Link to='/code'>Code</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
  </div>
  )
}
