import Link from "next/link";
import * as O from "./LayoutNavigation.styles";

export default function LayoutNavigationUI() {
  return (
    <O.Wrapper>
      <O.MainTitle>
        <Link href="/boards">
          <O.Title>BRAND</O.Title>
        </Link>
        <O.Title>CATEGORY</O.Title>
        <O.Title>LIFE</O.Title>
        <O.Title>BEAUTY</O.Title>
        <O.Title>|</O.Title>
        <O.Title>#STYLE</O.Title>
        <O.Title>EVENT</O.Title>
      </O.MainTitle>
    </O.Wrapper>
  );
}
