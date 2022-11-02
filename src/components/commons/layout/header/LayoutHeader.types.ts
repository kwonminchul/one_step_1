import { IMutation, IQuery } from "../../../../commons/types/generated/types";

export interface ILayoutHeaderProps {
  onClickLogo: () => void;
  onClickMoveToLogin: () => void;
  onClickMoveToCreateUser: () => void;
  onClickMoveToLogout: () => void;
  isEdit: boolean;
  onClickPaymant: () => void;
  accessToken: string;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  data1?: Pick<IMutation, "createPointTransactionOfLoading">;
}

export interface ILayoutHeaderProps {
  isEdit: boolean;
}
