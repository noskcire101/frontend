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
  const [openSub, setOpenSub] = useState<boolean | undefined>(false);
  const [selectedMain, setselectedMain] = useState<boolean | undefined>(false);

  const isOpenTab = useMemo(
    () => ({
      backgroundColor: selectedMain || openSub ? "#292929" : "",
    }),
    [selectedMain, openSub]
  );
  const isSelectedMainTab = useCallback(
    (subItemPath: string) => ({
      backgroundColor:
        subItemPath.split("/")[1] === router.asPath.split("/")[1]
          ? "#303030"
          : "",
    }),
    [router.asPath]
  );
  const isSelectedSubTab = useCallback(
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
    const shouldOpenSubTab = (): boolean | undefined => {
      return item.submenu?.some(
        (subItem) => subItem.path.split("/")[1] == router.asPath.split("/")[1]
      );
    };
    return setOpenSub(shouldOpenSubTab()), setselectedMain(shouldOpenSubTab());
  }, [item.submenu, router.asPath]);

  return (
    <>
      {item.submenu ? (
        <div style={isOpenTab}>
          <motion.div
            variants={sideMainMenuVariants}
            whileHover="sizeIncrease"
            className="px-4 py-2 text-lg inline-flex w-full justify-start items-center cursor-pointer"
            key={item.name}
            onClick={() => {
              setOpenSub((prev) => !prev);
            }}
          >
            {item.icon} <div className="ml-2 w-fit">{item.name}</div>
          </motion.div>
          {openSub &&
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
                  style={isSelectedSubTab(subItem.path)}
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
            style={isSelectedMainTab(item.path ? item.path : "")}
            onClick={() => {
              setOpenSub(false);
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
