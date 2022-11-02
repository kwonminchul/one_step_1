import { withAuth } from "../../src/components/commons/hocs/withAuth";
import BoardsList from "../../src/components/units/board/list/BoardList.container";

function BoardsPage() {
  return <BoardsList />;
}

export default withAuth(BoardsPage);
