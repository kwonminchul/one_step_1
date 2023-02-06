// import { gql, useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
// import { withAuth } from "../../../../src/components/commons/hocs/withAuth";
// import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";

// const FETCH_USEDITEM = gql`
//   query fetchUseditem($useditemId: ID!) {
//     fetchUseditem(useditemId: $useditemId) {
//       _id
//       name
//       remarks
//       contents
//       price
//       tags
//       pickedCount
//       useditemAddress {
//         zipcode
//         address
//         addressDetail
//       }
//       createdAt
//       images
//     }
//   }
// `;

// function CommuniEditPage() {
//   const router = useRouter();
//   const { data } = useQuery(FETCH_USEDITEM, {
//     variables: { useditemId: router.query.boardId },
//   });

//   return <BoardWrite isEdit={true} data={data} />;
// }

// export default withAuth(CommuniEditPage);

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommuniWrite from "../../../../src/components/units/communi/write/CommuniWrite.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function CommuniEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return <CommuniWrite isEdit={true} data={data} />;
}
