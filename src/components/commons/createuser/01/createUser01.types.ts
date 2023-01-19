// import { ChangeEvent } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ICreateUserProps {
  data?: any;
}

export interface ISubmitButtonProps {
  // isActive: boolean;
}

export interface ICreateUserUIProps {
  // isActive: boolean;
  onClickCancel: () => void;
  onClickLogo: () => void;
  data?: any;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickButton: (data: any) => Promise<void>;
  onClickLogin: () => void;
}
