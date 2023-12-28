import { IMenuItems, ISubMenuItems } from "@/models/layouts";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  sideMainMenuVariants,
  sideSubMenuVariants,
} from "@/constants/framer-motion/sidebar";

interface MenuItemsProps {
  item: IMenuItems;
  handleClose: () => void;
}

function MenuItems({ item, handleClose }: MenuItemsProps) {
  const router = useRouter();
  const [openSubMenu, setOpenSubMenu] = useState<boolean | undefined>(false);
  const [activeMainMenu, setActiveMainMenu] = useState<boolean | undefined>(
    false
  );

  const isOpenMainMenu = useMemo(
    () => ({
      backgroundColor: activeMainMenu || openSubMenu ? "#292929" : "",
    }),
    [activeMainMenu, openSubMenu]
  );
  const isActiveMainMenuTab = useCallback(
    (subItemPath: string) => ({
      backgroundColor:
        subItemPath.split("/")[1] === router.asPath.split("/")[1]
          ? "#303030"
          : "",
    }),
    [router.asPath]
  );
  const isActiveSubMenu = useCallback(
    (subItemPath: string) => ({
      backgroundColor:
        subItemPath.split("/")[1] === router.asPath.split("/")[1] &&
        subItemPath.split("/")[2] === router.asPath.split("/")[2]
          ? "#303030"
          : "",
    }),
    [router.asPath]
  );

  useEffect(() => {
    const shouldOpenSubMenu = (): boolean | undefined => {
      return item.submenu?.some(
        (subItem) => subItem.path.split("/")[1] == router.asPath.split("/")[1]
      );
    };
    return (
      setOpenSubMenu(shouldOpenSubMenu()),
      setActiveMainMenu(shouldOpenSubMenu())
    );
  }, [item.submenu, router.asPath]);

  return (
    <>
      {item.submenu ? (
        <div style={isOpenMainMenu}>
          <motion.div
            variants={sideMainMenuVariants}
            whileHover="sizeIncrease"
            className="px-4 py-2 text-lg inline-flex w-full justify-start items-center cursor-pointer"
            key={item.name}
            onClick={() => {
              setOpenSubMenu((prev) => !prev);
            }}
          >
            {item.icon} <div className="ml-2 w-fit">{item.name}</div>
          </motion.div>
          {openSubMenu &&
            item.submenu.map((subItem: ISubMenuItems) => (
              <motion.div
                key={`${item.name}-${subItem.name}`}
                variants={sideSubMenuVariants}
                whileHover="sizeIncrease"
                initial="closed"
                animate="open"
              >
                <Link
                  href={subItem.path}
                  onClick={handleClose}
                  className="px-4 py-2 text-sm inline-flex w-full pl-9 justify-start items-center cursor-pointer"
                  style={isActiveSubMenu(subItem.path)}
                >
                  {subItem?.icon}{" "}
                  <div className="ml-2 w-fit">{subItem.name}</div>
                </Link>
              </motion.div>
            ))}
        </div>
      ) : (
        <motion.div
          key={item.name}
          variants={sideMainMenuVariants}
          whileHover="sizeIncrease"
        >
          <Link
            href={item.path ? item.path : "#"}
            className="px-4 py-2 text-lg inline-flex w-full justify-start items-center "
            style={isActiveMainMenuTab(item.path ? item.path : "")}
            onClick={() => {
              setOpenSubMenu(false);
              handleClose();
            }}
          >
            {item.icon} <div className="ml-2 w-fit">{item.name}</div>
          </Link>
        </motion.div>
      )}
    </>
  );
}

export default MenuItems;
