"use client";

import css from "./index.module.scss";
import { MainNav } from "../main-nav";
import { NotificationsButton } from "../notifications-button";
import { UserNav } from "../user-nav";
import useSystemStore from "@/stores/system";
import { HeaderMobile } from "../header-mobile";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export function AsideMenu () {
    const { menu_mobile, toogle_menu_mobile } = useSystemStore();

    return (
        <aside className={css.aside} data-opened={menu_mobile}>
            <Button className="ml-auto md:hidden" size="icon" onClick={() => toogle_menu_mobile(false)}>
                <Menu />
            </Button>
            <div className="flex items-center justify-between px-2">
                <h1 className="text-xl font-bold">SafeSpace</h1>
                { /* <NotificationsButton /> */ }
            </div>
            <div onClick={() => toogle_menu_mobile(false)}>
                <MainNav />
            </div>
            <div className="mt-auto" onClick={() => toogle_menu_mobile(false)}>
                <UserNav />
            </div>
        </aside>
    )
}