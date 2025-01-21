import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { NotificationsButton } from "@/components/notifications-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, Check, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

// ... (keep existing benefits data)

export default function BenefitsPage() {
  return (
    <div className="flex min-h-screen">
      {/* Mobile sidebar trigger */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden fixed left-4 top-4 z-50">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="h-full flex flex-col gap-6 p-4">
            <div className="flex items-center justify-between px-2">
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

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-64 border-r px-4 py-6 flex-col gap-6">
        <div className="flex items-center justify-between px-2">
          <h1 className="text-xl font-bold">UX Forum</h1>
          <NotificationsButton />
        </div>
        <MainNav />
        <div className="mt-auto">
          <UserNav />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-4 lg:px-6 py-6 pt-20 lg:pt-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Gift className="h-6 w-6" />
            <h2 className="text-2xl lg:text-3xl font-bold">Benefícios</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((tier) => (
              <Card key={tier.title} className={cn(
                "relative",
                tier.highlight && "border-primary shadow-lg"
              )}>
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="secondary">Mais Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <h3 className="text-2xl font-bold text-center">{tier.title}</h3>
                  <p className="text-xl text-center text-muted-foreground">{tier.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={tier.current ? "secondary" : "default"}>
                    {tier.current ? "Plano Atual" : "Escolher Plano"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}