import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}

export interface IUpdateUseditemInput {
  // _id?: string;
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  tags?: string[];
  useditemAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
}

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface IUseditemWriteUIProps {
  isActive: boolean;
  inputsError: {
    // _id: string;
    name: string;
    remarks: string;
    contents: string;
    price: string;
    tags: string;
    images: string;
  };
  onChangeInputs: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onClickCancel: () => void;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
  isOpen: boolean;
  zipcode: string;
  address: string;
  addressDetail: string;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  fileUrls: string[];
  lat?: number;
  lng?: number;
  mapContainerRef: () => null;
}
