import * as O from "./CommuniList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { ICommuniListUIProps } from "./CommuniList.types";
import Searchbars02 from "../../../commons/searchbars/02/Searchbars02.container";

export default function CommuniListUI(props: ICommuniListUIProps) {
  return (
    <O.ListWrapper>
      <O.Wrapper>
        <O.MainTitleWrapper>
          <O.HeaderTitle>BEST</O.HeaderTitle>
        </O.MainTitleWrapper>
        <O.Header>
          {props.bestData ? (
            props.bestData?.fetchBoardsOfTheBest.map((el: any) => (
              <O.ItemWrapper
                key={el._id}
                id={el._id}
                onClick={props.onClickMoveToCimmuniDetail(el)}
              >
                <O.ImageWrapper>
                  <O.Image
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  />
                </O.ImageWrapper>
                <O.TLWrapper>
                  <O.TitleWrapper>
                    <O.Title>{el.title}</O.Title>
                  </O.TitleWrapper>
                  <O.LikeWrapper>
                    <O.LikeIcon src="/like.png" />
                    <O.Like>{el.likeCount}</O.Like>
                  </O.LikeWrapper>
                </O.TLWrapper>
                <O.WriterWapper>
                  <O.Writer>{el.writer}</O.Writer>
                </O.WriterWapper>
                <O.ContentsWrapper>
                  <O.Contents>{el.contents}</O.Contents>
                </O.ContentsWrapper>
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
                  <O.ImageWrapper>
                    <O.Image
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                    />
                  </O.ImageWrapper>
                  <O.TLWrapper>
                    <O.TitleWrapper>
                      <O.Title>{el.title}</O.Title>
                    </O.TitleWrapper>
                    <O.LikeWrapper>
                      <O.LikeIcon src="/like.png" />
                      <O.Like>{el.likeCount}</O.Like>
                    </O.LikeWrapper>
                  </O.TLWrapper>
                  <O.WriterWapper>
                    <O.Writer>{el.writer}</O.Writer>
                  </O.WriterWapper>
                  <O.ContentsWrapper>
                    <O.Contents>{el.contents}</O.Contents>
                  </O.ContentsWrapper>
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
