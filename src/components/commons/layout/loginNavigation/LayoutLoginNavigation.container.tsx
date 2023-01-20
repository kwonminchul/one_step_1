import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import LayoutLoginNavigationUI from "./LayoutLoginNavigation.presenter";

export default function LayoutLoginNavigation(props: any) {
  const router = useRouter();

  const onClickCreate = () => {
    router.push(`/createUser`);
  };

  return <LayoutLoginNavigationUI onClickCreate={onClickCreate} />;
}
