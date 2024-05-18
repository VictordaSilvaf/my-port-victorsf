import CardService from "@/components/CardService";
import TitleSection from "@/components/TitleSection";
import { Button } from "@nextui-org/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VictorSF - Desenvolvedor Fullstack",
  description: "Sou um desenvolvedor fullstack com uma abordagem completa para o desenvolvimento de software, desde a gestão de projetos até o deploy final. Atualmente, concentro minha atuação no ecossistema PHP, com um forte domínio do framework Laravel, que é amplamente reconhecido pela sua eficiência e poder.",
  generator: 'Next.js',
  applicationName: 'VictorSF',
  referrer: 'origin-when-cross-origin',
  keywords: ['Victor da Silva Fernandes', 'VictorSF', 'VictorDev'],
  authors: [{ name: 'Victor S. Fernandes' }],
  creator: 'Victor S. Fernandes',
  publisher: 'Victor S. Fernandes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function Home() {
  return (
    <div className="w-full h-full flex-1 relative overflow-y-auto overflow-hidden">
      <div className="w-full h-full flex-1 absolute">
        <TitleSection title='Sobre mim' />

        <div className="grid grid-cols-2">
          <div className="p-6">
            <p className="font-medium">
              Sou um desenvolvedor fullstack com uma abordagem completa para o desenvolvimento de software, desde a gestão de projetos até o deploy final. Atualmente, concentro minha atuação no ecossistema PHP, com um forte domínio do framework Laravel, que é amplamente reconhecido pela sua eficiência e poder.
            </p>
          </div>
          <div className="flex flex-col p-6 gap-y-6">
            <div className="flex flex-row justify-between border-b-[0.2px] border-blue-400 pb-2">
              <h4 className="bg-blue-500 text-white px-3 py-0.5">Idade . . .</h4>
              <p>24</p>
            </div>
            <div className="flex flex-row justify-between border-b-[0.2px] border-blue-400 pb-2">
              <h4 className="bg-blue-500 text-white px-3 py-0.5">Pais . . .</h4>
              <p>Brasil</p>
            </div>
            <div className="flex flex-row justify-between border-b-[0.2px] border-blue-400 pb-2">
              <h4 className="bg-blue-500 text-white px-3 py-0.5">Disponibilidade . . .</h4>
              <p>Noweb Publicidade</p>
            </div>
            <div className="flex flex-row justify-between border-b-[0.2px] border-blue-400 pb-2">
              <h4 className="bg-blue-500 text-white px-3 py-0.5">Endereço . . .</h4>
              <p>São Paulo, SP</p>
            </div>
          </div>
        </div>

        <TitleSection title='Meus Serviços' />

        <div className="grid grid-cols-2">
          <CardService
            title='Desenvolvedor Frontend'
            description='Modern and mobile-ready website that will help you reach all of your marketing.'
          />

          <CardService
            title='Desenvolvedor Backend'
            description='Modern and mobile-ready website that will help you reach all of your marketing.'
          />


          <CardService
            title='Desenvolvedor Mobile'
            description='Modern and mobile-ready website that will help you reach all of your marketing.'
          />

          <CardService
            title='Desenvolvedor E-Commerce'
            description='Modern and mobile-ready website that will help you reach all of your marketing.'
          />
        </div>

        <TitleSection title='Projetos' />

        <TitleSection title='Experiências' />

        <TitleSection title='Clientes' />

        <TitleSection title='Meus Serviços' />
      </div>
    </div>
  );
}
