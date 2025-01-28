import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { NotificationsButton } from "@/components/notifications-button"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, Check,  Brain , HeartHandshake, Dumbbell } from "lucide-react"

const benefits = [
  {
    title: "Plataformas de Terapia Online",
    description: "Acesse sessões gratuitas ou com desconto em plataformas de terapia online para apoio psicológico profissional.",
    icon: "Brain",
    features: [
      "Atendimento com psicólogos licenciados",
      "Sessões individuais ou em grupo",
      "Disponível 24/7"
    ],
    link: "#",
    highlight: true
  },
  {
    title: "Apps de Meditação e Mindfulness",
    description: "Tenha acesso premium a aplicativos que ajudam a reduzir o estresse e melhorar a concentração.",
    icon: "HeartHandshake",
    features: [
      "Exercícios guiados de respiração e relaxamento",
      "Acompanhamento do bem-estar emocional",
      "Programas personalizados para ansiedade e sono"
    ],
    link: "#"
  },
  {
    title: "Benefícios para Atividade Física",
    description: "Parcerias com academias e apps de treino para incentivar hábitos saudáveis e melhorar a saúde mental.",
    icon: "Dumbbell",
    features: [
      "Acesso a academias e estúdios de yoga",
      "Aulas de exercícios para aliviar o estresse",
      "Treinos personalizados para bem-estar mental"
    ],
    link: "#"
  },
  {
    title: "Programas de Apoio Psicológico Empresarial",
    description: "Serviços internos ou parcerias para apoio psicológico contínuo no ambiente corporativo.",
    icon: "Brain",
    features: [
      "Atendimento com psicólogos e coachings de bem-estar",
      "Grupos de apoio e palestras sobre saúde mental",
      "Políticas de equilíbrio entre vida pessoal e profissional"
    ],
    link: "#"
  }
];

const getIcon = (name: string) => {
  const iconProps = { className: "h-10 w-10 text-primary" }
  switch (name) {
    case "Brain":
      return <Brain {...iconProps} />
    case "Dumbbell":
      return <Dumbbell {...iconProps} />
    case "HeartHandshake":
      return <HeartHandshake {...iconProps} />
    default:
      return null
  }
}

export default function BenefitsPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar para desktop */}
      <aside className="hidden md:flex w-64 border-r px-4 py-6 flex-col gap-6">
        <div className="flex items-center justify-between px-2">
          <h1 className="text-xl font-bold">Safe Space</h1>
          <NotificationsButton />
        </div>
        <MainNav />
        <div className="mt-auto">
          <UserNav />
        </div>
      </aside>

      <main className="flex-1">
        {/* Header móvel */}
        <header className="md:hidden flex items-center justify-between px-4 py-4 border-b">
          <div className="flex items-center gap-2">
            <MobileNav />
            <h1 className="text-xl font-bold">Safe Space</h1>
          </div>
          <div className="flex items-center gap-2">
            <NotificationsButton />
          </div>
        </header>

        <div className="px-4 md:px-6 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Gift className="h-6 w-6" />
              <h2 className="text-3xl font-bold">Benefícios</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <Card 
                  key={benefit.title} 
                  className={`flex flex-col h-full transition-all hover:shadow-lg ${
                    benefit.highlight ? 'border-primary shadow-md' : ''
                  }`}
                >
                  <CardHeader className="text-center space-y-4 pb-4">
                    <div className="mx-auto bg-primary/5 p-3 rounded-full">
                      {getIcon(benefit.icon)}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{benefit.title}</h3>
                      {benefit.highlight && (
                        <Badge variant="secondary" className="mt-2">
                          Mais Popular
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground text-sm mb-6">
                      {benefit.description}
                    </p>
                    <ul className="space-y-3">
                      {benefit.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-6">
                    <Button className="w-full" asChild>
                      <a href={benefit.link}>
                        Saber mais
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}