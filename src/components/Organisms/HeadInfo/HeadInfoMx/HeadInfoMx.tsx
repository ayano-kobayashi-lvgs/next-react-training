import React from 'react';
import Head from 'next/head';
import { Header } from '../../../../libs/interfaces/Header';

type HeadInfoProps = {
  header: Header;
}

const HeadInfoMx: React.FC<HeadInfoProps> = ({header}) => {
  return (
    <Head>
      <title>{header.title}</title>
      <meta name="description" content={header.description} />
      <link rel="icon" href="" />
      <link rel="preconnect"href="https://fonts.gstatic.com" crossOrigin={"anonymous"} />
      <link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap" media="all" onLoad="this.media='all'" />
    </Head>
  );
}

export default HeadInfoMx;
