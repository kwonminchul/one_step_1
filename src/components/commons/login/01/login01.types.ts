// import { ChangeEvent, MouseEvent } from "react";

import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface ILogin01UIProps {
  // onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  // onClickLogin: (event: MouseEvent<HTMLSpanElement>) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickLogin: () => void;
  onClickCreate: () => void;
  isActive: boolean;
  onClickLogo: () => void;
}
