import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { Navbar } from '../components/Navbar';
import { Modal } from '../components/Modal';

export default function Home({ beers }) {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    console.log('Modal Time');
    setModal(!modal);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Beer App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Beers with <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <div className={styles.grid}>
          {beers.map((beer) => (
            <a onClick={handleClick} className={styles.card} key={beer.id}>
              <h3>{beer.name} &rarr;</h3>
              <p>{beer.tagline}</p>
            </a>
          ))}
        </div>
        <Modal show={modal} />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://europe-west1-rickandmorty-26bab.cloudfunctions.net/api/beers'
  );
  const beers = await res.json();
  return {
    props: {
      beers,
    },
  };
}
