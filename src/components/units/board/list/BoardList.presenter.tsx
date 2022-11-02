import * as O from "./BoardList.styles";
import InfiniteScroll from "react-infinite-scroller";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import { IBoardsListUIProps } from "./BoardList.types";
import { IUseditem } from "../../../../commons/types/generated/types";

export default function BoardsListUI(props: IBoardsListUIProps) {
  return (
    <O.ListWrapper>
      <O.Wrapper>
        <O.TitleWrapper>
          <O.HeaderTitle>BEST</O.HeaderTitle>
        </O.TitleWrapper>
        <O.Header>
          {/* <O.TitleWrapper>
            <O.HeaderTitle>BEST</O.HeaderTitle>
          </O.TitleWrapper> */}
          {props.bestData ? (
            props.bestData?.fetchUseditemsOfTheBest.map((el: any) => (
              <O.ItemWrapper
                key={el._id}
                id={el._id}
                onClick={props.onClickMoveToUseditemDetail(el)}
              >
                <O.LikeIconTop src="/like.png" />
                <O.ImageWrapper>
                  <O.Image
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  />
                </O.ImageWrapper>
                <O.PPWrapper>
                  <O.PercentWrapper>
                    <O.Percent>{el.tags[0]}</O.Percent>
                  </O.PercentWrapper>
                  <O.PriceWrapper>
                    <O.Price>{el.price}</O.Price>
                  </O.PriceWrapper>
                </O.PPWrapper>
                <O.UserNameWapper>
                  <O.UserName>{el.name}</O.UserName>
                </O.UserNameWapper>
                <O.RemarksWrapper>
                  <O.Remarks>{el.remarks}</O.Remarks>
                </O.RemarksWrapper>
              </O.ItemWrapper>
            ))
          ) : (
            <></>
          )}
        </O.Header>
        <O.TopSearchMenu>
          <O.Buttom onClick={props.onClickMoveToUseditemNew}>상품등록</O.Buttom>
          <Searchbars01
            refetchUseditems={props.refetchUseditems}
            onChangeKeyword={props.onChangeKeyword}
          />
          {/* <Searchbars01
            onChangeKeyword={props.onChangeKeyword}
            refetchUseditems={props.refetchUseditems}
          /> */}
        </O.TopSearchMenu>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true || false}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {props.usedItems ? (
            props.usedItems?.fetchUseditems.map((el: any) => (
              <O.Body
                key={el._id}
                id={el._id}
                onClick={props.onClickMoveToUseditemDetail(el)}
              >
                <O.ItemWrapper>
                  <O.LikeIconBottom src="/like.png" />
                  <O.ImageWrapper>
                    <O.Image
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                    />
                  </O.ImageWrapper>
                  <O.PPWrapper>
                    <O.PercentWrapper>
                      <O.Percent>{el.tags[0]}</O.Percent>
                    </O.PercentWrapper>
                    <O.PriceWrapper>
                      <O.Price>{el.price}</O.Price>
                    </O.PriceWrapper>
                  </O.PPWrapper>
                  <O.UserNameWapper>
                    <O.UserName>{el.name}</O.UserName>
                  </O.UserNameWapper>
                  <O.RemarksWrapper>
                    <O.Remarks>{el.remarks}</O.Remarks>
                  </O.RemarksWrapper>
                </O.ItemWrapper>
              </O.Body>
            ))
          ) : (
            <></>
          )}
        </InfiniteScroll>
      </O.Wrapper>
    </O.ListWrapper>
  );
}
