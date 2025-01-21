"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import useSystemStore from "@/stores/system";

export function HeaderMobile () {
    const { toogle_menu_mobile, menu_mobile } = useSystemStore();

    return (
        <header className="py-6 px-4 w-full flex justify-between items-center md:hidden">
            <h1 className="text-xl font-bold">SafeSpace</h1>
            <Button size="icon" onClick={() => toogle_menu_mobile(!menu_mobile)}>
                <Menu />
            </Button>
        </header>
    )
}