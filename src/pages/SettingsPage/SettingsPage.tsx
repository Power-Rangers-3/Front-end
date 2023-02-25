import { yupResolver } from '@hookform/resolvers/yup';
import { uploadedIcon } from 'assets';
import { schema } from 'modules/Auth/data/ChangePassword/ChangePassword';
import { RegisterUserType } from 'modules/Auth/types';
import { Input } from 'modules/Auth/UI';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './styles.module.scss';

export const SettingsPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<RegisterUserType> = (data) => console.log(data);

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
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputGroupWrapper}>
            <Input id="username" name="username" register={register} iconStart placeholder="Имя и фамилия">
              <h5 className={styles.form__title}>Имя пользователя</h5>
            </Input>
            <Input id="email" iconStart placeholder="Email" register={register}>
              <h5 className={styles.form__title}>Email адрес</h5>
            </Input>
          </div>
        
          <button type="button" className={styles.form__button}>
            Button
          </button>
          {errors.username && <span>{errors.username.message}</span>}
          {errors.email && <span className={styles.span}>{errors.email.message}</span>}
          <div className={styles.inputGroupWrapper}>
            <Input register={register} id="password" placeholder="Старый пароль" type="password">
              <h5 className={styles.form__title}>Старый пароль</h5>
            </Input>
            <Input register={register} id="password" placeholder="Новый пароль" type="password">
              <h5 className={styles.form__title}>Новый пароль</h5>
            </Input>
            <Input register={register} id="password" placeholder="Подтверждение нового пароля" type="password">
              <h5 className={styles.form__title}>Подтверждение нового пароля</h5>
            </Input>
          </div>
          <button type="button" className={styles.form__button}>
            Button
          </button>
        </form>
      </div>
    </div>
  );
};
