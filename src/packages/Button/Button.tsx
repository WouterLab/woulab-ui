import s from "./Button.module.scss";
import { ButtonSize, ButtonVariant } from "./constants";
import { ButtonProps } from "./types";

export const Button = ({
  text,
  variant,
  size = ButtonSize.Medium,
}: ButtonProps) => {
  const getSize = () => {
    if (size === ButtonSize.Big) return s.big;
    else if (size === ButtonSize.Small) return s.small;
    else return s.medium;
  };

  const getVariant = () => {
    if (variant === ButtonVariant.Light) return s.light;
    else return s.dark;
  };

  return (
    <button className={`${s.wrapper} ${getSize()} ${getVariant()}`}>
      {text}
    </button>
  );
};
