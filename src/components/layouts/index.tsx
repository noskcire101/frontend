import { ReactElement } from "react";
import SideMenu from "./sidemenu";
import { TiThMenu } from "react-icons/ti";
import useToggleBooleanState from "@/hooks/common/useToggleBooleanState";

interface Props {
  sideNavPosition?: string;
  children: ReactElement;
}
export function Layout({ children, sideNavPosition = "left" }: Props) {
  const {
    booleanState: isToggle,
    setBooleanTrue: handleOpen,
    setBooleanFalse: handleClose,
  } = useToggleBooleanState();
  return (
    <>
      <nav className="p-6 text-white bg-[#333]">
        <TiThMenu
          size={30}
          className={`${
            sideNavPosition === "left" ? "" : "right-0 top-0 m-5"
          } cursor-pointer fixed`}
          onClick={handleOpen}
        />
        NavBar
      </nav>
      <div className="primary-bg-color">
        <SideMenu
          isToggle={isToggle}
          position={sideNavPosition}
          handleClose={handleClose}
        />
        <main>{children}</main>
      </div>
      <footer className="p-6 text-white bg-[#333]">Footer</footer>
    </>
  );
}
