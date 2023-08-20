import React from 'react'
import type { NextPage } from 'next';
import '../../locale/i18n';
import Services from '../../components/PageContents/Top/Services/Services';
import Contact from '../../components/PageContents/Top/Contact/Contact';
import Company from '../../components/PageContents/Top/Company/Company';
import MissionValue from '../../components/PageContents/Top/MissionValue/MissionValue';
import Mv from '../../components/PageContents/Top/Mv/Mv';
import Footer from '../../components/Organisms/Footer/Footer';
import HeadInfo from '../../components/Organisms/HeadInfo/HeadInfo';
import { Header } from '../../libs/interfaces/Header';

const Index: NextPage = () => {
  const header: Header = {
    title: 'Leverages Career Vietnam',
    description: 'A fast growing global recruitment agency pursuing the happiness of all people concerned. Create and leverage your future career with our experienced consultants.',
  }
  const BRANCH_VN = 'vn';

  return (
    <div>
      <HeadInfo header={header} branchCode={BRANCH_VN}></HeadInfo>
      <Mv />
      <MissionValue />
      <Services />
      <Company />
      <Contact />
      <Footer />
    </div>
  );
}

export default Index;
