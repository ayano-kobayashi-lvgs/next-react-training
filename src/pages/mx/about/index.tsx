import React from "react";
import type { NextPage } from 'next';
import '../../../locale/i18n';
import HeadInfo from "../../../components/Organisms/HeadInfo/HeadInfo";

const Index: NextPage = () => {
  const header = {
    title: 'ABOUT - Recruitment Agency | Leverages Career Mexico',
    description: 'Learn more about Leverages Career Mexico, a fast growing global recruitment agency with expertise in HR solutions.'
  }
  const BRANCH_MX = 'mx';
  return (
    <div>
      <HeadInfo header={header} branchCode={BRANCH_MX}></HeadInfo>
    </div>
  );
}

export default Index;
