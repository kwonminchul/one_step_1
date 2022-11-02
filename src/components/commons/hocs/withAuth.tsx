import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import {
  accessTokenState,
  isLoadedState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";

export const withAuth = (Component: any) => (props: AppProps) => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLoaded, setIsLoaded] = useRecoilState(isLoadedState);
  const router = useRouter();

  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      console.log("withAuth", newAccessToken);
      if (!newAccessToken) {
        alert("로그인 후 이용 가능합니다!!!");
        router.push("/loginUser");
      }
    });
  }, []);

  return <Component {...props} />;
};
