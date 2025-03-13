import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './Styles/VerifyID.css';

import idcardHeader from "../components/images/trangskin_logo.png";
import StoredData from './StoredData/StoredData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

function VerifyID() {
  const { t } = useTranslation();
  const [cardData, setCardData] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);

  // Fetch user type from StoredData
  const userType = StoredData.get('userType') || 'Thai'; // Default to 'Thai'

  // Simulate fetching card/passport data
  function fetchCardData() {
    if (userType === 'Thai') {
      return {
        idNumber: "2222222222222",
        name: "Mr. Hello Kitty",
        dob: "14 Jan 1980",
        hn: "3456789",
        profilePicture: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      };
    } else {
      return {
        passportID: "AB1234567",
        name: "Mr. Hello Kitty",
        dob: "14 Jan 1980",
        hn: "3456789",
        profilePicture: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      };
    }
  }

  useEffect(() => {
    const data = fetchCardData();
    setCardData(data);
  }, [userType]);

  const navigate = useNavigate();

  const handlePhoneNumberInput = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const handleDelete = () => {
    setPhoneNumber(phoneNumber.slice(0, -1));
  };

  const handleConfirm = () => {
    if (phoneNumber.length === 10) {
      setIsPhoneNumberValid(true);
      StoredData.set('phoneNumber', phoneNumber);
      navigate('/queue');
    } else {
      setIsPhoneNumberValid(false);
    }
  };

  return (
    <div className="idcard-container">
      <div className="card-info">
        {cardData ? (
          <div className="id-card">
            <div className="id-header">
              <img src={idcardHeader} alt={t('id_card_header')} className="idcardHeader" />
              <span className="idcard-title">{t('id_card_information')}</span>
            </div>
            <div className="idcard-content">
              <div className="idcard-right">
                {userType === 'Thai' ? (
                  <p><strong>{t('id_number')}:</strong> {cardData?.idNumber}</p>
                ) : (
                  <p><strong>{t('passport_id')}:</strong> {cardData?.passportID}</p>
                )}
                <p><strong>{t('name')}:</strong> {cardData?.name}</p>
                <p><strong>{t('dob')}:</strong> {cardData?.dob}</p>
                <p><strong>{t('hn')}:</strong> {cardData?.hn}</p>
              </div>
              <img src={cardData.profilePicture} alt={t('profile_picture')} className="profile-picture" />
            </div>
          </div>
        ) : (
          <p>{t('loading_card_data')}</p>
        )}
      </div>

      <div className="phone-keypad-row">
        <div className="phone-number-container">
          <label htmlFor="phoneNumber">{t('phone_number')}:</label>
          {!isPhoneNumberValid && <p className="error-message">{t('phone_error_message')}</p>}
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberInput}
            placeholder={t('phone_placeholder')}
            maxLength="10"
          />
          <div className="delete-confirm-buttons">
            <button className="delete" onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrash} size="lg" className="icon" />
              {t('delete')}
            </button>
            <button className="confirm" onClick={handleConfirm}>
              <FontAwesomeIcon icon={faCheck} size="lg" className="icon" />
              {t('confirm')}
            </button>
          </div>
        </div>

        <div className="number-keypad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0].map((num, index) => (
            <button
              key={index}
              className={`key ${num === "" ? "blank" : ""}`}
              onClick={() => num !== "" && setPhoneNumber(phoneNumber + num)}
              disabled={num === ""}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VerifyID;
