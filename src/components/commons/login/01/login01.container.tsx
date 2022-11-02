import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import {
  IMutation,
  IMutationLoginUserExampleArgs,
} from "../../../../commons/types/generated/types";
import Login01UI from "./login01.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER_EXAMPLE } from "./login01.queries";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const initialImput = { email: "", password: "" };

const schema = yup.object({
  email: yup
    .string()
    .matches(
      /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/gi,
      "이메일 아이디를 @까지 정확하게 입력해 주세요."
    ),
  password: yup
    .string()
    .matches(
      /[^A-Za-z-8$]/gi,
      "영문+숫자 조합 8~16자리의 비밀번호를 입력해 주세요."
    ),
});

export default function LoginPage() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const router = useRouter();
  const client = useApolloClient();
  const [isActive, setIsActive] = useState(false);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER_EXAMPLE);

  // const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  //   setIsActive(true);
  // };

  // const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  //   setIsActive(true);
  // };

  const onClickLogin = async (data) => {
    // 1. 로그인해서 토큰 받아오기
    const result = await loginUserExample({
      variables: { ...data },
    });
    const accessToken = result.data?.loginUserExample.accessToken;
    console.log(accessToken);
    if (!accessToken) {
      alert("로그인에 실패하였습니다. 다시 시도해 주세요.");
      return;
    }

    // 2. 로그인 토큰으로 유저정보 받아오기
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data?.fetchUserLoggedIn; // { name: 철수, email: a@a.com }

    // 3. 글로벌 스테이트에 저장하기
    setAccessToken(accessToken);
    setUserInfo(userInfo);
    localStorage.setItem("accessToken", accessToken); // 임시사용(나중에 지울 예정)
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    // 4. 로그인 성공페이지로 이동하기
    alert("로그인에 성공하였습니다!!");
    router.push("/boards");
  };

  const onClickCreate = () => {
    router.push("/createUser");
  };

  const onClickLogo = () => {
    router.push("/");
  };

  return (
    <Login01UI
      // onChangeEmail={onChangeEmail}
      // onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      onClickCreate={onClickCreate}
      isActive={isActive}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickLogo={onClickLogo}
    />
  );
}
