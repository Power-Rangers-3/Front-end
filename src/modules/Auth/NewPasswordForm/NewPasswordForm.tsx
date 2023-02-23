import { useForm } from 'react-hook-form';

import { SubmitHandler } from 'react-hook-form/dist/types';

import { yupResolver } from '@hookform/resolvers/yup';

import { useState } from 'react';

import { useNavigate } from 'react-router';

import { ROUTE } from 'router';

import styles from '../styles.module.scss';
import buttonStyles from '../UI/buttonStyles/button.styles.module.scss';

import { schema } from '../data/newPasswordScheme';

import { NewPasswordType } from '../types';
import { Input } from '../UI/Input/Input';

import { isFormFilled } from '../utils/isFormFilled';

export const NewPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<NewPasswordType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<NewPasswordType> = () => {
    setIsLoading(true);
    navigate(ROUTE.SIGN_IN);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3>Восстановление пароля</h3>
      <div className={styles.inputGroupWrapper}>
        <Input
          register={register}
          id="password"
          label="Пароль"
          placeholder="******"
          type="password"
          error={errors?.password?.message || null}
        />
        <Input
          register={register}
          id="confirmPassword"
          label="Подтвердите пароль"
          placeholder="******"
          type="password"
          error={errors?.confirmPassword?.message || null}
        />
      </div>
      <button
        className={`${buttonStyles.button} ${buttonStyles.invertButton}`}
        type="submit"
        disabled={!!(Object.keys(errors).length || isLoading || isFormFilled(getValues()))}
      >
        Восстановить
      </button>
    </form>
  );
};
