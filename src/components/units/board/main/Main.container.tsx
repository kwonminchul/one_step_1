import { ApolloQueryResult, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent, useState } from "react";
import { FETCH_USEDITEMS, FETCH_USEDITEMS_OF_THE_BEST } from "./Main.queries";
import BoardsListUI from "./Main.presenter";

export default function Main() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS, { fetchPolicy: "network-only" });

  const onClickMoveToBoardDetail = (el: any) => (event: any) => {
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
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 8) + 1 },
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
      data={data}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      onLoadMore={onLoadMore}
      refetchUseditems={function (
        variables: Partial<IQueryFetchUseditemsArgs>
      ): Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>> {
        throw new Error("Function not implemented.");
      }} // refetchUseditems={refetchUseditems}
    />
  );
}
