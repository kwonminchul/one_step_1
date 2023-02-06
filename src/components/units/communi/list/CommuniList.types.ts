import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface ICommuniListUIProps {
  refetchBoards: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  boards?: Pick<IQuery, "fetchBoards">;
  bestData?: Pick<IQuery, "fetchBoardsOfTheBest">;
  onClickMoveToCommuniNew: () => void;
  onClickMoveToCimmuniDetail: (el: any) => (event: any) => void;
  count?: number;
  keyword: string;
  onChangeKeyword: (value: string) => void;
  onLoadMore: () => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
