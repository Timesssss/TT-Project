import React from 'react';
import '../../App.css';
import Step1 from '../Step1';
import EnterPassportID from '../EnterPassportID';
import Footer2 from '../Footer2';

function EnterIDPassport() {
  return (
    <>
      <Step1 />
      <EnterPassportID />
      <Footer2 />
    </>
  );
}

export default EnterIDPassport;
