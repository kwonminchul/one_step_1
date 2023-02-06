import { withAuth } from "../../src/components/commons/hocs/withAuth";
import CommuniList from "../../src/components/units/communi/list/CommuniList.container";

function CommuniPage() {
  return <CommuniList />;
}

export default withAuth(CommuniPage);
