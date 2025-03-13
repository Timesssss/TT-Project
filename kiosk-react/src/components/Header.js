import React, { useState, useEffect } from 'react';
import './Styles/Header.css';
import logo from '../components/images/trangskin_logo.png';

const Header = () => {
  const [dateTime, setDateTime] = useState('');
  const [clickCount, setClickCount] = useState(0);  // ติดตามจำนวนการคลิก

  // Function to format the date and time
  const formatDateTime = () => {
    const now = new Date();
    const optionsDate = { 
      day: 'numeric', 
      month: 'long', // 'long' will give the full month name like มกราคม
      year: 'numeric', 
      calendar: 'buddhist', 
      timeZone: 'Asia/Bangkok' 
    };
    const optionsTime = { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Bangkok', hour12: false };
    
    const thaiDate = new Intl.DateTimeFormat('th-TH', optionsDate).format(now);
    const thaiTime = new Intl.DateTimeFormat('th-TH', optionsTime).format(now);
    
    return { date: thaiDate, time: `${thaiTime} น.` }; // Return date and time as separate properties
  };

  // Update the date and time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(formatDateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // ฟังก์ชันที่จะถูกเรียกเมื่อคลิกที่ logo
  const handleLogoClick = () => {
    setClickCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount === 5) {
        // ส่งข้อความไปยัง C# เมื่อคลิกครบ 5 ครั้ง
        window.chrome.webview.postMessage("exit");  // ส่งข้อความไปยัง C#
      }
      return newCount;
    });
  };

  return (
    <header className="header">
      <div className="header-overlay">
        <img 
          src={logo} 
          alt="Logo" 
          className="header-logo" 
          onClick={handleLogoClick}  // เพิ่ม event handler
        />
        <div className="header-date-time">
          {/* Render date and time on separate lines */}
          <div>{dateTime.date}</div>
          <div>{dateTime.time}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
