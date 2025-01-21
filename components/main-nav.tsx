"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { 
  Home, 
  MessageSquare, 
  Settings, 
  AlertCircle,
  Gift,
  Shield
} from "lucide-react"

const navItems = [
  /*{
    title: "Home",
    href: "/",
    icon: Home
  },*/
  {
    title: "Tópicos",
    href: "/",
    icon: MessageSquare
  },
  {
    title: "Avisos",
    href: "/announcements",
    icon: AlertCircle
  },
  {
    title: "Benefícios",
    href: "/benefits",
    icon: Gift
  },
  {
    title: "Disputas",
    href: "/disputes",
    icon: Shield
  },
  {
    title: "Configurações",
    href: "/settings",
    icon: Settings
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