import Link from "next/link";
import * as O from "./LayoutLoginNavigation.styles";

export default function LayoutLoginNavigationUI(
  props: LayoutLoginNavigationUI
) {
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
        <O.Title>LIFE</O.Title>
        <O.Title>BEAUTY</O.Title>
        <O.Title>|</O.Title>
        <O.Title>#STYLE</O.Title>
        <O.Title>EVENT</O.Title>
        <O.UserCreate onClick={props.onClickCreate}>회원가입</O.UserCreate>
        <O.Basket>장바구니</O.Basket>
      </O.MainTitle>
    </O.Wrapper>
  );
}
