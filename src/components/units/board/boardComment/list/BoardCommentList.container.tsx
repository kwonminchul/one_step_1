import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../../commons/types/generated/types";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./BoardCommentList.queries";

export default function BoardCommentList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchUseditemQuestions">>(
    FETCH_USED_ITEM_QUESTIONS,
    {
      variables: { useditemId: String(router.query.boardId) },
    }
  );

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return <BoardCommentListUI data={data} onLoadMore={onLoadMore} />;
}
