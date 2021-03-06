import Head from 'next/head';
import Image from 'next/image';
import hello from './api/hello';
import s from '../styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className={s.root}>
      <div className="grid md:grid-rows-3 md:grid-cols-5 grid-cols-1 mx-auto px-16 py-16">
        <Head>
          <title>Crypto App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex flex-col col-start-2 col-span-3 justify-center">
          <div className="flex justify-center">
            <h1
              className="absolute z-30 text-4xl mt-4 text-white text-center font-bold
            "
            >
              ALL BLOCKCHAIN PRICES
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
