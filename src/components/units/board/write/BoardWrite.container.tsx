import { ChangeEvent, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import "react-quill/dist/quill.snow.css";

import dynamic from "next/dynamic";

import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IUpdateUseditemInput,
} from "../../../../commons/types/generated/types";
import { CREATE_USEDITEM, UPDATE_USED_ITEM } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { IBoardWriteProps } from "./BoardWrite.types";

const initialInputs = {
  // _id: "",
  name: "",
  remarks: "",
  contents: "",
  price: "",
  tags: [""],
  images: [],
};

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

declare const window: typeof globalThis & {
  kakao: any;
};

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [inputs, setInputs] = useState(initialInputs);
  const [value, setValue] = useState();

  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [fileUrls, setFileUrls] = useState(["", ""]);

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);
  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const onChangeContents = (value: string) => {
    console.log(value);

    setValue("contents", value === "<p><br></p>" ? "" : value);
  };

  const onChangeInputs = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const _inputs: any = {
      ...inputs,
    };

    if (!event.target) {
      _inputs.contents = event;
    } else {
      _inputs[event.target.id] = event.target.value;
    }

    console.log("onChangeInputs", _inputs);
    setInputs(_inputs);

    if (Object.values(_inputs).every((el) => el)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=8661d4fd3c98f705b5e36005f6fcbac1&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.293923, 127.2026),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        console.log(map);

        const markerPosition = new window.kakao.maps.LatLng(
          37.293923,
          127.2026
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
  });

  const onClickSubmit = async (data: any) => {
    (Object.keys(inputs) as Array<keyof typeof inputs>).forEach((el, i) => {
      if (!inputs[el]) console.log(el, [el]);
    });
    if (Object.values(inputs).every((el) => el)) {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: inputs.name,
            remarks: inputs.remarks,
            contents: inputs.contents,
            price: Number(inputs.price),
            tags: inputs.tags,
            images: [...fileUrls],
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
            },
          },
        },
      });
      console.log(result.data?.createUseditem._id);
      router.push(`/boards/${result.data?.createUseditem._id}`);
      console.log(onClickSubmit, result);
    }
  };

  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchUseditem.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (
      // !inputs._id &&
      !inputs.name &&
      !inputs.price &&
      !inputs.remarks &&
      !inputs.contents &&
      !inputs.tags &&
      !address &&
      !addressDetail &&
      !zipcode &&
      !isChangedFiles
    ) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!inputs.name) {
      alert("이름을 입력해주세요.");
      return;
    }

    const updateUseditemInput: IUpdateUseditemInput = {};
    if (inputs.name) updateUseditemInput.name = inputs.name;
    if (inputs.price) updateUseditemInput.price = Number(inputs.price);
    if (inputs.remarks) updateUseditemInput.remarks = inputs.remarks;
    if (inputs.contents) updateUseditemInput.contents = inputs.contents;
    if (inputs.tags) updateUseditemInput.tags = inputs.tags;
    if (zipcode || address || addressDetail) {
      updateUseditemInput.useditemAddress = {};
      if (zipcode) updateUseditemInput.useditemAddress.zipcode = zipcode;
      if (address) updateUseditemInput.useditemAddress.address = address;
      if (addressDetail)
        updateUseditemInput.useditemAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) updateUseditemInput.images = fileUrls;

    try {
      if (typeof router.query.boardId !== "string") return;
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.boardId,
          updateUseditemInput,
        },
      });
      router.push(`/boards/${result.data?.updateUseditem._id}`);
      window.location.replace(`/boards/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickCancel = () => {
    router.push(`/boards`);
  };

  const onClickMoveToUseditemsList = () => {
    router.push("/boards");
  };

  return (
    <BoardWriteUI
      isActive={isActive}
      onChangeInputs={onChangeInputs}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onClickCancel={onClickCancel}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      onChangeContents={onChangeContents}
      onClickMoveToUseditemsList={onClickMoveToUseditemsList}
    />
  );
}
