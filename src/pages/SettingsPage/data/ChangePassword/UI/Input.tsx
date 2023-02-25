/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { InputType } from './input';
import { WarningIcon, VisibilityIcon, VisibilityOffIcon } from '../UI/assets/index';

import styles from './styles.module.scss';

export const Input = ({
  children,
  label,
  error,
  Icon,
  iconStart = false,
  register,
  id,
  placeholder = '',
  type = 'text',
  ...otherProps
}: InputType) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(type !== 'password');

  const handleClick = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className={styles.wrapper}>
      {children}
      {label && <label htmlFor={id}>{label}</label>}
      <div className={error ? `${styles.inputWrapper} ${styles.warningInput}` : styles.inputWrapper}>
        {Icon && iconStart && <span className={styles.marginRight}>{Icon}</span>}
        <input
          className={styles.input}
          id={id}
          placeholder={placeholder}
          autoComplete="on"
          type={
            // eslint-disable-next-line no-nested-ternary
            type !== 'password' ? type : isShowPassword ? 'text' : 'password'
          }
          {...otherProps}
          {...register(id || { email: '', username: '', password: '' })}
        />
        {Icon && !iconStart && <span className={styles.marginLeft}>{Icon}</span>}
        {type === 'password' ? (
          <span className={`${styles.iconEnd} ${styles.iconColor}`} onMouseDown={handleClick} onMouseUp={handleClick}>
            {isShowPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </span>
        ) : null}

        {error ? (
          <span className={styles.warningText} onClick={handleClick}>
            <WarningIcon /> {error}
          </span>
        ) : null}
      </div>
    </div>
  );
};
