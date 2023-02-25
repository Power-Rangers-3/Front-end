import { uploadedIcon } from 'assets';

import { ChangeNameForm } from 'modules/Profile/changeNameForm/changeNameForm';
import { NewPasswordForm } from 'modules/Profile/changePasswordForm/changePasswordForm';
import { useState } from 'react';

import styles from './styles.module.scss';

export const SettingsPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImageUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadButtonClick = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      // Add logic to send the file to the server here
      console.log('Sending file to server...');
    } else {
      console.log('Файл не выбран');
    }
  };

  return (
    <div className={styles.settings}>
      <div className={styles.container}>
        <h5 className={styles.settings__title}>Настройки</h5>
        <h3 className={styles.settings__subtitle}>Редактирование профиля</h3>
        <div className={styles.settings__wrapper}>
          {imageUrl && <img src={imageUrl} className={styles.settings__avatar} alt="Avatar" />}
          <label htmlFor="file-input" className={styles.settings__button}>
            <img src={uploadedIcon} className={styles.settings__icon} alt="Avatar" />
            Загрузить фотографию профиля
            <input
              id="file-input"
              className={styles.settings__input}
              type="file"
              accept="*/*"
              onChange={handleFileInputChange}
              onClick={handleUploadButtonClick}
            />
          </label>
        </div>
        <ChangeNameForm />
        <NewPasswordForm />
      </div>
    </div>
  );
};
