import { ReactNode } from "react";

export interface IMenuItems{
    name: string,
    path?: string,
    icon?: ReactNode,
    submenu?: ISubMenuItems[],
}
export interface ISubMenuItems{
    name: string,
    path: string,
    icon?: ReactNode
}