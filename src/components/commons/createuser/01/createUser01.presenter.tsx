import Link from "next/link";
import * as O from "./createUser01.styles";
import { ICreateUserUIProps } from "./createUser01.types";

export default function CreateUserUI(props: ICreateUserUIProps) {
  return (
    <O.Wrapper>
      <O.LoginTitle>
        <O.ETitle>JOIN MEMBER</O.ETitle>
      </O.LoginTitle>
      <form onSubmit={props.handleSubmit(props.onClickButton)}>
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
            <O.InputWrapper>
              <O.Label>비밀번호 확인</O.Label>
              <O.UserPasswordCk
                id="passwordCk"
                type="password"
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                {...props.register("password")}
              />
            </O.InputWrapper>
            <O.InputWrapper>
              <O.Label>이름</O.Label>
              <O.UserName
                id="name"
                type="text"
                placeholder="Ex)홍길동"
                {...props.register("name")}
              />
            </O.InputWrapper>
          </O.InputBox>
        </O.LoginWrapper>
        <O.ButtonWrapper>
          <O.CancelButton onClick={props.onClickCancel}>취소</O.CancelButton>
          <O.CreateButton type="submit">확인</O.CreateButton>
        </O.ButtonWrapper>
      </form>
    </O.Wrapper>
  );
}
