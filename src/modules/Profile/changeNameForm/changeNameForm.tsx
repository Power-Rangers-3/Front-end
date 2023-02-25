import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'modules/Auth/UI';
import { isFormFilled } from 'modules/Auth/utils/isFormFilled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getUser, useAppSelector } from 'store';

import { userRename } from '../api/userRename';

import { schema } from '../data/changeNameScheme';
import styles from '../styles/styles.module.scss';
import { ChangeNameType } from '../types/changeNameType';

export const ChangeNameForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ChangeNameType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ChangeNameType> = (data) => userRename(data).then(() => console.log(data));

  const { name, fullname } = useAppSelector(getUser);

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
    </form>
  );
};
