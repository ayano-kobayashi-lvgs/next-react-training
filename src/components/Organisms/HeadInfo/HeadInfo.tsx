import React from 'react';
import HeadInfoVn from './HeadInfoVn/HeadInfoVn';
import HeadInfoMx from './HeadInfoMx/HeadInfoMx';
import { Header } from '../../../libs/interfaces/Header';

type branchCodeType = 'vn' | 'mx';

type HeadInfoProps = {
  header: Header;
  branchCode: branchCodeType;
}

const HeadInfo: React.FC<HeadInfoProps> = ({header, branchCode}) => {
  switch (branchCode) {
    case 'vn':
      return <HeadInfoVn header={header} />
    case 'mx':
      return <HeadInfoMx header={header} />
    default:
      return <HeadInfoMx header={header} />
  };
}

export default HeadInfo;
