"use client"

import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { NotificationsButton } from "@/components/notifications-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'
import { TrendingUp, MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react"

const sentimentData = [
  { name: 'Positivo', value: 72 },
  { name: 'Negativo', value: 28 }
]

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))']

const topicsData = [
  { topic: 'Cultura', count: 156, description: 'Discussões sobre cultura organizacional e valores' },
  { topic: 'Liderança', count: 142, description: 'Práticas de liderança e gestão de equipes' },
  { topic: 'Bem-estar', count: 128, description: 'Saúde mental e qualidade de vida no trabalho' },
  { topic: 'Carreira', count: 97, description: 'Desenvolvimento profissional e oportunidades' },
  { topic: 'Processos', count: 85, description: 'Melhorias em fluxos de trabalho' },
  { topic: 'Inovação', count: 76, description: 'Novas tecnologias e métodos de trabalho' },
]

const metrics = [
  {
    title: "Tópicos Ativos",
    value: "324",
    description: "↗︎ 12% vs. mês anterior",
    icon: MessageSquare
  },
  {
    title: "Sentimento Positivo",
    value: "72%",
    description: "↗︎ 8% vs. mês anterior",
    icon: ThumbsUp
  },
  {
    title: "Sentimento Negativo",
    value: "28%",
    description: "↘︎ 8% vs. mês anterior",
    icon: ThumbsDown
  },
  {
    title: "Tópicos Tendência",
    value: "12",
    description: "↗︎ 4 novos esta semana",
    icon: TrendingUp
  }
]

const CustomPieLabel = ({ name, percent }: { name: string; percent: number }) => {
  return `${name} ${(percent * 100).toFixed(0)}%`
}

export default function DashboardPage() {
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Dashboard Analytics</h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {metrics.map((metric) => {
              const Icon = metric.icon
              return (
                <Card key={metric.title}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {metric.title}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <p className="text-xs text-muted-foreground">
                      {metric.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Tabs defaultValue="sentiment" className="space-y-4">
            <TabsList>
              <TabsTrigger value="sentiment">Análise de Sentimentos</TabsTrigger>
              <TabsTrigger value="topics">Tópicos Discutidos</TabsTrigger>
            </TabsList>
            <TabsContent value="sentiment" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Distribuição de Sentimentos</CardTitle>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sentimentData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={CustomPieLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {sentimentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="topics" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Tópicos Mais Discutidos</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={topicsData} layout="vertical" margin={{ left: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          type="number"
                          orientation="top"
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis 
                          dataKey="topic"
                          type="category"
                          width={100}
                          axisLine={false}
                          tickLine={false}
                        />
                        <Tooltip />
                        <Bar 
                          dataKey="count" 
                          fill="hsl(var(--chart-1))" 
                          name="Quantidade"
                          radius={[0, 4, 4, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Detalhes dos Tópicos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topicsData.map((topic) => (
                        <div key={topic.topic} className="border-b pb-4 last:border-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold">{topic.topic}</h4>
                            <span className="text-sm text-muted-foreground">{topic.count} discussões</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{topic.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}