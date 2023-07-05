import { ButtonHTMLAttributes } from "react";
import { ButtonSize, ButtonVariant } from "./constants";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: ButtonVariant;
  size?: ButtonSize;
}
