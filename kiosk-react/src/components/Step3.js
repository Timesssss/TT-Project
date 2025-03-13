import React from 'react';
import './Styles/Step3.css';
import { useTranslation } from 'react-i18next';

const Step3 = () => {
  const { t } = useTranslation();

  return (
    <div className="steps3-container">
      <div className="step3-box">
        <div className="step3-content">
          <span className="step3-number">01</span>
          <span className="step3-text">{t('step_1')}</span>
        </div>
      </div>
      <div className="step3-box">
        <div className="step3-content">
          <span className="step3-number">02</span>
          <span className="step3-text">{t('step_2')}</span>
        </div>
      </div>
      <div className="step3-box">
        <div className="step3-content">
          <span className="step3-number">03</span>
          <span className="step3-text">{t('step_3')}</span>
        </div>
      </div>
      <div className="step3-box">
        <div className="step3-content">
          <span className="step3-number">04</span>
          <span className="step3-text">{t('step_4')}</span>
        </div>
      </div>
    </div>
  );
};

export default Step3;
