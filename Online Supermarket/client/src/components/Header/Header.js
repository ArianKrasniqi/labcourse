import React from 'react'

import classes from "./Header.module.css"
import logo from "../../assets/logo.png"

function Header(props) {
  return (
    <div className={classes.Header}>
      {/* <img src={logo} alt="logo"/>
      <div className={classes.Search}>
        <input type="search" placeholder="Kerko produktin"/>
      </div>
      <div className={classes.Options}></div> */}
    </div>
  );
}

export default Header;