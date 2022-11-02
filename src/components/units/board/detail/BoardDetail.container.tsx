import { useMutation, useQuery } from "@apollo/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { withAuth } from "../../../commons/hocs/withAuth";
import { FETCH_USER_LOGGED_IN } from "../../../commons/login/01/login01.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USEDITME,
  FETCH_USEDITME,
  TOGGLE_USEDITEM_PICK,
} from "./BoardDetail.queries";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
declare const window: typeof globalThis & {
  kakao: any;
};

function BoardDetail() {
  const router = useRouter();
  const [deleteUseditem] = useMutation(DELETE_USEDITME);
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const [buying] = useMutation(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  const { data } = useQuery(FETCH_USEDITME, {
    variables: { useditemId: router.query.boardId },
  });

  const onClickDelete = () => {
    deleteUseditem({
      variables: { useditemId: router.query.boardId },
    });
    router.push("/boards");
  };

  const onClickMoveToUseditemsList = () => {
    router.push("/boards");
  };

  const onClickMoveToUseditemEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickLike = () => {
    if (typeof router.query.boardId !== "string") return;
    toggleUseditemPick({
      variables: { useditemId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_USEDITME,
          variables: { useditemId: router.query.boardId },
        },
      ],
    });
  };

  const onClickBuy = () => {
    console.log("onClickBuy");
    try {
      buying({
        variables: { useritemId: router.query.boardId },
        refetchQueries: [{ query: FETCH_USER_LOGGED_IN }],
      });
    } catch (e) {
      console.log("buyingError", e);
    }
  };

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

  return (
    <BoardDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickMoveToUseditemsList={onClickMoveToUseditemsList}
      onClickMoveToUseditemEdit={onClickMoveToUseditemEdit}
      onClickLike={onClickLike}
      onClickBuy={onClickBuy}
    />
  );
}

export default withAuth(BoardDetail);
