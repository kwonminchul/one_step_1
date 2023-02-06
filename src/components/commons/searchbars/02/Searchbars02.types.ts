import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface ISearchbars02Props {
  refetchBoards: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchbars02UIProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
