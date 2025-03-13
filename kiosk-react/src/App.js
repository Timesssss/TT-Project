import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';

import Home from './components/pages/Home';
import VerifyIdentity from './components/pages/VerifyIdentity';
import ThaiorForeigner from './components/pages/ThaiorForeigner';
import EnterIDnumThai from './components/pages/EnterIDthai';
import EnterIDPassport from './components/pages/EnterIDPassport';

import Clinic from './components/pages/Clinic';
import QueueType from './components/pages/QueueType';

import Payment from './components/pages/Payment';

import ViewStoredData from './components/StoredData/ViewStoredData';
import Confirm from './components/pages/Confirm';

import ManualPage from './components/pages/ManualPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n'; // Import i18n setup

function App() {
  const [sharedData, setSharedData] = useState(null);
  const [isRunningInWebView, setIsRunningInWebView] = useState(false);

  // เช็คว่า React รันอยู่ใน C# WebView หรือไม่
  useEffect(() => {
    if (window.chrome && window.chrome.webview) {
      console.log("Running inside C# WebView!");
      setIsRunningInWebView(true);
    } else {
      console.log("Running in a normal browser.");
    }
  }, []);

  const handleDataUpdate = (data) => {
    setSharedData(data);
  };

  return (
    <Router>
      <Header />
      <div className="app-container">
        {isRunningInWebView}
        <Routes>
          {/* Step 1--Verify Identity */}
          <Route path="/" element={<Home />} />
          <Route path="/verify-identity" element={<VerifyIdentity />} />
          <Route path="/thai-or-foreigner" element={<ThaiorForeigner />} />
          <Route path="/enter-id-thai" element={<EnterIDnumThai />} />
          <Route path="/enter-id-passport" element={<EnterIDPassport />} />

          {/* Step 2--Choose QueueType and Clinic */}
          <Route path="/queue" element={<QueueType />} />
          <Route path="/clinic" element={<Clinic />} />

          {/* Step 3--Confirm Information (Payment Method) */}
          <Route path="/payment" element={<Payment />} />

          {/* Step 4--View Stored Data */}
          <Route
            path="/view-stored-data"
            element={<ViewStoredData onDataUpdate={handleDataUpdate} />}
          />
          <Route path="/confirm" element={<Confirm data={sharedData} />} />

          <Route path="/manual" element={<ManualPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
