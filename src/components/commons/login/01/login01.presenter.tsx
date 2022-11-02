import Link from "next/link";
import * as O from "./login01.styles";
import { ILogin01UIProps } from "./login01.types";

export default function Login01UI(props: ILogin01UIProps) {
  return (
    <O.Wrapper>
      <O.MainTitle>
        <O.TitleLogo onClick={props.onClickLogo} src="/whitelogo.png" />
        <Link href="/boards">
          <O.Title>BRAND</O.Title>
        </Link>
        <O.Title>CATEGORY</O.Title>
        <O.Title>LIFE</O.Title>
        <O.Title>BEAUTY</O.Title>
        <O.Title>|</O.Title>
        <O.Title>#STYLE</O.Title>
        <O.Title>EVENT</O.Title>
        <O.TitleCr onClick={props.onClickCreate}>회원가입</O.TitleCr>
        <O.TitleBa>장바구니</O.TitleBa>
      </O.MainTitle>
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
