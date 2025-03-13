import React from 'react';
import { Outlet } from 'react-router';
import ChallengeModal from './ChallengeModal/ChallengeModal';

const RootLayout = () => {

  return (
    <>
      <Outlet />
      <ChallengeModal />
    </>
  );

}

export default RootLayout;
