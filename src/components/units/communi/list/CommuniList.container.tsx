import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent, useState } from "react";
import { FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST } from "./CommuniList.queries";
import BoardsListUI from "./CommuniList.presenter";

export default function CommuniList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const { data: bestData } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(
    FETCH_BOARDS_OF_THE_BEST
  );

  const {
    data: boards,
    fetchMore,
    refetch: refetchBoards,
  } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    { fetchPolicy: "network-only" }
  );

  const onClickMoveToCommuniNew = () => {
    router.push("/communi/new");
  };

  const onClickMoveToCimmuniDetail = (el: any) => (event: any) => {
    router.push(`/communi/${event.currentTarget.id}`);
    const communis = JSON.parse(String(localStorage.getItem("like"))) || []; // setItem 이름이랑 같아야함

    let isExists = false;
    communis.forEach((productEl: any) => {
      if (el._id === productEl._id) isExists = true;
    });
    if (isExists) return;

    const newEl = { ...el };
    delete newEl.__typename;
    communis.push(newEl);

    if (communis.length > 3) {
      communis.shift();
    }

    localStorage.setItem("like", JSON.stringify(communis)); // sessionStorage에 communis 로 저장
  };

  const onLoadMore = () => {
    if (!boards) return;

    fetchMore({
      variables: { page: Math.ceil(boards?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  return (
    <BoardsListUI
      bestData={bestData}
      boards={boards}
      onClickMoveToCommuniNew={onClickMoveToCommuniNew}
      onClickMoveToCimmuniDetail={onClickMoveToCimmuniDetail}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      onLoadMore={onLoadMore}
      refetchBoards={refetchBoards}
    />
  );
}
