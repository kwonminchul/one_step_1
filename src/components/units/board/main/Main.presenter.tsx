import * as O from "./Main.styles";
import { IMainUIProps } from "./Main.types";

export default function MainUI(props: IMainUIProps) {
  return (
    <O.ListWrapper>
      <O.TitleWrapper>New Arrival</O.TitleWrapper>
      <O.Wrapper>
        {props.data ? (
          props.data?.fetchUseditems.slice(0, 4).map((el: any) => (
            <O.Body
              key={el._id}
              id={el._id}
              onClick={props.onClickMoveToBoardDetail(el)}
              // onClick={props.onClickMoveToUseditemDetail(el)}
            >
              <O.ItemWrapper>
                <O.LikeIcon src="/like.png" />
                <O.ImageWrapper>
                  {/* <O.Image src="/m1.jpeg" /> */}
                  <O.Image
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  />
                </O.ImageWrapper>
                <O.PPWrapper>
                  <O.PercentWrapper>
                    {/* <O.Percent>7%</O.Percent> */}
                    <O.Percent>{el.tags}</O.Percent>
                  </O.PercentWrapper>
                  <O.PriceWrapper>
                    {/* <O.Price>27,500</O.Price> */}
                    <O.Price>{el.price}</O.Price>
                  </O.PriceWrapper>
                </O.PPWrapper>
                <O.UserNameWapper>
                  {/* <O.UserName>조이조이</O.UserName> */}
                  <O.UserName>{el.name}</O.UserName>
                </O.UserNameWapper>
                <O.RemarksWrapper>
                  {/* <O.Remarks>
                      [당일출고/주문폭주] 노티드 캔버스 패브릭 가방 4col...
                    </O.Remarks> */}
                  <O.Remarks>{el.remarks}</O.Remarks>
                </O.RemarksWrapper>
              </O.ItemWrapper>
            </O.Body>
          ))
        ) : (
          <></>
        )}
      </O.Wrapper>
    </O.ListWrapper>
  );
}
