import { GraphQLClient } from "graphql-request";
import { atom, selector } from "recoil";
import { FETCH_USER_LOGGED_IN } from "../../components/commons/login/01/login01.queries";
import { getAccessToken } from "../libraries/getAccessToken";
import { IQuery } from "../types/generated/types";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: undefined,
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

export const isLoadedState = atom({
  key: "isLoadedState",
  default: false,
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    console.log("restoreAccessTokenLoadable", newAccessToken);
    return newAccessToken;
  },
});

export const reloadLoggedInUserState = atom({
  key: "reloadLoggedInUserState",
  default: false,
});

export const loggedInUserState = selector({
  key: "loggedInUser",
  get: async ({ get }) => {
    get(reloadLoggedInUserState);
    if (!get(accessTokenState)) return;

    const apolloClient = new GraphQLClient(
      "https://backend09.codebootcamp.co.kr/graphql",
      {
        credentials: "include",
        headers: { Authorization: `Bearer ${get(accessTokenState)}` },
      }
    );

    try {
      const res = await apolloClient.request<Pick<IQuery, "fetchUserLoggedIn">>(
        FETCH_USER_LOGGED_IN
      );

      console.log("loggedInUserStateSuccess", res);
      return res.fetchUserLoggedIn;
    } catch (e: any) {
      console.log("loggedInUserStateFail", e.response);
      return;
    }
  },
});
