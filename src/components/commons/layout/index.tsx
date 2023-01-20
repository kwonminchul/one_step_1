import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutBottom from "./bottom/LayoutBottom.container";
import LayoutCreateNavigation from "./createNavigation/LayoutCreateNavigation.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutLoginNavigation from "./loginNavigation/LayoutLoginNavigation.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";

const HIDDEN_BANNER = [
  "/loginUser",
  "/createUser",
  "/boards",
  "/boards/new",
  "/boards/[boardId]",
];

const HIDDEN_HEADER = ["/loginUser", "/createUser"];

const HIDDEN_NAVIGATION = ["/loginUser", "/createUser"];

const HIDDEN_BOTTOM = ["/boards"];

const HIDDEN_CREATE_NAVIGATION = [
  "/",
  "/boards",
  "/boards/new",
  "/boards/[boardId]",
  "/loginUser",
];

const HIDDEN_LOGIN_NAVIGATION = [
  "/",
  "/boards",
  "/boards/new",
  "/boards/[boardId]",
  "/createUser",
];

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_BANNER.includes(router.pathname);
  const isHiddenHeader = HIDDEN_HEADER.includes(router.pathname);
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.pathname);
  const isHiddenBottom = HIDDEN_BOTTOM.includes(router.pathname);
  const isHiddenCreateNavigation = HIDDEN_CREATE_NAVIGATION.includes(
    router.pathname
  );
  const isHiddenLoginNavigation = HIDDEN_LOGIN_NAVIGATION.includes(
    router.pathname
  );

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenNavigation && <LayoutNavigation />}
      {!isHiddenCreateNavigation && <LayoutCreateNavigation />}
      {!isHiddenLoginNavigation && <LayoutLoginNavigation />}
      {!isHiddenBanner && <LayoutBanner />}
      <div style={{ display: "flex" }}>
        <Body>{props.children}</Body>
      </div>
      {!isHiddenBottom && <LayoutBottom />}
    </>
  );
}
