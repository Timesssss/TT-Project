// EnterPassportID.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import StoredData from './StoredData/StoredData';
import './Styles/EnterPassportID.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const EnterPassportID = () => {
  const [passportID, setPassportID] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleConfirmClick = () => {
    // Store the passportID
    StoredData.set('passportID', passportID);
    // Navigate with the updated state
    navigate('/verify-identity', { state: { passportID } });
  };
  

  const handleDeleteClick = () => {
    setPassportID((prev) => prev.slice(0, -1));
  };

  return (
    <div className="enter-passport-container">
      <h2>{t('enter_passport_prompt')}</h2>
      <input
        type="text"
        className="passport-input"
        value={passportID}
        onChange={(e) => setPassportID(e.target.value)}
        placeholder={t('passport_id_input_placeholder')}
        maxLength={20}
      />
      <div className="button-container">
        <button className="delete-button" onClick={handleDeleteClick}>
          <FontAwesomeIcon icon={faTrash} className="icon" />
          {t('delete_button')}
        </button>
        <button className="confirm-button" onClick={handleConfirmClick}>
          <FontAwesomeIcon icon={faCheck} className="icon" />
          {t('confirm_button')}
        </button>
      </div>
    </div>
  );
};

export default EnterPassportID;