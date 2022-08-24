import styles from '../styles/Home.module.css'

import Image from 'next/image'
import React from "react";
import Footer from "./layout/Footer";

import NavBarRight from './layout/NavBarRight';
import { CardHeader } from 'reactstrap';

// reactstrap components
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

function Contact(){
    return(
        <><CardHeader>
        <NavBarRight/>
        </CardHeader>
        <main className={styles.main}>
            
                    <h1 className={styles.title}>Contact Us</h1><br/><br/>
                    <div className='message'>
                        <h3>Message here</h3>
                        <hr className={styles.hr}></hr>

                        <form action="/send-data-here" method="post">
                            <label for="first">Name:&nbsp;&nbsp;</label>
                            <input type="text" id="first" name="first" /><br /><br />
                            <label for="first">Email:&nbsp;&nbsp;</label>
                            <input type="email" id="email" name="email" /><br /><br />
                            <label for="last">Message</label><br />
                            <textarea cols={80} rows={12} id="text" name="textarea" maxLength={100} /><br />
                            <button type="submit">Submit</button>
                        </form></div>

                        

                </main>
                <Footer/>
            </>
    );
}
export default Contact