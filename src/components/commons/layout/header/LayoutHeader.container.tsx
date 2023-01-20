import LayoutHeaderUI from "./LayoutHeader.presenter";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  IMP: any;
};

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
    }
  }
`;

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

export default function LayoutHeader(props: any) {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const [logoutUser] = useMutation(LOG_OUT_USER);

  useEffect(() => {
    if (!data?.fetchUserLoggedIn) return;
    setUserInfo(data.fetchUserLoggedIn);
  }, [data]);

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickMoveToLogin = () => {
    router.push(`/loginUser`);
  };

  const onClickMoveToCreateUser = () => {
    router.push(`/createUser`);
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

  const onClickPaymant = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        // merchant_uid: ,
        name: "포인트 충전",
        amount: 100,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
      },
      async (rsp: any) => {
        console.log("request_pay", rsp);
        if (rsp.success) {
          // 결제 성공 시 로직,
          const result = await createPointTransactionOfLoading({
            variables: {
              impUid: String(rsp.imp_uid),
            },
          });
          alert("충전성공");
          location.reload();
        } else {
          alert("결제 실패!!!");
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script
          async
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          async
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <LayoutHeaderUI
        onClickLogo={onClickLogo}
        onClickMoveToLogin={onClickMoveToLogin}
        onClickMoveToCreateUser={onClickMoveToCreateUser}
        onClickMoveToLogout={onClickMoveToLogout}
        isEdit={props.isEdit}
        onClickPaymant={onClickPaymant}
        accessToken={accessToken}
      />
    </>
  );
}
