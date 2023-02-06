import { Visibility, VisibilityOff } from '@mui/icons-material';
import MailOutline from '@mui/icons-material/MailOutline';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';

import { useForm } from 'react-hook-form';

import { SubmitHandler } from 'react-hook-form/dist/types';

import { yupResolver } from '@hookform/resolvers/yup';

import React, { useState } from 'react';

import { useAppDispatch, setUser } from 'store';

import { ReactComponent as Facebook } from './assets/icons/Facebook.svg';
import { ReactComponent as Google } from './assets/icons/Google.svg';
import { ReactComponent as VK } from './assets/icons/VK.svg';

import styles from './registrationForm.styles.module.scss';

import { FormDataType } from './registrationForm.types';
import { schema } from './data/registrationScheme';
import { userRegistration } from './api/userRegistration';
import { FormButton } from './UI/FormButton/FormButton';

export const RegistrationForm = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<FormDataType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    dispatch(setUser(data));
    const formData = getValues();
    userRegistration(formData)
      .then(() => {
        dispatch(setUser(data));
      })
      .catch();
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3>Регистрация</h3>
      <TextField
        className={styles.form__field}
        {...register('email')}
        id="email"
        variant="outlined"
        placeholder="Email"
        helperText={errors.email ? errors.email?.message : null}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutline />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        className={styles.form__field}
        {...register('username')}
        id="username"
        variant="outlined"
        placeholder="Имя и фамилия"
        helperText={errors.username ? errors.username?.message : null}
      />
      <TextField
        className={styles.form__field}
        {...register('password')}
        id="password"
        variant="outlined"
        placeholder="Пароль"
        type={isShowPassword ? 'text' : 'password'}
        helperText={errors.password ? errors.password?.message : null}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setIsShowPassword(true)}
                onMouseUp={() => setIsShowPassword(false)}
                edge="end"
              >
                {isShowPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <FormButton type="submit" invert>
        Зарегистрироваться
      </FormButton>
      <p className={styles.form__sideCenter}>или</p>
      <div className={styles.form__socialWrapper}>
        <FormButton>
          <Facebook />
          Facebook
        </FormButton>
        <FormButton>
          <Google /> Google
        </FormButton>
        <FormButton>
          <VK /> VK
        </FormButton>
      </div>
      <p>
        Нажимая “Зарегистрироваться”, Вы соглашаетесь с условиями{' '}
        <a href="/">лицензионного договора, политикой конфиденциальности</a> и
        предоставляете согласие на обработку персональных данных
      </p>
      <p className={styles.form__enter}>
        Уже есть аккаунт? <a href="/">Войти</a>
      </p>
    </form>
  );
};
