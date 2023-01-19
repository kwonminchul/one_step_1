import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import CreateUserUI from "./createUser01.presenter";
import { CREATE_USER } from "./createUser01.queries";
import { ICreateUserProps } from "./createUser01.types";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup
    .string()
    .matches(
      /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/gi,
      "이메일(@, com, net 등)을 입력해주세요"
    ),
  password: yup.string().matches(/[^A-Za-z-8$]/gi, "특수문자를 포함해 주세요"),
  name: yup.string().required("필수 정보입니다."),
});

export default function CreateUserPage(props: ICreateUserProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onClickLogo = () => {
    router.push(`/`);
  };

  const onClickButton = async (data: any) => {
    console.log(data);
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            ...data,
          },
        },
      });
      console.log(result.data?.createUser.email);
      alert("회원가입을 축하드립니다!");
      router.push(`/`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickCancel = () => {
    router.push(`/`);
  };

  const onClickLogin = () => {
    router.push("/loginUser");
  };

  return (
    <CreateUserUI
      onClickLogo={onClickLogo}
      onClickButton={onClickButton}
      onClickCancel={onClickCancel}
      data={props.data}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickLogin={onClickLogin}
    />
  );
}
