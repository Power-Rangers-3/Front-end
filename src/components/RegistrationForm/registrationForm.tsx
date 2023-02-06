import { Visibility, VisibilityOff } from '@mui/icons-material';
import MailOutline from '@mui/icons-material/MailOutline';
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from '@material-ui/core';

import { useForm } from 'react-hook-form';

import { SubmitHandler } from 'react-hook-form/dist/types';

import { yupResolver } from '@hookform/resolvers/yup';

import React, { useState } from 'react';

import { useAppDispatch, setUser } from 'store';

import styles from './registrationForm.styles.module.scss';

import { FormDataType } from './registrationForm.types';
import { schema } from './data/registrationScheme';
import { userRegistration } from './api/userRegistration';

export const RegistrationForm = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] =
    useState<boolean>(false);
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
        console.log('Регистрация прошла успешно');
        dispatch(setUser(data));
      })
      .catch();
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3>Registration</h3>

      <TextField
        className={styles.userNameField}
        {...register('username')}
        id="username"
        variant="outlined"
        placeholder="User name"
        helperText={errors.username ? errors.username?.message : null}
      />

      <TextField
        className={styles.userNameField}
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
        className={styles.userNameField}
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

      <TextField
        className={styles.userNameField}
        {...register('confirmPassword')}
        id="confirmPassword"
        variant="outlined"
        placeholder="Повторите пароль"
        type={isShowConfirmPassword ? 'text' : 'password'}
        helperText={
          errors.confirmPassword ? errors.confirmPassword?.message : null
        }
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setIsShowConfirmPassword(true)}
                onMouseUp={() => setIsShowConfirmPassword(false)}
                edge="end"
              >
                {isShowConfirmPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button type="submit">Зарегистрироваться</Button>
    </form>
  );
};
