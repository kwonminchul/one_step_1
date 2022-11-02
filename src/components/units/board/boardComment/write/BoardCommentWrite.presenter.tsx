import * as O from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <O.CommentWrapper>
      <O.InputCommentWrapper>
        <O.CommentSpace
          onChange={props.onChangeComment}
          placeholder="내용을 입력해 주세요."
          value={
            props.isEdit ? props.contents || props.el?.contents : props.contents
          }
        />
        <O.BottomCommentWrapper>
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
