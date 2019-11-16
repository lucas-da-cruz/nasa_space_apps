import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import { Button } from 'react-bootstrap';



function Header(){
  return(
    <>
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          Health & Wellness
        </Link>        
      </div>
    </header>
    </>
  );
}

export default Header;