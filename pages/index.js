import Head from "next/head";
import { RouteLinks } from "../components";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Iglesia Bautista Bethel</title>
        <meta property="og:title" content="Iglesia Bautista Bethel" />
        <meta
          property="og:image"
          content="https://www.navidadenlasmontanas.com/ibbShare.png"
        />
        <meta
          name="description"
          content="Iglesia Bautista Bethel Claveria. La gente que sigue a Jesús"
        />
        <meta property="og:description" content="La gente que sigue a Jesús" />
      </Head>

      <main className={styles.home}>
        <div className={styles.homeContainer}>
          <div className={styles.homeText}>
            <h1>Iglesia Bautista Bethel</h1>
            <h3>La gente que sigue a Jesús</h3>
          </div>
          <div className={styles.homeButtons}>
            <RouteLinks />
          </div>
        </div>
      </main>
    </div>
  );
}
