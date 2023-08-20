import React from 'react';
import Head from 'next/head';
import { Header } from '../../../../libs/interfaces/Header';

type HeadInfoProps = {
  header: Header
}

const HeadInfoVn: React.FC<HeadInfoProps> = ({header}) => {
  return (
    <Head>
      <title>{header.title}</title>
      <meta name="description" content={header.description} />
      <link rel="icon" href="" />
      <link rel="preconnect"href="https://fonts.gstatic.com" crossOrigin={"anonymous"} />
      <link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Roboto:wght@100;300;400;500;700;900&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" media="all" onLoad="this.media='all'" />
    </Head>
  );
}

export default HeadInfoVn;
