"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { MainNav } from "./main-nav"
import { UserNav } from "./user-nav"
import { NotificationsButton } from "./notifications-button"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-6">
        <div className="flex flex-col h-full gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">UX Forum</h1>
            <NotificationsButton />
          </div>
          <MainNav />
          <div className="mt-auto">
            <UserNav />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}