import { CheckboxProps } from "./types";
import s from "./Checkbox.module.scss";

export const Checkbox = ({ checked, changeValue }: CheckboxProps) => {
  return (
    <>
      <div
        className={`${s.checkbox} ${checked ? s.checked : ""}`}
        onClick={changeValue}
      ></div>
    </>
  );
};
