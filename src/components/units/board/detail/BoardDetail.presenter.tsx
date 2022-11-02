import * as O from "./BoardDetail.styles";
// import { v4 as uuidv4 } from "uuid";
import DOMPurify from "dompurify";

export default function BoardDetailUI(props: any) {
  console.log(props.data?.fetchUseditem);
  return (
    <O.Wrapper>
      <O.TopWrapper>
        <O.ImageWrapper>
          <O.Image
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
          />
        </O.ImageWrapper>
        <O.ItemWrapper>
          <O.NameWrapper>
            <O.Name>{props.data?.fetchUseditem?.name}</O.Name>
          </O.NameWrapper>
          <O.RemarksWrapper>
            <O.Remarks>{props.data?.fetchUseditem?.remarks}</O.Remarks>
            <O.UpdateIcon
              src={"/write.png"}
              onClick={props.onClickMoveToUseditemEdit}
            />
            <O.DeleteIcon src={"/delete.png"} onClick={props.onClickDelete} />
          </O.RemarksWrapper>
          <O.PriceWrapper>
            <O.PriceTop>
              <O.Sell>판매가</O.Sell>
              <O.Price>{props.data?.fetchUseditem?.price}</O.Price>
              <O.Won>원</O.Won>
            </O.PriceTop>
            <O.LikeWrapper onClick={props.onClickLike}>
              <O.LikeBoxM>MY</O.LikeBoxM>
              <O.LikeBoxI onClick={props.onClickLike} src="/like.png" />
              <O.LikeBoxP>
                {props.data?.fetchUseditem?.pickedCount}Product
              </O.LikeBoxP>
            </O.LikeWrapper>
          </O.PriceWrapper>
          <O.Contents>
            {typeof window !== "undefined" ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: props.data?.fetchUseditem.contents,
                }}
              ></div>
            ) : (
              <div style={{ color: "gary" }} />
            )}
          </O.Contents>
          <O.TagsWrapper>
            {(props.data?.fetchUseditem?.tags || []).map((e) => (
              <O.Tags>{e}</O.Tags>
            ))}
          </O.TagsWrapper>
          <O.ButtonsWrapper>
            {/* <O.LikeBox onClick={props.onClickLike}>
                  ♡찜{props.data?.fetchUseditem?.pickedCount}
                </O.LikeBox> */}
            <O.BuyBox type={"button"} onClick={props.onClickBuy}>
              BUY NOW
            </O.BuyBox>
            <O.BasketBox>SHOPPING BAG</O.BasketBox>
          </O.ButtonsWrapper>
        </O.ItemWrapper>
      </O.TopWrapper>
      <O.BottomWrapper>
        <O.Label>DETAIL</O.Label>
        <O.ContentsL></O.ContentsL>
        <O.MidImageWrapper>
          {props.data?.fetchUseditem.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <O.MidImage
                key={el}
                src={`https://storage.googleapis.com/${el}`}
              />
            ))}
        </O.MidImageWrapper>
        <O.MapWrapper>
          <O.MapInfo>배송/교환/반품/AS 관련 유의사항</O.MapInfo>
          <O.MapSubInfo>
            상품상세설명에 배송/교환/반품/취소 관련 안내가 기재된 경우 다음
            안내사항보다 우선 적용됩니다.
          </O.MapSubInfo>
          <O.Map id="map"></O.Map>
          <O.MapSubInfo>
            •상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이
            달라집니다.
            <br />
            •상품의 배송비는 공급업체의 정책에 따라 다르오며 공휴일 및 휴일은
            배송이 불가합니다.
            <br />
            •상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환/반품 택배비
            고객부담으로 왕복택배비가 발생합니다. (전자상거래 등에서의
            소비자보호에 관한 법률 제18조(청약 철회 등) 9항에 의거 소비자의
            사정에 의한 청약 철회 시 택배비는 소비자 부담입니다.)
            <br />
            •주문완료 후 재고 부족 등으로 인해 주문 취소 처리가 될 수도 있는 점
            양해 부탁드립니다.
            <br />
            •반품/교환은 미사용 제품에 한해 배송완료 후 7일 이내에 접수하여
            주십시오.
            <br />
            •제품을 사용 또는 훼손한 경우, 사은품 누락, 상품 TAG 보증서, 상품
            부자재가 제거 혹은 분실된 경우, 밀봉포장을 개봉했거나 내부 포장재를
            훼손 또는 분실한 경우(단, 제품확인을 위한 개봉 제외) 반품/교환이
            불가합니다.
            <br />
            •A/S 기준이나 가능여부는 브랜드와 상품에 따라 다르므로 관련 문의는
            에이블리 고객센터를 통해 부탁드립니다.
            <br />
            •상품불량에 의한 반품,교환, A/S, 환불, 품질보증 및 피해보상 등에
            관한 사항은 소비자분쟁해결기준(공정거래위원회 고시)에 따라 받으실 수
            있습니다.
          </O.MapSubInfo>
        </O.MapWrapper>
        <O.Label>Q & A</O.Label>
        <O.ContentsL></O.ContentsL>
      </O.BottomWrapper>
    </O.Wrapper>
  );
}
