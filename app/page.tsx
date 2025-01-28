import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { NotificationsButton } from "@/components/notifications-button"
import { MobileNav } from "@/components/mobile-nav"
import { TopicCard } from "@/components/topic-card"
import { NewTopicDialog } from "@/components/new-topic-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Filter } from "lucide-react"

const topics = [
  {
    "title": "Pressão excessiva e prazos irreais: como lidar?",
    "author": {
      "name": "0rd3r1Y4",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces"
    },
    "category": "Saúde Mental",
    "replies": 5,
    "likes": 32,
    "excerpt": "Ultimamente, a carga de trabalho tem sido tão grande que me sinto exausto e desmotivado. Os prazos são cada vez mais curtos e a pressão para entregar resultados é constante. Como vocês lidam com essa situação?",
    "timestamp": "2 horas atrás",
    "comments": [
      {
        "id": 1,
        "author": {
          "name": "TheOffice",
          "avatar": "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&h=64&fit=crop&crop=faces"
        },
        "content": "Sinto exatamente o mesmo! A pressão é constante e parece que nunca estamos fazendo o suficiente. Já tentei conversar com meu gestor, mas a resposta é sempre a mesma: 'Precisamos entregar!'. Acho que a empresa precisa repensar a forma como lida com os prazos e a carga de trabalho.",
        "timestamp": "1 hora atrás"
      },
      {
        "id": 2,
        "author": {
          "name": "SonoModeOn",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces"
        },
        "content": "Concordo plenamente! Além da pressão, a falta de reconhecimento também pesa muito. Trabalhamos duro, mas não vemos nenhum tipo de retorno, seja um feedback positivo ou uma oportunidade de crescimento. Isso acaba nos desmotivando cada vez mais.",
        "timestamp": "30 minutos atrás"
      },
      {
        "id": 3,
        "author": {
          "name": "CaféViciado",
          "avatar": "https://images.unsplash.com/photo-1508214799962-5a87916b1077?w=64&h=64&fit=crop&crop=faces"
        },
        "content": "Gente, essa situação é insustentável! Precisamos nos unir e fazer algo a respeito. Que tal criarmos um abaixo-assinado pedindo melhores condições de trabalho?",
        "timestamp": "20 minutos atrás"
      },
    ]
  },
  {
    "title": "Falta de reconhecimento e oportunidades de crescimento",
    "author": {
      "name": "RoarDope",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces"
    },
    "category": "Carreira",
    "replies": 3,
    "likes": 18,
    "excerpt": "Sinto que meu trabalho não está sendo reconhecido como deveria. Me esforço ao máximo, mas não vejo oportunidades de crescimento na empresa. Alguém mais se sente assim?",
    "timestamp": "5 horas atrás",
    "comments": [
      {
        "id": 1,
        "author": {
          "name": "EmailNinja",
          "avatar": "https://images.unsplash.com/photo-1502823403499-68823ca1099c?w=64&h=64&fit=crop&crop=faces"
        },
        "content": "Eu também me sinto assim! Parece que não importa o quanto nos dedicamos, nunca é suficiente. Já pensei em procurar outro emprego, mas tenho medo de não encontrar nada melhor.",
        "timestamp": "4 horas atrás"
      },
      {
        "id": 2,
        "author": {
          "name": "HappyHourHero",
          "avatar": "https://images.unsplash.com/photo-1547425316575-58a93a0278f9?w=64&h=64&fit=crop&crop=faces"
        },
        "content": "Eu já estou procurando! Cansei de não ter oportunidades de crescimento e de não ser reconhecido pelo meu trabalho. Acho que a empresa não valoriza seus funcionários.",
        "timestamp": "3 horas atrás"
      },
      {
        "id": 3,
        "author": {
          "name": "FeriadoWaiting",
          "avatar": "https://images.unsplash.com/photo-1568602471122-78329e105ba2?w=64&h=64&fit=crop&crop=faces"
        },
        "content": "Gente, vamos aproveitar esse espaço para fazermos um movimento e mostrarmos para a empresa que estamos insatisfeitos. Quem topa?",
        "timestamp": "2 horas atrás"
      }
    ]
  },
  {
    "title": "Comunicação interna falha: como melhorar?",
    "author": {
      "name": "PrizedMoment",
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces"
    },
    "category": "Comunicação",
    "replies": 1,
    "likes": 25,
    "excerpt": "A comunicação entre os setores da empresa é muito falha, o que causa ruídos e dificulta o andamento dos projetos. Como podemos melhorar a comunicação interna?",
    "timestamp": "1 dia atrás",
    "comments": [
      {
        "id": 1,
        "author": {
          "name": "SonoModeOn",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces"
        },
        "content": "Concordo plenamente! A falta de comunicação é um dos maiores problemas da empresa. Já perdi a conta de quantas vezes um projeto ficou parado por falta de informação.",
        "timestamp": "20 horas atrás"
      }
    ]
  }
]

export default function Home() {
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
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Tópicos</h2>
              <NewTopicDialog />
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <Input placeholder="Busque por tópicos..." />
              </div>
              <div className="flex gap-4">
                <Select defaultValue="latest">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Últimos</SelectItem>
                    <SelectItem value="popular">Populares</SelectItem>
                    <SelectItem value="unanswered">Unanswered</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
              </div>
            </div>

            {/* Topics list */}
            <div className="space-y-4">
              {topics.map((topic, index) => (
                <TopicCard key={index} {...topic} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="outline" size="sm">1</Button>
                <Button variant="secondary" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}