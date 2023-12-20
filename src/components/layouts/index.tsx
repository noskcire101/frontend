import { ReactElement, useEffect, useState } from "react";
import SideMenu from "./sidemenu";
import { TiThMenu } from "react-icons/ti";
import useToggleBooleanState from "@/hooks/common/useToggleBooleanState";
import { useTheme } from "next-themes";

interface Props {
  sideNavPosition?: string;
  children: ReactElement;
}
export function Layout({ children, sideNavPosition = "left" }: Props) {
  const {
    booleanState: isToggleSideMenu,
    setBooleanTrue: handleOpenSideMenu,
    setBooleanFalse: handleCloseSideMenu,
  } = useToggleBooleanState();

  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // This logic prevent error on hydration, donnot remove this code
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  // end of hydration error logic

  return (
    <>
      <nav className="p-6 text-white bg-[#333]">
        <TiThMenu
          size={30}
          className={`${
            sideNavPosition === "left" ? "" : "right-0 top-0 m-5"
          } cursor-pointer fixed`}
          onClick={handleOpenSideMenu}
        />
        NavBar
        <button onClick={toggleTheme}>Toggle Theme</button>
      </nav>
      <div className="primary-bg-color">
        <SideMenu
          isToggle={isToggleSideMenu}
          position={sideNavPosition}
          handleClose={handleCloseSideMenu}
        />
        <main>{children}</main>
      </div>
      <footer className="p-6 text-white bg-[#333]">Footer</footer>
    </>
  );
}
