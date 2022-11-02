import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export interface IMainUIProps {
  refetchUseditems: (
    variables: Partial<IQueryFetchUseditemsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  data?: Pick<IQuery, "fetchUseditems">;
  // bestdata?: Pick<IQuery, "fetchBoardsOfTheBest"> | undefined;
  onClickMoveToUseditemNew: () => void;
  onClickMoveToBoardDetail: (el: any) => (event: any) => void;
  count?: number;
  keyword: string;
  onChangeKeyword: (value: string) => void;
  onLoadMore: () => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
