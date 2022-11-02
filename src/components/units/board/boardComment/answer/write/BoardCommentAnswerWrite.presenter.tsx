import { IBoardCommentWriteUIProps } from "../../write/BoardCommentWrite.types";
import * as O from "./BoardCommentAnswerWrite.styles";

export default function BoardCommentAnswerWriteUI(
  props: IBoardCommentWriteUIProps
) {
  return (
    <O.CommentWrapper>
      <O.InputCommentWrapper>
        <O.CommentSpace
          onChange={props.onChangeComment}
          placeholder="재입고 날짜..."
          value={
            props.isEdit ? props.contents || props.el?.contents : props.contents
          }
        />
        <O.BottomCommentWrapper>
          <O.ButtonCancel>취소하기</O.ButtonCancel>
          <O.ButtonFoot
            onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
          >
            {props.isEdit ? "수정하기" : "작성하기"}
          </O.ButtonFoot>
        </O.BottomCommentWrapper>
      </O.InputCommentWrapper>
    </O.CommentWrapper>
  );
}
