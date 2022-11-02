import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  onClickMoveToUseditemsList: () => void;
  onClickMoveToUseditemEdit: () => void;
  onClickDelete: () => void;
  onClickLike: () => void;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
