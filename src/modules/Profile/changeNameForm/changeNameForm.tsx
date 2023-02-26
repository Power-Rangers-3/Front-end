import { yupResolver } from '@hookform/resolvers/yup';

import { SubmitHandler, useForm } from 'react-hook-form';
import { getUser, useAppSelector, useAppDispatch } from 'store';
import { renameAction } from 'store/actions';

import { schema } from '../data/changeNameScheme';
import styles from '../styles/styles.module.scss';
import { ChangeNameType } from '../types/changeNameType';
import { Input } from '../UI';

export const ChangeNameForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ChangeNameType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { name, fullname } = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<ChangeNameType> = (data) =>
    dispatch(renameAction(data))
      .unwrap()
      .then(() => {
        reset();
      });

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
      <button type="submit" className={styles.button}>
        Сохранить
      </button>
    </form>
  );
};
