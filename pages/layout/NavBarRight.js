import React, { Component, Fragment } from "react";
import styles from '/styles/Home.module.css'
import Link from 'next/link';


class NavBarRight extends Component {
  render() {
    return (
        
        <div className={styles.left}>
            <Link href="http://localhost:3000/" >Home</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link href="./about" >About</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link href="./blog">Blog</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link href="./contact">Contact Us</Link>
        </div>
    );
  }
}

export default NavBarRight;