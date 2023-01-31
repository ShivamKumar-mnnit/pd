import React from 'react';
import './navbar.css';

import logo from '../../img/logo-3_new.png';

import { Link } from 'react-scroll';


function navbar() {
  return (

    <nav class="navbar" >
      <a href='/'>
        <div class="logo"><img className="logo" src={logo} alt="logo" /></div>
      </a>
      <ul class="nav-links">

        <div class="menu">
          <li><a href='/'><Link to="home" spy={true} smooth={true}>
            Home
          </Link></a></li>


          <li class="services">

            <a href="/">
              <Link to="years" spy={true} smooth={true}>
                <span classname="high-text">Btech</span>
                <br />
                <span classname="low-text">years</span>
              </Link>
            </a>


            <ul class="dropdown">

              <li><a href="/"><Link to="firstyear" spy={true} smooth={true}>1st Year</Link> </a></li>


              <li><a href="/"><Link to="secondyear" spy={true} smooth={true}>2nd Year</Link></a></li>


            </ul>

          </li>

          <li class="services">
            <a href="https://mickey-mi.github.io/takenotes/">
              TakeNotes
            </a>
          </li>

          <li><a href="/"><Link to="about-us" spy={true} smooth={true}>About us</Link></a></li>


          <li>
            <a href="/">
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </a>
          </li>
        </div>

      </ul>
    </nav>

  )
}

export default navbar