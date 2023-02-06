import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import BoardCommentAnswerWriteUI from "../../../src/components/units/board/boardComment/answer/write/BoardCommentAnswerWrite.presenter";
import BoardCommentList from "../../../src/components/units/board/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/board/boardComment/write/BoardCommentWrite.container";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
function CommuniDetailPage() {
  return (
    <>
      <CommuniDetail />
      <CommuniCommentWrite />
      <CommuniCommentList />
      {/* <BoardCommentAnswerWriteUI /> */}
    </>
  );
}

export default withAuth(CommuniDetailPage);
