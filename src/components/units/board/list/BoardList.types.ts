import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardsListUIProps {
  refetchUseditems: (
    variables: Partial<IQueryFetchUseditemsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  usedItems?: Pick<IQuery, "fetchUseditems">;
  bestData?: Pick<IQuery, "fetchUseditemsOfTheBest">;
  onClickMoveToUseditemNew: () => void;
  onClickMoveToUseditemDetail: (el: any) => (event: any) => void;
  count?: number;
  keyword: string;
  onChangeKeyword: (value: string) => void;
  onLoadMore: () => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
