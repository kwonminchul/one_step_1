import Link from "next/link";
import * as O from "./login01.styles";
import { ILogin01UIProps } from "./login01.types";

export default function Login01UI(props: ILogin01UIProps) {
  return (
    <O.Wrapper>
      <O.LoginTitle>
        <O.ETitle>LOGIN</O.ETitle>
      </O.LoginTitle>
      <form onSubmit={props.handleSubmit(props.onClickLogin)}>
        <O.LoginWrapper>
          <O.InputBox>
            <O.InputWrapper>
              <O.Label>아이디</O.Label>
              <O.UserId
                id="id"
                type="text"
                placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
                {...props.register("email")}
              />
            </O.InputWrapper>
            <O.InputWrapper>
              <O.Label>비밀번호</O.Label>
              <O.UserPassword
                id="password"
                type="password"
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                {...props.register("password")}
              />
            </O.InputWrapper>
          </O.InputBox>
          <O.ButtonWrapper>
            <O.LoginButton isActive={props.formState.isValid}>
              로그인
            </O.LoginButton>
          </O.ButtonWrapper>
        </O.LoginWrapper>
      </form>
    </O.Wrapper>
  );
}
