import { ApolloQueryResult, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent, useState } from "react";
import {
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_OF_THE_BEST,
} from "./BoardList.queries";
import BoardsListUI from "./BoardList.presenter";

export default function BoardsList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const { data: bestData } = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    FETCH_USEDITEMS_OF_THE_BEST
  );

  const {
    data: usedItems,
    fetchMore,
    refetch: refetchUseditems,
  } = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(
    FETCH_USEDITEMS,
    { fetchPolicy: "network-only" }
  );

  const onClickMoveToUseditemNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveToUseditemDetail = (el: any) => (event: any) => {
    router.push(`/boards/${event.currentTarget.id}`);
    const products = JSON.parse(String(localStorage.getItem("like"))) || []; // setItem 이름이랑 같아야함

    let isExists = false;
    products.forEach((productEl: any) => {
      if (el._id === productEl._id) isExists = true;
    });
    if (isExists) return;

    const newEl = { ...el };
    delete newEl.__typename;
    products.push(newEl);

    if (products.length > 3) {
      products.shift();
    }

    localStorage.setItem("like", JSON.stringify(products)); // sessionStorage에 products 로 저장
  };

  const onLoadMore = () => {
    if (!usedItems) return;

    fetchMore({
      variables: { page: Math.ceil(usedItems?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
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
      usedItems={usedItems}
      onClickMoveToUseditemNew={onClickMoveToUseditemNew}
      onClickMoveToUseditemDetail={onClickMoveToUseditemDetail}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      onLoadMore={onLoadMore}
      refetchUseditems={refetchUseditems}
    />
  );
}
