"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

const navItems = [
  {
    title: "Tópicos",
    href: "/",
    icon: MessageSquare
  }
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col gap-2">
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <Button
            key={item.href}
            variant={pathname === item.href ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start gap-2",
              pathname === item.href && "bg-muted"
            )}
            asChild
          >
            <Link href={item.href}>
              <Icon className="h-4 w-4" />
              {item.title}
            </Link>
          </Button>
        )
      })}
    </div>
  )
}