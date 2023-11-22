import { ReactElement } from "react";
import * as Styled from "./styled";
import SideMenu from "./sidemenu";
import { TiThMenu } from "react-icons/ti";
import useToggleBooleanState from "@/hooks/common/useToggleBooleanState";

interface Props {
  sideNavPosition?: string;
  children: ReactElement;
}
export function Layout({ children, sideNavPosition = "right" }: Props) {
  const {
    booleanState: isToggle,
    setBooleanTrue: handleOpen,
    setBooleanFalse: handleClose,
  } = useToggleBooleanState();
  return (
    <>
      <Styled.HeaderNav>
        <TiThMenu
          size={30}
          className={`${
            sideNavPosition === "left" ? "" : "right-0 top-0 m-5"
          } cursor-pointer fixed`}
          onClick={handleOpen}
        />
        NavBar
      </Styled.HeaderNav>
      <Styled.ContentWrapper>
        <SideMenu
          isToggle={isToggle}
          position={sideNavPosition}
          handleClose={handleClose}
        />
        <Styled.Main>{children}</Styled.Main>
      </Styled.ContentWrapper>
      <Styled.Footer>Footer</Styled.Footer>
    </>
  );
}
