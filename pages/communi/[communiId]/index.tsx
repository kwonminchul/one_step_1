import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import CommuniDetail from "../../../src/components/units/communi/detail/CommuniDetail.container";

function CommuniDetailPage() {
  return (
    <>
      <CommuniDetail />
      {/* <CommuniCommentWrite />
      <CommuniCommentList /> */}
      {/* <BoardCommentAnswerWriteUI /> */}
    </>
  );
}

export default withAuth(CommuniDetailPage);
