import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutBottom from "./bottom/LayoutBottom.container";
import LayoutHeader from "./header/LayoutHeader.container";
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

const Body = styled.div`
  width: 100%;
  /* height: 1513px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
  const isHiddenBottom = HIDDEN_BOTTOM.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenNavigation && <LayoutNavigation />}
      {!isHiddenBanner && <LayoutBanner />}
      <div style={{ display: "flex" }}>
        <Body>{props.children}</Body>
      </div>
      {!isHiddenBottom && <LayoutBottom />}
    </>
  );
}
