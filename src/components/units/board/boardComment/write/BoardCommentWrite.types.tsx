import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IUseditemQuestion } from "../../../../../commons/types/generated/types";

export interface IBoardCommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IUseditemQuestion;
}

export interface IBoardCommentWriteUIProps {
  onChangeComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWrite: () => void;
  onClickUpdate: () => void;
  contents: string;
  isEdit?: boolean;
  el?: IUseditemQuestion;
}

export interface IupdateUseditemQuestionInput {
  contents: string;
}

export interface IupdateUseditemQuestionAnswerInput {
  contents: string;
}
