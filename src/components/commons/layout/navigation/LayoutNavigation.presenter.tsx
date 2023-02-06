import Link from "next/link";
import * as O from "./LayoutNavigation.styles";

export default function LayoutNavigationUI() {
  return (
    <O.Wrapper>
      <O.MainTitle>
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
      </O.MainTitle>
    </O.Wrapper>
  );
}
