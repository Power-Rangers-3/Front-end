import { useForm } from 'react-hook-form';

import { SubmitHandler } from 'react-hook-form/dist/types';

import { yupResolver } from '@hookform/resolvers/yup';

import { Link, useNavigate } from 'react-router-dom';

import { ROUTE } from 'router';

import { useState } from 'react';

import styles from './registrationForm.styles.module.scss';
import buttonStyles from './UI/buttonStyles/button.styles.module.scss';

import { FacebookIcon, GoogleIcon, VKIcon, MailIcon, ErrorIcon } from '../assets';

import { isFormFilled } from '../utils/isFormFilled';

import { schema } from '../data/signInScheme';

import { Input } from '../UI/Input/Input';
import { userRegistration } from '../api/UserRegistration';
import { SignInUserType } from '../types/signInUserType copy';
import { AuthErrorType } from '../types/authErrorType';

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignInUserType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [signInError, setSignInError] = useState<AuthErrorType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignInUserType> = (data) => {
    setIsLoading(true);
    userRegistration(data)
      .then(() => {
        navigate(ROUTE.HOME);
        setIsLoading(false);
      })
      .catch((error) => {
        setSignInError(error.message);
        setIsLoading(false);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3>Регистрация</h3>
      <div className={styles.inputGroupWrapper}>
        <Input
          register={register}
          id="email"
          Icon={<MailIcon />}
          iconStart
          placeholder="Email"
          error={errors.email ? errors.email?.message : ''}
        />

        <Input
          register={register}
          id="password"
          placeholder="Пароль"
          type="password"
          error={errors.password ? errors.password?.message : ''}
        />
        <Link to="/" className={styles.remindPassword}>
          Напомнить пароль
        </Link>
      </div>
      <button
        className={`${buttonStyles.button} ${buttonStyles.invertButton}`}
        type="submit"
        disabled={!!(Object.keys(errors).length || isLoading || isFormFilled(getValues()))}
      >
        Зарегистрироваться
      </button>
      {signInError && (
        <p className={styles.registrationError}>
          <ErrorIcon />
          {signInError.message}
        </p>
      )}
      <p className={styles.sideCenter}>или</p>
      <div className={styles.socialWrapper}>
        <button className={buttonStyles.button} type="button">
          <FacebookIcon />
          Facebook
        </button>
        <button className={buttonStyles.button} type="button">
          <GoogleIcon /> Google
        </button>
        <button className={buttonStyles.button} type="button">
          <VKIcon /> VK
        </button>
      </div>
      <p className={styles.enter}>
        <Link to={ROUTE.HOME}>Вернуться на главную страницу</Link>
      </p>
    </form>
  );
};
