import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProfileContent from '@/components/ProfileContent'
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="relative w-screen h-screen flex justify-center items-center p-[5%] text-zinc-700">
          <video
            autoPlay
            muted
            loop
            aria-label=""
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          >
            <source src="/assets/videos/bobbles.mp4" type="video/mp4" />
            Seu navegador não tem suporte para esse formato de video.
            Vídeo de <a href="https://pixabay.com/pt/users/tommyvideo-3092371/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=121639">Tomislav Jakupec</a> no <a href="https://pixabay.com/pt//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=121639">Pixabay</a>
          </video>

          <div className="relative z-[1] h-full w-full max-w-[1280px] max-h-[650px]">
            <div className="w-full h-full flex relative">
              <NextUIProvider>
                <ProfileContent />
              </NextUIProvider>
              <div className="h-full flex-1 py-3">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
