import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { NotificationsButton } from "@/components/notifications-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Shield, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { MobileNav } from "@/components/mobile-nav"

const disputes = [
  {
    id: 1,
    title: "Design System Implementation Guide",
    reason: "Conteúdo Duplicado",
    status: "Em Análise",
    date: "2024-03-20",
    response: null
  },
  {
    id: 2,
    title: "UX Research Methods",
    reason: "Violação de Diretrizes",
    status: "Rejeitado",
    date: "2024-03-19",
    response: "O conteúdo viola diretamente as diretrizes da comunidade sobre compartilhamento de informações confidenciais."
  },
  {
    id: 3,
    title: "Mobile First Design Principles",
    reason: "Spam",
    status: "Aprovado",
    date: "2024-03-18",
    response: "Disputa aprovada. O post foi restaurado."
  }
]

const statusColors = {
  "Em Análise": "bg-yellow-500",
  "Rejeitado": "bg-red-500",
  "Aprovado": "bg-green-500"
}

export default function DisputesPage() {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden md:flex w-64 border-r px-4 py-6 flex-col gap-6">
        <div className="flex items-center justify-between px-2">
          <h1 className="text-xl font-bold">UX Forum</h1>
          <NotificationsButton />
        </div>
        <MainNav />
        <div className="mt-auto">
          <UserNav />
        </div>
      </aside>

      <main className="flex-1">
        <header className="md:hidden flex items-center justify-between px-4 py-4 border-b">
          <div className="flex items-center gap-2">
            <MobileNav />
            <h1 className="text-xl font-bold">UX Forum</h1>
          </div>
          <div className="flex items-center gap-2">
            <NotificationsButton />
          </div>
        </header>

        <div className="px-4 md:px-6 py-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6" />
                <h2 className="text-3xl font-bold">Disputas</h2>
              </div>
              {/* <Button>
                Nova Disputa
              </Button> */}
            </div>

            <Card className="mb-8">
              <CardHeader>
                <h3 className="text-lg font-semibold">Criar Nova Disputa</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tópico</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o post" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="post1">Design System Implementation Guide</SelectItem>
                      <SelectItem value="post2">UX Research Methods</SelectItem>
                      <SelectItem value="post3">Mobile First Design Principles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Motivo</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o motivo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="duplicate">Conteúdo Duplicado</SelectItem>
                      <SelectItem value="guidelines">Violação de Diretrizes</SelectItem>
                      <SelectItem value="spam">Spam</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Justificativa</label>
                  <Textarea placeholder="Explique por que você acredita que este post deve ser restaurado..." />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Enviar Disputa</Button>
              </CardFooter>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Histórico de Disputas</h3>
              {disputes.map((dispute) => (
                <Card key={dispute.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{dispute.title}</h4>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <span className={`h-2 w-2 rounded-full ${statusColors[dispute.status as "Em Análise" | "Rejeitado" | "Aprovado"]}`} />
                        {dispute.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Motivo: {dispute.reason}</p>
                      <p>Data: {dispute.date}</p>
                    </div>
                  </CardHeader>
                  {dispute.response && (
                    <CardContent>
                      <div className="flex items-start gap-2 text-sm bg-muted/50 p-3 rounded-lg">
                        <AlertCircle className="h-4 w-4 mt-0.5" />
                        <p>{dispute.response}</p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}