import React, { Component, Fragment } from "react";
import styles from '/styles/Home.module.css'
import Link from 'next/link';

class NavBar extends Component {
  render() {
    return (
        <div className={styles.description}>
        <p className={styles.a}>
        
          <Link href="./about" >About</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link href="./blog">Blog</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link href="./contact">Contact Us</Link>
        </p></div>
    );
  }
}

export default NavBar;