import {
  IQuery,
  IUseditemQuestion,
} from "../../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchUseditemQuestions">;
  onLoadMore: () => void;
}

export interface IBoardCommentListUIItemProps {
  el: IUseditemQuestion;
}
