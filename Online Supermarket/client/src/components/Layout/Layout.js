import React from 'react'

import classes from "./Layout.module.css"

import Header from "../Header/Header"

function Layout({children}) {
  return (
    <div className={classes.Layout}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;