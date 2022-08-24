import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Footer from "./layout/Footer";

import NavBarRight from './layout/NavBarRight';
import { CardHeader } from 'reactstrap';

function About(){
    return(
        <><CardHeader>
        <NavBarRight/>
        </CardHeader>
        <main className={styles.main}>
          
        <h1 className={styles.title}>About</h1> 
        <br/> <br/>
        
          <div className={styles.description}>
            
            <p>The First Collection is an innovative and modern lifestyle-focused hospitality brand that specialises in providing discerning guests with unforgettable experiences, whether they choose to stay, dine or relax.<br/>

With a fast-growing and award-winning portfolio of upscale hotels situated in prime locations across Dubai, The First Collection sets a new benchmark for sophistication in the UAE’s lifestyle-focused hospitality sector, delivering an unbeatable combination of comfort and convenience to our guests.</p>
        
          </div>
          <div>
                <Image
                    src="
                    https://i0.wp.com/risendubai.com/wp-content/uploads/2021/12/img-about-us.jpg?fit=2220%2C880&ssl=1"
                    alt="GFG logo served with static path of public directory"
                    height="880"
                    width="2200"
                />
            </div>
            
            
              <a href="https://risendubai.com/#menu" target="" className={styles.button} role='button'>
                View our menu</a>
                
          
        </main>
        <Footer/></>
    );
}

export default About
