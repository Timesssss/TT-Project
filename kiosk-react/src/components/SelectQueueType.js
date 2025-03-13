import React, { useState } from 'react';
import { Grid2 } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './Styles/SelectQueueType.css';
import generalQueueImage from './images/walkin-icon.png';
import priorityQueueImage from './images/fasttrack-icon.png';
import specialistQueueImage from './images/onlineMeet-icon.png';

import StoredData from './StoredData/StoredData';

const SelectQueueType = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // State to track selected queue type
  const [selectedQueue, setSelectedQueue] = useState(null);

  const queueTypes = [
    { id: 1, title: t('general_queue'), description: t('general_queue_desc'), image: generalQueueImage },
    { id: 2, title: t('priority_queue'), description: t('priority_queue_desc'), image: priorityQueueImage },
    { id: 3, title: t('specialist_queue'), description: t('specialist_queue_desc'), image: specialistQueueImage },
  ];

  // Handle queue card click
  const handleQueueClick = (queue) => {
    setSelectedQueue(queue); // Store selected queue in state
    StoredData.set('queueType', queue.title); // Save the selected queue type to StoredData

    // Add a delay before navigating to the clinic page
    setTimeout(() => {
      navigate('/clinic'); // Navigate to SelectClinic.js page
    }, 500); // Delay of 500ms
  };

  return (
    <div className="select-queue-container">
      <h2 className="select-queue-heading">{t('select_queue_type')}</h2>
      <Grid2 container spacing={2} className="queue-container">
        {queueTypes.map(queue => (
          <Grid2 item xs={12} sm={6} md={4} key={queue.id}>
            <div
              className={`queue-card ${selectedQueue?.id === queue.id ? 'clicked' : ''}`}
              onClick={() => handleQueueClick(queue)}
            >
              <div className="queue-card-content-horizontal">
                <img src={queue.image} alt={`${queue.title} icon`} className="queue-image" />
                <div>
                  <h3 className="queue-title">{queue.title}</h3>
                  <p className="queue-description">{queue.description}</p>
                </div>
              </div>
            </div>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default SelectQueueType;
