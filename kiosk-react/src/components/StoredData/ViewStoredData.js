//ViewStoredData.js
import React, { useEffect, useState } from 'react'; 
import { useTranslation } from 'react-i18next'; 
import StoredData from '../StoredData/StoredData';

const ViewStoredData = ({ onDataUpdate }) => {
  const { t } = useTranslation();
  const [storedData, setStoredData] = useState({});

  const fetchStoredData = () => {
    const data = {
      idNumber: StoredData.get('idNumber'),
      phoneNumber: StoredData.get('phoneNumber'),
      queueType: StoredData.get('queueType'),
      selectedClinic: StoredData.get('selectedClinic'),
      paymentMethod: StoredData.get('paymentMethod'),
    };
    
    setStoredData(data);
  
    if (onDataUpdate) {
      onDataUpdate(data); // Send data to App.js
    }
  
    // Send data to C# application (via WebView)
    if (window.chrome && window.chrome.webview) {
      window.chrome.webview.postMessage(data);
    }
  };
  
  useEffect(() => {
    fetchStoredData();

    const handleStorageChange = (e) => {
      if (
        e.key === null ||
        ['idNumber', 'phoneNumber', 'queueType', 'selectedClinic', 'paymentMethod'].includes(e.key)
      ) {
        fetchStoredData();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div>
      <h2>{t('stored_data')}</h2>
      {storedData.idNumber || storedData.phoneNumber || storedData.queueType || storedData.selectedClinic || storedData.paymentMethod ? (
        <div>
          {storedData.idNumber && <p>{t('id_number')}: {storedData.idNumber}</p>}
          {storedData.phoneNumber && <p>{t('phone_number')}: {storedData.phoneNumber}</p>}
          {storedData.queueType && <p>{t('queue_type')}: {t(storedData.queueType)}</p>}
          {storedData.selectedClinic && <p>{t('selected_clinic')}: {t(storedData.selectedClinic)}</p>}
          {storedData.paymentMethod && <p>{t('payment_method')}: {t(storedData.paymentMethod)}</p>}
        </div>
      ) : (
        <p>{t('no_data_stored')}</p>
      )}
    </div>
  );
};

export default ViewStoredData;