import React from "react";
import type { NextPage } from 'next';
import Head from 'next/head';
import Services from '../components/PageContents/Top/Services/Services';
import Contact from '../components/PageContents/Top/Contact/Contact';
import Company from '../components/PageContents/Top/Company/Company';
import MissionValue from "../components/PageContents/Top/MissionValue/MissionValue";

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Leverages Career Vietnam</title>
        <meta name="description" content="A fast growing global recruitment agency pursuing the happiness of all people concerned. Create and leverage your future career with our experienced consultants." />
        <link rel="icon" href="/img/common/icon/favicon.ico" />
        <link rel="preconnect"href="https://fonts.gstatic.com" crossOrigin={"anonymous"} />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Roboto:wght@100;300;400;500;700;900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" media="print" onLoad="this.media='all'" />
      </Head>
      <main>
        <MissionValue />
        <Services />
        <Company />
        <Contact />
      </main>
      <footer></footer>
    </div>
  );
}

export default Index;
