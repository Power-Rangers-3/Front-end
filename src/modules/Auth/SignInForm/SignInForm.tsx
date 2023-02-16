import { useForm } from 'react-hook-form';

import { SubmitHandler } from 'react-hook-form/dist/types';

import { yupResolver } from '@hookform/resolvers/yup';

import { Link, useNavigate } from 'react-router-dom';

import { ROUTE } from 'router';

import { useEffect, useState } from 'react';

import { getUser, signInAction, useAppDispatch, useAppSelector } from 'store';

import { buttonStyles, Input } from '../UI';

import styles from '../styles.module.scss';

import { FacebookIcon, GoogleIcon, VKIcon, MailIcon, ErrorIcon } from '../assets';

import { isFormFilled } from '../utils/isFormFilled';

import { getToken } from '../api/getToken';
import { SignInUserType } from '../types';
import { schema } from '../data/signInScheme';

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

  const [tokenError, setTokenError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { isAuth } = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<SignInUserType> = (data) => {
    setIsLoading(true);
    getToken(data)
      .then(() => {
        dispatch(signInAction());
        setIsLoading(false);
      })
      .catch((error) => {
        setTokenError(error.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (isAuth) {
      navigate(`${ROUTE.HOME}`, { replace: true });
    }
  }, [isAuth, navigate]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3>Войти</h3>
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
        Войти
      </button>
      {tokenError && (
        <p className={styles.registrationError}>
          <ErrorIcon />
          {tokenError}
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
