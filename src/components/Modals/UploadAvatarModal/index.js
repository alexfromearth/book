import React from 'react';
import styles from './styles.module.sass';

function UploadAvatarModal({ onFileChange, handleUploadCancel }) {
  return (
    <div className={styles.wrapper}>
      <h3>Аватар модель</h3>
      <input type="file" onChange={onFileChange} />
      <div>
        <button type="button" onClick={handleUploadCancel}>Отменить</button>
      </div>
    </div>
  );
}

export default UploadAvatarModal;
