import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal } from "antd";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./BoardCommentList.queries";
import * as O from "./BoardCommentList.styles";
import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../../commons/types/generated/types";
import { getDate } from "../../../../../commons/libraries/utils";

export default function BoardCommentListUIItem(
  props: IBoardCommentListUIItemProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">
  >(DELETE_USED_ITEM_QUESTION);

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickOpenDeleteModal = () => {
    setIsOpenDeleteModal(true);
  };

  return (
    <>
      {!isEdit && (
        <O.ItemWrapper>
          <O.FlexWrapper>
            <O.MainWrapper>
              <O.WriterWrapper>
                <O.Writer>{props.el?.user.name}</O.Writer>
              </O.WriterWrapper>
            </O.MainWrapper>
            <O.OptionWrapper>
              <O.Contents>{props.el?.contents}</O.Contents>
              <O.IconWrapper>
                <O.DateString>{getDate(props.el?.createdAt)}</O.DateString>
                <O.AnswerIcon src={"/answer.png"} />
                <O.UpdateIcon src={"/write.png"} onClick={onClickUpdate} />
                <O.DeleteIcon
                  src={"/delete.png"}
                  onClick={onClickOpenDeleteModal}
                />
              </O.IconWrapper>
            </O.OptionWrapper>
          </O.FlexWrapper>
        </O.ItemWrapper>
      )}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
