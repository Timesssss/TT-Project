import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import StoredData from './StoredData/StoredData';
import './Styles/PaymentMethod.css';

import welfareIcon from './images/welfare-icon.png';
import payIcon from './images/pay-icon.png';

const PaymentMethod = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const navigate = useNavigate(); // Initialize navigation hook

  // Handle payment method selection
  const handlePaymentMethod = (method) => {
    StoredData.set('paymentMethod', method); // Store selected payment method
    navigate('/confirm'); // Navigate to the confirm page
  };

  return (
    <div className="payment-container">
      <div
        className="transfer-card"
        onClick={() => handlePaymentMethod('มีหนังสือส่งตัว/สิทธิยังไม่หมดอายุ')}
      >
        <img src={welfareIcon} alt={t('transferImg')} className="transfer-image" />
        <div className="transfer-content">
          <h2>{t('transfer1')}</h2>
          <h2>{t('transfer2')}</h2>
        </div>
      </div>
      <div
        className="selfpay-card"
        onClick={() => handlePaymentMethod('ชำระเงินเอง')}
      >
        <img src={payIcon} alt={t('payImg')} className="selfpay-image" />
        <div className="selfpay-content">
          <h2>{t('selfpay')}</h2>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
