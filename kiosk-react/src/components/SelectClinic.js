import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import StoredData from './StoredData/StoredData';
import './Styles/SelectClinic.css';

const clinics = [
  { name: 'ผู้ป่วยนอกทั่วไป', translationKey: 'general_patients' },
  { name: 'สะเก็ดเงิน', translationKey: 'psoriasis' },
  { name: 'รับยาเดิม', translationKey: 'medication_refill' },
  { name: 'คลินิกสูงวัย', translationKey: 'geriatric_clinic' },
  { name: 'คลินิกศัลยกรรมและตรวจรักษาพิเศษ', translationKey: 'surgery_special_medical_clinic' },
  { name: 'คลินิกศัลยกรรม Laser', translationKey: 'laser_surgery' },
  { name: 'คลินิกรังสีรักษา ฉายแสง', translationKey: 'radiation_therapy' },
  { name: 'คลินิก ARI', translationKey: 'ari_clinic' },
  { name: 'คลินิกตุ่มน้ำ', translationKey: 'pemphigus' },
  { name: 'เวชสำอาง', translationKey: 'cosmeceutical' },
  { name: 'วัคซีน Corona', translationKey: 'corona_vaccine' },
];

const SelectClinic = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClinicClick = (clinicName) => {
    StoredData.set('selectedClinic', clinicName); // Store the selected clinic in StoredData
    console.log(`Clinic selected: ${clinicName}`); // Debugging log
    navigate('/payment'); // Navigate to the next page (or wherever required)
  };

  return (
    <div className="clinic-section">
      <div className="select-title">{t('select_clinic')}</div>
      <div className="clinic-container">
        {clinics.map((clinic, index) => (
          <div
            key={index}
            className="clinic-card"
            onClick={() => handleClinicClick(clinic.name)} // Handle click and store clinic name
          >
            <div className="clinic-name">{t(clinic.translationKey)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectClinic;
