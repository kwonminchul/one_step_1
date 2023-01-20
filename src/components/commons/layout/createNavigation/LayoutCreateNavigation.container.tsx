import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import LayoutCreateNavigationUI from "./LayoutCreateNavigation.presenter";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        _id
        amount
        user {
          _id
        }
      }
    }
  }
`;

const LOG_OUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutCreateNavigation(props: any) {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation(LOG_OUT_USER);

  useEffect(() => {
    if (!data?.fetchUserLoggedIn) return;
    setUserInfo(data.fetchUserLoggedIn);
  }, [data]);

  const onClickLogo = () => {
    router.push(`/`);
  };

  const onClickMoveToLogin = () => {
    router.push(`/loginUser`);
  };

  const onClickMoveToLogout = async () => {
    try {
      await logoutUser();
      setUserInfo(undefined);
      alert("로그아웃 성공");
      // window.location.reload();
      router.push("/");
    } catch (e) {
      console.log("logoutUserError", e);
    }
  };

  return (
    <LayoutCreateNavigationUI
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToLogout={onClickMoveToLogout}
      accessToken={accessToken}
    />
  );
}
