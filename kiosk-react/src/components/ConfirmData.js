// ConfirmData.js
import React, { useEffect, useState } from 'react';
import StoredData from './StoredData/StoredData';
import { useTranslation } from 'react-i18next';
import './Styles/ConfirmData.css';

import PrintQueue from './video/PrintQueue.mp4';

const Confirm = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(null);

  const fetchData = () => {
    const userType = StoredData.get('userType');
    const allData = {
      idNumber: StoredData.get('idNumber'),
      passportID: StoredData.get('passportID'),
      phoneNumber: StoredData.get('phoneNumber'),
      queueType: StoredData.get('queueType'),
      selectedClinic: StoredData.get('selectedClinic'),
      paymentMethod: StoredData.get('paymentMethod'),
      userType,
    };
    setData(allData);
  };

  useEffect(() => {
    fetchData();  // ใช้ฟังก์ชัน fetchData เพื่อดึงข้อมูลจาก localStorage หรือ React State
  
    const handleStorageChange = () => {
      fetchData();  // หากข้อมูลใน localStorage เปลี่ยนแปลง ก็จะดึงข้อมูลใหม่
    };
  
    window.addEventListener('storage', handleStorageChange);
  
    // ฟังข้อมูลจาก C# ผ่าน WebView
    const handleMessageFromCSharp = (e) => {
      const data = JSON.parse(e.data); // แปลงข้อมูลที่ส่งมาเป็น JSON
      setData(data);  // อัพเดตข้อมูลใน React
    };
  
    window.chrome?.webview?.addEventListener('message', handleMessageFromCSharp);
  
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.chrome?.webview?.removeEventListener('message', handleMessageFromCSharp);
    };
  }, [t]);
  

  if (!data) {
    return <div>{t('no_data_to_confirm')}</div>;
  }

  return (
    <div className="confirm-data-container">
      <h1 className="greeting">{t('greeting')} Hello Kitty</h1>
      <div className="queue-video-container">
        <video autoPlay muted loop controls width="100%" className="receive-queue-video">
          <source src={PrintQueue} type="video/mp4" />
          {t('video_not_supported')}
        </video>
      </div>
      <button className="queue-btn">คิว A123</button>
      <div className="data-display">
        <div className="data-item">
          <span className="data-key">{t('your_hn')}:</span>
          <span className="data-value">3456789</span>
        </div>
        <div className="data-item">
          <span className="data-key">{t('your_id')}:</span>
          <span className="data-value">
            {data.userType === 'Thai' ? data.idNumber : data.passportID}
          </span>
        </div>
        <div className="data-item">
          <span className="data-key">{t('your_phone')}:</span>
          <span className="data-value">{data.phoneNumber}</span>
        </div>
        <div className="data-item">
          <span className="data-key">{t('your_queue_type')}:</span>
          <span className="data-value">{data.queueType}</span>
        </div>
        <div className="data-item">
          <span className="data-key">{t('your_clinic_selected')}:</span>
          <span className="data-value">{data.selectedClinic}</span>
        </div>
        <div className="data-item">
          <span className="data-key">{t('your_payment_method')}:</span>
          <span className="data-value">{data.paymentMethod}</span>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
