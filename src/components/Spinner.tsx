import React from 'react';
import '../styles/Spinner.scss'; // Подключаем стили для спиннера

const Spinner: React.FC = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
