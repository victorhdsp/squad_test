import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { NotificationsButton } from "@/components/notifications-button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {Check, Github, Youtube, Music2Icon, TicketSlash, Gift} from "lucide-react"; // Ícones

// Dados atualizados
const experiences = [
  {
    title: "GitHub Student Pack",
    description: "Acesse gratuitamente ferramentas essenciais para desenvolvedores, incluindo GitHub Pro, Microsoft Azure, entre outros.",
    offers: ["GitHub Pro", "Microsoft Azure", "Namecheap"],
    icon: "GitHub",
    link: "#",
  },
  {
    title: "YouTube Music University",
    description: "Aproveite o YouTube Music Premium com sua conta de estudante e ouça suas músicas favoritas sem anúncios e offline.",
    offers: ["YouTube Music Premium"],
    icon: "Music",
    link: "#",
  },
  {
    title: "Web Summit",
    description: "Garanta seu ingresso gratuito para eventos de tecnologia e inovação, enquanto houver disponibilidade.",
    offers: ["Web Summit"],
    icon: "Event",
    link: "#",
  },
  {
    title: "Rio Innovation Week",
    description: "Garanta seu ingresso gratuito para evento de tecnologia e inovação, enquanto houver disponibilidade.",
    offers: ["Rio Innovation Week"],
    icon: "Event",
    link: "#",
  },
];

// Função para escolher o ícone certo
const getIcon = (name) => {
  switch (name) {
    case "Music":
      return <Youtube className="h-12 w-12 text-primary" />;
    case "Event":
      return <TicketSlash className="h-12 w-12 text-primary" />;
    case "GitHub":
      return <Github className="h-12 w-12 text-primary" />;
    default:
      return null;
  }
};


export default function ExperiencesPage() {
  return (
      <div className="flex min-h-screen">
        <aside className="w-64 border-r px-4 py-6 flex flex-col gap-6">
          <div className="flex items-center justify-between px-2">
            <h1 className="text-xl font-bold">Benefícios</h1>
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
              {experiences.map((exp) => (
                  <Card key={exp.title} className="relative">
                    <CardHeader className="flex flex-col items-center">
                      {/* Ícone dinâmico baseado no tipo da experiência */}
                      {getIcon(exp.icon)}
                      <h3 className="text-2xl font-bold text-center mt-4">{exp.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-muted-foreground">{exp.description}</p>
                      <ul className="space-y-2 mt-4">
                        {exp.offers.map((offer) => (
                            <li key={offer} className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-primary" />
                              <span>{offer}</span>
                            </li>
                        ))}
                      </ul>
                      <div className="flex-grow" />
                    </CardContent>
                    <CardFooter className="mt-auto p-4">
                      <Button className="w-full py-3 text-lg" asChild>
                        <a href={exp.link}>Saber mais</a>
                      </Button>
                    </CardFooter>
                  </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
  );
}
