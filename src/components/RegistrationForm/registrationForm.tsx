import { useForm } from 'react-hook-form';

import { SubmitHandler } from 'react-hook-form/dist/types';

import { yupResolver } from '@hookform/resolvers/yup';

import React from 'react';

import { useAppDispatch, setUser } from 'store';

import { Link, NavLink } from 'react-router-dom';

import { ROUTE } from 'router';

import { ReactComponent as Facebook } from './assets/icons/Facebook.svg';
import { ReactComponent as Google } from './assets/icons/Google.svg';
import { ReactComponent as VK } from './assets/icons/VK.svg';
import { ReactComponent as Mail } from './assets/icons/Mail.svg';

import styles from './registrationForm.styles.module.scss';
import buttonStyles from './UI/buttonStyles/button.styles.module.scss';

import { schema } from './data/registrationScheme';
// import { userRegistration } from './api/userRegistration';
import { RegisterUserType } from './registrationForm.types';
import { Input } from './UI/Input/Input';

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterUserType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<RegisterUserType> = (data) => {
    dispatch(setUser(data));
    // request for backend
    // userRegistration(data)
    //   .then(() => {
    //     dispatch(setUser(data));
    //   })
    //   .catch();
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3>Регистрация</h3>
      <div className={styles.inputGroupWrapper}>
        <Input
          register={register}
          id="email"
          Icon={<Mail />}
          iconStart
          placeholder="Email"
          error={errors.email ? errors.email?.message : ''}
        />

        <Input
          register={register}
          id="username"
          placeholder="Имя и фамилия"
          error={errors.username ? errors.username?.message : ''}
        />

        <Input
          register={register}
          id="password"
          placeholder="Пароль"
          type="password"
          error={errors.password ? errors.password?.message : ''}
        />
      </div>
      <button
        className={`${buttonStyles.button} ${buttonStyles.invertButton}`}
        type="submit"
        disabled={!!(errors.email || errors.password || errors.username)}
      >
        Зарегистрироваться
      </button>
      <p className={styles.sideCenter}>или</p>
      <div className={styles.socialWrapper}>
        <button className={buttonStyles.button} type="button">
          <Facebook />
          Facebook
        </button>
        <button className={buttonStyles.button} type="button">
          <Google /> Google
        </button>
        <button className={buttonStyles.button} type="button">
          <VK /> VK
        </button>
      </div>
      <p>
        Нажимая “Зарегистрироваться”, Вы соглашаетесь с условиями{' '}
        <NavLink to="/">
          лицензионного договора, политикой конфиденциальности
        </NavLink>{' '}
        и предоставляете согласие на обработку персональных данных
      </p>
      <p className={styles.enter}>
        Уже есть аккаунт? <Link to={ROUTE.SIGN_IN}>Войти</Link>
      </p>
    </form>
  );
};
