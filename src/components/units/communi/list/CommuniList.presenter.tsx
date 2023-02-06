import * as O from "./CommuniList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { ICommuniListUIProps } from "./CommuniList.types";
import Searchbars02 from "../../../commons/searchbars/02/Searchbars02.container";

export default function CommuniListUI(props: ICommuniListUIProps) {
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
            props.bestData?.fetchBoardsOfTheBest.map((el: any) => (
              <O.ItemWrapper
                key={el._id}
                id={el._id}
                onClick={props.onClickMoveToCimmuniDetail(el)}
              >
                <O.LikeIconTop src="/like.png" />
                <O.ImageWrapper>
                  <O.Image
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  />
                </O.ImageWrapper>
                <O.PPWrapper>
                  <O.PercentWrapper>
                    <O.Percent>{el.title}</O.Percent>
                  </O.PercentWrapper>
                  <O.PriceWrapper>
                    <O.Price>{el.likeCount}</O.Price>
                  </O.PriceWrapper>
                </O.PPWrapper>
                <O.UserNameWapper>
                  <O.UserName>{el.writer}</O.UserName>
                </O.UserNameWapper>
                <O.RemarksWrapper>
                  <O.Remarks>{el.contents}</O.Remarks>
                </O.RemarksWrapper>
              </O.ItemWrapper>
            ))
          ) : (
            <></>
          )}
        </O.Header>
        <O.TopSearchMenu>
          <O.Buttom onClick={props.onClickMoveToCommuniNew}>
            게시글등록
          </O.Buttom>
          <Searchbars02
            refetchBoards={props.refetchBoards}
            onChangeKeyword={props.onChangeKeyword}
          />
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
          {props.boards ? (
            props.boards?.fetchBoards.map((el: any) => (
              <O.Body
                key={el._id}
                id={el._id}
                onClick={props.onClickMoveToCimmuniDetail(el)}
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
                      <O.Percent>{el.title}</O.Percent>
                    </O.PercentWrapper>
                    <O.PriceWrapper>
                      <O.Price>{el.likeCount}</O.Price>
                    </O.PriceWrapper>
                  </O.PPWrapper>
                  <O.UserNameWapper>
                    <O.UserName>{el.writer}</O.UserName>
                  </O.UserNameWapper>
                  <O.RemarksWrapper>
                    <O.Remarks>{el.contents}</O.Remarks>
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
