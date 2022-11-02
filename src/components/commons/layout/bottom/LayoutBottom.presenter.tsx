import * as O from "./LayoutBottom.styles";

export default function LayoutBottomUI() {
  return (
    <O.Wrapper>
      <O.MainTitle src="/dingcologo.png" />
      <O.SubTitleTop>
        <O.SubTitleOne>(주)딩코</O.SubTitleOne>
        <O.SubTitleOne>대표:안우엽</O.SubTitleOne>
      </O.SubTitleTop>
      <O.SubTitleMid>
        <O.SubTitle>
          사업자등록번호 717-87-02373 <br />
          주소:서울특별시 구로구 디지털로 300, 패스트파이브 <br />
          학원등록번호:제 5845호
        </O.SubTitle>
      </O.SubTitleMid>
      <O.SubTitleBottom>
        <O.SubTitleOne>개인정보처리방침</O.SubTitleOne>
        <O.SubTitleOne>서비스이용약관</O.SubTitleOne>
      </O.SubTitleBottom>
      <O.SubTitleLtd>
        <O.SubTitle>Copyright © 2022. Dingco Corp., Ltd.</O.SubTitle>
      </O.SubTitleLtd>
    </O.Wrapper>
  );
}
