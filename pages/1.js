import styles from '../styles/Home.module.css'
import Image from 'next/image'
import profilePic from '../public/sea.jpg'
import endPic from '../public/this.png'
import Footer from "./layout/Footer";

import NavBarRight from './layout/NavBarRight';
import { CardHeader } from 'reactstrap';

function one(){
    return(
        <>
        <CardHeader>
        <NavBarRight/>
        </CardHeader><main className={styles.main}>
        <h1 className={styles.title}>Blog #1</h1>
            <br/><br/><br/>
            <Image
        src={profilePic}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <div className={styles.description}>
        Nulla semper nisl a laoreet pulvinar. Ut mattis tellus libero, et ultrices justo scelerisque eu. Mauris varius turpis quis faucibus placerat. Fusce ut lacus in lectus posuere lobortis laoreet in orci. Morbi accumsan turpis non libero porttitor, eget semper elit ultricies. Aenean sed dui lacus. Aenean ac sodales metus, vel consequat tortor. Quisque tempor id enim porta gravida. Pellentesque facilisis elementum ultrices. Curabitur auctor viverra nulla sed scelerisque. Proin gravida non nisi sed feugiat. Pellentesque vel magna quam. Proin quis augue mattis, mattis est a, sagittis risus. Proin in purus sit amet felis facilisis aliquam.
        Cras suscipit, mi nec varius dignissim, ex ante porta turpis, eget rutrum lorem nisi sed eros. Pellentesque et ornare odio, sit amet dictum sapien. Mauris venenatis lectus arcu, nec convallis metus egestas id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce facilisis nisi quis facilisis tristique. Sed condimentum sed mi nec luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
</div>
<div className='comments'>
  <h3>Comments</h3>
  <hr className={styles.hr} ></hr>
<form action="/send-data-here" method="post">
  <label for="first">Name:&nbsp;&nbsp;</label>
  <input type="text" id="first" name="first" /><br/><br/>
  <label for="last">Comment</label><br/>
  <textarea cols={80} rows={12} id="text" name="textarea" maxLength={100} wrap/><br/>
  <button type="submit">Submit</button>
</form></div>
            </main>
            <Footer/></>
    );
}
export default one
