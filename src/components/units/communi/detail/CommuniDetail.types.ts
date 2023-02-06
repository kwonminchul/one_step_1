// import { IQuery } from "../../../../commons/types/generated/types";

// export interface ICommuniDetailUIProps {
//   data?: Pick<IQuery, "fetchUseditem">;
//   onClickMoveToUseditemsList: () => void;
//   onClickMoveToUseditemEdit: () => void;
//   onClickDelete: () => void;
//   onClickLike: () => void;
// }

// export interface ISubmitButtonProps {
//   isActive: boolean;
// }

import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommuniDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveToBoardList: () => void;
  onClickMoveToBoardEdit: () => void;
  onClickDelete: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
}
