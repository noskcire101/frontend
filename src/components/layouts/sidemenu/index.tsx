import useMenuItems from "./controller/useMenuItems";
import { IMenuItems } from "@/models/layouts";
import MenuItems from "./menuItems";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import {
  menuPositionLeftVariants,
  menuPositionRightVariants,
} from "@/constants/framer-motion/sidebar";

interface Props {
  isToggle: boolean;
  handleClose: () => void;
  position?: string;
}

function SideMenu({ isToggle, handleClose, position }: Props) {
  const menuItems = useMenuItems();
  return (
    <>
      <motion.div
        variants={
          position === "left"
            ? menuPositionLeftVariants
            : menuPositionRightVariants
        }
        initial="initial"
        animate={isToggle ? "open" : "closed"}
        className="h-full w-52 fixed text-white z-10 top-0 left-0 bg-[#1e1e1e] overflow-x-hidden pt-5"
      >
        <div
          className={`${
            position === "left" ? "justify-end" : "justify-start"
          } flex p-3`}
        >
          <MdClose size={30} className="cursor-pointer" onClick={handleClose} />
        </div>
        {menuItems.map((item: IMenuItems) => (
          <MenuItems key={item.name} handleClose={handleClose} item={item} />
        ))}
      </motion.div>
    </>
  );
}

export default SideMenu;
