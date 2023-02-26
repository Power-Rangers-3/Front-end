import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'modules/Auth/UI';
import { isFormFilled } from 'modules/Auth/utils/isFormFilled';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getUser, useAppSelector } from 'store';

import { scheme } from '../data';
import styles from '../styles/styles.module.scss';
import { ChangeNameType } from '../types';

export const ChangeNameForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ChangeNameType>({
    mode: 'onChange',
    resolver: yupResolver(scheme),
  });
  const { name, fullname } = useAppSelector(getUser);
  const [isNameChanged, setIsNameChanged] = useState(false);

  const onSubmit: SubmitHandler<any> = () => {
    setIsNameChanged(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputGroupWrapper}>
        <Input
          register={register}
          id="name"
          label="Имя пользователя"
          error={errors.name?.message}
          placeholder={name || ''}
        />
        <Input
          register={register}
          id="fullname"
          label="Фамилия пользователя"
          error={errors.fullname?.message}
          placeholder={fullname || ''}
        />
      </div>
      <button
        type="submit"
        className={styles.button}
        disabled={!!(Object.keys(errors).length || isFormFilled(getValues()))}
      >
        Сохранить
      </button>
      {isNameChanged && <p className={styles.success}>Имя и фамилия пользователя успешно изменены</p>}
    </form>
  );
};
