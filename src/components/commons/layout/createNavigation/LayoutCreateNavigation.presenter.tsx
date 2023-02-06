import Link from "next/link";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import * as O from "./LayoutCreateNavigation.styles";

export default function LayoutCreateNavigationUI(
  props: LayoutCreateNavigationUI
) {
  const [userInfo] = useRecoilState<IUser>(userInfoState);

  return (
    <O.Wrapper>
      <O.MainTitle>
        <O.MainLogo onClick={props.onClickLogo} src="/oipologobot.png" />
        <Link href="/">
          <O.Title>NEW</O.Title>
        </Link>
        <Link href="/boards">
          <O.Title>CATEGORY</O.Title>
        </Link>
        <Link href="/communi">
          <O.Title>LIFE</O.Title>
        </Link>
        <O.Title>BEAUTY</O.Title>
        <O.Title>|</O.Title>
        <O.Title>#STYLE</O.Title>
        <O.Title>EVENT</O.Title>
        {props.accessToken ? (
          <O.UserInfo>{userInfo?.name}님</O.UserInfo>
        ) : (
          <></>
        )}
        <O.UserInfo
          onClick={
            userInfo?._id ? props.onClickMoveToLogout : props.onClickMoveToLogin
          }
        >
          {userInfo?._id ? "로그아웃" : "로그인"}
        </O.UserInfo>
        <O.Basket>장바구니</O.Basket>
      </O.MainTitle>
    </O.Wrapper>
  );
}
