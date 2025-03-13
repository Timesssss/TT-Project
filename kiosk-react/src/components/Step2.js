import React from 'react';
import './Styles/Step2.css';
import { useTranslation } from 'react-i18next';

const Step2 = () => {
  const { t } = useTranslation();

  return (
    <div className="steps2-container">
      <div className="step2-box">
        <div className="step2-content">
          <span className="step2-number">01</span>
          <span className="step2-text">{t('step_1')}</span>
        </div>
      </div>
      <div className="step2-box">
        <div className="step2-content">
          <span className="step2-number">02</span>
          <span className="step2-text">{t('step_2')}</span>
        </div>
      </div>
      <div className="step2-box">
        <div className="step2-content">
          <span className="step2-number">03</span>
          <span className="step2-text">{t('step_3')}</span>
        </div>
      </div>
      <div className="step2-box">
        <div className="step2-content">
          <span className="step2-number">04</span>
          <span className="step2-text">{t('step_4')}</span>
        </div>
      </div>
    </div>
  );
};

export default Step2;
