import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
} from "../../../../commons/types/generated/types";
import { withAuth } from "../../../commons/hocs/withAuth";
import BoardDetailUI from "./CommuniDetail.presenter";
import {
  DELETE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./CommuniDetail.queries";

function CommuniDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.communiId },
  });

  const onClickDelete = () => {
    deleteBoard({
      variables: { boardId: router.query.communiId },
    });
    router.push("/communi");
  };

  const onClickMoveToBoardList = () => {
    router.push("/communi");
  };

  const onClickMoveToBoardEdit = () => {
    router.push(`/communi/${router.query.communiId}/edit`);
  };

  const onClickLike = () => {
    if (typeof router.query.communiId !== "string") return;
    likeBoard({
      variables: { boardId: router.query.communiId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.communiId },
        },
      ],
    });
  };

  const onClickDislike = () => {
    if (typeof router.query.communiId !== "string") return;
    dislikeBoard({
      variables: { boardId: router.query.communiId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.communiId },
        },
      ],
    });
  };

  return (
    <BoardDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}

export default withAuth(CommuniDetail);
