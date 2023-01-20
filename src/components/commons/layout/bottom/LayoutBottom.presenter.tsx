import * as O from "./LayoutBottom.styles";

export default function LayoutBottomUI() {
  return (
    <O.Wrapper>
      <O.MainTitle src="/oipologobot.png" />
      <O.SubTitleTop>
        <O.SubTitleOne>(주)OIPO LAB</O.SubTitleOne>
        <O.SubTitleOne>대표:권민철</O.SubTitleOne>
      </O.SubTitleTop>
      <O.SubTitleMid>
        <O.SubTitle>
          사업자등록번호 123-45-67891 <br />
          주소:서울특별시 특별구 특별한로 777, OIPO LAB <br />
        </O.SubTitle>
      </O.SubTitleMid>
      <O.SubTitleBottom>
        <O.SubTitleOne>개인정보처리방침</O.SubTitleOne>
        <O.SubTitleOne>서비스이용약관</O.SubTitleOne>
      </O.SubTitleBottom>
      <O.SubTitleLtd>
        <O.SubTitle>Copyright © 2022. OIPO LAB.Ltd.</O.SubTitle>
      </O.SubTitleLtd>
    </O.Wrapper>
  );
}
