import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { Navbar } from '../components/Navbar';
import { Modal } from '../components/Modal';

export default function Home({ beers }) {
  const [modal, setModal] = useState(false);
  const [beerLookup, setBeerLookup] = useState({});

  const handleClick = (id, e) => {
    let beerDetails = beers[id - 1];
    setBeerLookup(beerDetails);
    setModal(!modal);
  };

  const ModalMarkup = () => {
    if (!modal) {
      return null;
    }
    return <Modal beer={beerLookup} onClick={handleClick} />;
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
          Data fetched from{' '}
          <code className={styles.code}>
            <a href="https://punkapi.com/">punk API</a>
          </code>
        </p>
        <div className={styles.grid}>
          {beers.map((beer) => (
            <a
              onClick={(e) => handleClick(beer.id, e)}
              className={styles.card}
              key={beer.id}
            >
              <h3>{beer.name} &rarr;</h3>
              <p>{beer.tagline}</p>
            </a>
          ))}
        </div>
        <ModalMarkup />
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
