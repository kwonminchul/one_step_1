import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import { IUser } from "../../../../commons/types/generated/types";
import { withAuth } from "../../hocs/withAuth";
import * as O from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  const router = useRouter();
  const [userInfo] = useRecoilState<IUser | undefined>(userInfoState);

  return (
    <O.Wrapper>
      <O.TopTitle>
        <O.MainLogo onClick={props.onClickLogo} src="/dingcologo.png" />
        {props.accessToken ? (
          <>
            <O.UserPoint onClick={props.onClickPaymant}>
              {userInfo?.name}님 포인트
              {userInfo?.userPoint?.amount}P
            </O.UserPoint>
            <O.Payment onClick={props.onClickPaymant}>충전</O.Payment>
          </>
        ) : (
          <></>
        )}
        <O.MainTitle>
          <O.Title
            onClick={
              userInfo?._id
                ? props.onClickMoveToLogout
                : props.onClickMoveToLogin
            }
          >
            {userInfo?._id ? "로그아웃" : "로그인"}
          </O.Title>
          <O.Title onClick={props.onClickMoveToCreateUser}>회원가입</O.Title>
          <O.Title>장바구니</O.Title>
        </O.MainTitle>
      </O.TopTitle>
    </O.Wrapper>
  );
}

// export default withAuth(LayoutHeaderUI);
