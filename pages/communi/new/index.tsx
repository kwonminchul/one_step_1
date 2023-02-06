import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";

function communiWritePage() {
  return <CommuniWrite isEdit={false} />;
}

export default withAuth(communiWritePage);
