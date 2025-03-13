import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive'; // Import useMediaQuery
import './Styles/EnterIDnumThai.css';
import StoredData from './StoredData/StoredData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const EnterIDnumThai = () => {
  const { t } = useTranslation();
  const [idNumber, setIdNumber] = useState('');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(true);
  const navigate = useNavigate();

  const formatIDNumber = (value) => {
    value = value.replace(/\D/g, '');
    if (value.length > 13) {
      value = value.slice(0, 13);
    }
    const regex = /^(\d{1})(\d{0,4})(\d{0,5})(\d{0,2})(\d{0,1})$/;
    const match = value.match(regex);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}-${match[4]}-${match[5]}`;
    }
    return value;
  };

  const handleInputChange = (value) => {
    const formattedValue = formatIDNumber(idNumber + value);
    setIdNumber(formattedValue);
  };

  const handleBackspace = () => {
    setIdNumber((prev) => prev.slice(0, -1));
  };

  const handleConfirmClick = () => {
    StoredData.set('idNumber', idNumber); // Store the ID number
  
    // ส่งข้อมูลไปยัง C# ผ่าน WebView2
    if (window.chrome && window.chrome.webview) {
      window.chrome.webview.postMessage({
        idNumber: idNumber,
      });
    }
  
    navigate('/verify-identity'); // Navigate to verify-identity page
  };
  

  return (
    <div className="enter-id-container">
      <h2>{t('enter_id_prompt')}</h2>
      <input
        type="text"
        className="id-input"
        value={idNumber}
        placeholder={t('id_input_placeholder')}
        readOnly
      />
      {isKeyboardVisible && (
        <div className="id-keyboard">
          <div className="id-keyboard-row">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className="id-key"
                onClick={() => handleInputChange(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="id-keyboard-row">
            {[4, 5, 6].map((num) => (
              <button
                key={num}
                className="id-key"
                onClick={() => handleInputChange(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="id-keyboard-row">
            {[7, 8, 9].map((num) => (
              <button
                key={num}
                className="id-key"
                onClick={() => handleInputChange(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="id-keyboard-row">
            <button className="id-key id-key-wide" onClick={handleBackspace}>
              <FontAwesomeIcon icon={faTrash} /> {t('delete_button')}
            </button>
            <button
              className="id-key id-key-zero"
              onClick={() => handleInputChange(0)}
            >
              0
            </button>


            <button className="id-key id-key-confirm" onClick={handleConfirmClick}>
              <FontAwesomeIcon icon={faCheck} /> {t('confirm_button')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnterIDnumThai;