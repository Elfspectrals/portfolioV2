import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'warning' | 'success' | 'outline';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'primary',
  className,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        'btn',
        `btn--${variant}`,
        className
      )}
      {...rest}
    >
      {text}
    </button>
  );
};