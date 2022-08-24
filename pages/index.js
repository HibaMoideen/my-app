import './about'
import './blog'
import './contact'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link';
import Footer from "./layout/Footer";
import NavBar from "./layout/NavBar";

function HomePage() {
  return (
    
    <><main className={styles.main}>
        <h1 className={styles.title}>
          Home
        </h1>
        <NavBar/>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.cardu}>
            <h2>Paragraph</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed nibh consequat, iaculis nibh ut, pretium tellus. Sed et porta felis. Proin suscipit quam non purus porta, in venenatis est ultricies. Mauris quis massa tincidunt, accumsan ligula vel, imperdiet nunc. Praesent hendrerit ultricies mollis. Fusce faucibus dictum urna, ac viverra sapien. Proin aliquam auctor varius. Aenean volutpat lacinia hendrerit. Vivamus id tristique nunc, ac vulputate enim. In ut lorem nec quam tempus scelerisque a lacinia nunc. Ut vitae libero congue, porta felis ut, cursus ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque sed lectus diam. Ut blandit tristique aliquet. Vivamus dignissim est nec sapien viverra laoreet.</p>
          </a></div>
      </main>
      
      <Footer/></>
  );
}

export default HomePage