import styles from '../styles/Home.module.css'
import './1'
import './2'
import Image from 'next/image'
import Footer from "./layout/Footer";
import NavBarRight from './layout/NavBarRight';
import { CardHeader } from 'reactstrap';
import Link from 'next/link';

function Blog(){
    return(
        <><CardHeader>
        <NavBarRight/>
        </CardHeader>
        <main className={styles.main}>
        <h1 className={styles.title}>Blog</h1>
        <br /><br /><br />

        <div className={styles.grid}>

          <Link href="./1">
            <a className={styles.card}>
              <h2>Blog #1 &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>

          <a href="./2" className={styles.card}>
            <h2>Blog #2 &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Blog #3 &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Blog #4 &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <Footer/></>
    );
}

export default Blog