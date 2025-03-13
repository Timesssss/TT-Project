import React from 'react';
import '../../App.css';
import Step1 from '../Step1';
import VerifyID from '../VerifyID';
import Footer2 from '../Footer2';

function VerifyIdentity() {
  return (
    <>
      <Step1 />
      <VerifyID />
      <Footer2 />
    </>
  );
}

export default VerifyIdentity;
