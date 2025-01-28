import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { NotificationsButton } from "@/components/notifications-button"
import { MobileNav } from "@/components/mobile-nav"
import { NewAnnouncementDialog } from "@/components/new-announcement-dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle } from "lucide-react"

const announcements = [
  {
    "id": 3,
    "title": "Cuidando da sua Saúde Mental no Trabalho",
    "content": `A saúde mental é fundamental para o nosso bem-estar e desempenho no trabalho. Por isso, o RH preparou algumas dicas para lidar com o estresse e manter o equilíbrio emocional:
    
    * Reconheça os sinais: Identifique os sintomas de estresse, como irritabilidade, insônia e dificuldade de concentração.
    * Gerencie o tempo: Organize suas tarefas, priorize atividades e evite sobrecarga de trabalho.
    * Faça pausas: Tire alguns minutos para relaxar e se desconectar do trabalho durante o expediente.
    * Busque apoio: Converse com seus colegas, superiores ou procure ajuda profissional se necessário.
    * Mantenha hábitos saudáveis: Alimente-se bem, pratique exercícios físicos e durma adequadamente.
  
  Lembre-se: a sua saúde mental é importante! Cuide-se e busque ajuda quando precisar.`,
    "author": {
      "name": "Jane Doe",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces"
    },
    "date": "2024-04-26",
    "comments": [
      {
        "id": 1,
        "author": {
          "name": "0rd3r1Y4",
          "avatar": "https://images.unsplash.com/photo-1508214799942-5114878c42d2?w=64&h=64&fit=crop&crop=faces"
        },
        "content": "Ótimas dicas! A saúde mental é essencial para um ambiente de trabalho positivo.",
        "date": "2024-04-26"
      },
      {
        "id": 2,
        "author": {
          "name": "SonoModeOn",
          "avatar": "https://images.unsplash.com/photo-1499781350552-c91299a32399?w=64&h=64&fit=crop&crop=faces"
        },
        "content": "Concordo! E é importante que a empresa ofereça suporte para cuidarmos da nossa saúde mental.",
        "date": "2024-04-26"
      }
    ]
  },
  {
    "id": 4,
    "title": "Novo Feriado Municipal!",
    "content": "Atenção, pessoal! Temos uma ótima notícia: foi decretado um novo feriado municipal em comemoração ao aniversário da cidade. O feriado será no dia 15 de maio, uma ótima oportunidade para descansarmos e aproveitarmos a cidade!\n\nJá estamos preparando um calendário com os próximos feriados para que todos possam se planejar. Fiquem ligados nos próximos avisos!",
    "author": {
      "name": "Jane Doe",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces"
    },
    "date": "2024-04-26",
    "comments": [
      {
        "id": 1,
        "author": {
          "name": "RoarDope",
          "avatar": "https://images.unsplash.com/photo-1547425317-a4bca2969a69?w=64&h=64&fit=crop&crop=faces"
        },
        "content": "Que legal! Adoro feriados, já estou pensando em como aproveitar!",
        "date": "2024-04-26"
      },
      {
        "id": 2,
        "author": {
        "name": "Jane Doe",
        "avatar": "https://images.unsplash.com/photo-1531427186611-87139c72c09d?w=64&h=64&fit=crop&crop=faces"
        },
        "content": "Boa! Mais um dia para descansar. Ansioso para o feriado!",
        "date": "2024-04-26"
      }
    ]
  }
]

export default function AnnouncementsPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar para desktop */}
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
        {/* Header móvel */}
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
              <h2 className="text-3xl font-bold">Anúncios</h2>
              <NewAnnouncementDialog />
            </div>

            <div className="space-y-6">
              {announcements.map((announcement) => (
                <Card key={announcement.id}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={announcement.author.avatar} />
                        <AvatarFallback>{announcement.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-semibold">{announcement.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{announcement.author.name}</span>
                          <span>•</span>
                          <span>{announcement.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-break-spaces text-muted-foreground">{announcement.content}</p>
                    
                    {/* Comments section */}
                    <div className="mt-6 space-y-4">
                      <h4 className="font-medium flex items-center gap-2">
                        <MessageCircle className="h-4 w-4" />
                        Comentários
                      </h4>
                      {announcement.comments.map((comment) => (
                        <div key={comment.id} className="flex gap-4 pl-4 border-l">
                          {/*<Avatar className="h-8 w-8">
                            <AvatarImage src={comment.author.avatar} />
                            <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
                          </Avatar>*/}
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{comment.author.name}</span>
                              <span className="text-sm text-muted-foreground">{comment.date}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{comment.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="w-full space-y-2">
                      <Textarea placeholder="Escreva um comentário..." />
                      <div className="flex justify-end">
                        <Button>Comentar</Button>
                      </div>
                    </div>
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