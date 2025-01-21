import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { NotificationsButton } from "@/components/notifications-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const benefits = [
  {
    title: "Membro Bronze",
    price: "Grátis",
    features: [
      "Acesso a todos os tópicos",
      "Participação em discussões",
      "Perfil personalizado"
    ],
    current: true
  },
  {
    title: "Membro Prata",
    price: "R$ 19,90/mês",
    features: [
      "Todos os benefícios do Bronze",
      "Badge exclusiva",
      "Sem anúncios",
      "Acesso antecipado a novos recursos"
    ],
    highlight: true
  },
  {
    title: "Membro Ouro",
    price: "R$ 39,90/mês",
    features: [
      "Todos os benefícios do Prata",
      "Suporte prioritário",
      "Eventos exclusivos",
      "Mentoria mensal",
      "Recursos beta"
    ]
  }
]

export default function BenefitsPage() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r px-4 py-6 flex flex-col gap-6">
        <div className="flex items-center justify-between px-2">
          <h1 className="text-xl font-bold">UX Forum</h1>
          <NotificationsButton />
        </div>
        <MainNav />
        <div className="mt-auto">
          <UserNav />
        </div>
      </aside>

      <main className="flex-1 px-6 py-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Gift className="h-6 w-6" />
            <h2 className="text-3xl font-bold">Benefícios</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
                        <Check className="h-4 w-4 text-primary" />
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