import React, { useMemo } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaUserShield } from "react-icons/fa6";
import { LiaBlogSolid } from "react-icons/lia";
import { IMenuItems } from "@/models/layouts";
import { formatConvertSnakeToTitleCase } from "@/utils/formatText";

function useMenuItems() {
  const menuItems = useMemo(
    () => [
      {
        name: formatConvertSnakeToTitleCase("home"),
        key: "home",
        path: "/",
        icon: <RxDashboard size={20} />,
      },
      {
        name: formatConvertSnakeToTitleCase("our_story"),
        icon: <RxDashboard />,
        submenu: [
          {
            name: formatConvertSnakeToTitleCase("about"),
            path: "/our_story/about",
          },
          {
            name: formatConvertSnakeToTitleCase("projects"),
            path: "/our_story/projects",
          },
          {
            name: formatConvertSnakeToTitleCase("testimonials"),
            path: "/our_story/testimonials",
          },
        ],
      },
      {
        name: formatConvertSnakeToTitleCase("users"),
        path: "/users",
        icon: <FaUserShield />,
      },
      {
        name: formatConvertSnakeToTitleCase("blogs"),
        path: "/blogs",
        icon: <LiaBlogSolid />,
      },
      {
        name: formatConvertSnakeToTitleCase("lets_connect"),
        icon: <LiaBlogSolid />,
        submenu: [
          {
            name: formatConvertSnakeToTitleCase("newsletters"),
            path: "/lets_connect/newsletter",
          },
          {
            name: formatConvertSnakeToTitleCase("contact_us"),
            path: "/lets_connect/contact_us",
          },
        ],
      },
      {
        name: formatConvertSnakeToTitleCase("login"),
        path: "/auth/signin",
        icon: <FaUserShield />,
      },
    ],
    []
  );

  return menuItems as IMenuItems[];
}

export default useMenuItems;
