import styles from './formButton.styles.module.scss';

export interface FormButtonType
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // eslint-disable-next-line react/require-default-props
  invert?: boolean;
}

export const FormButton = ({
  children,
  invert = false,
  ...otherProps
}: FormButtonType) => (
  <button
    className={invert ? styles.invertButton : styles.button}
    type="button"
    {...otherProps}
  >
    {children}
  </button>
);
