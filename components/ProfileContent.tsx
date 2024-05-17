import Image from "next/image";
import LinkSocial from "./LinkSocial";
import UserImage from "@/public/assets/images/user_image.jpg";
import Link from "next/link";

export default function ProfileContent() {
    return (
        <section className=" h-full w-[480px] rounded-lg relative">
            <div className="bg-white shadow h-full w-full rounded-lg relative z-[1] flex flex-col flex-grow">
                <div className="w-full h-[55%] rounded-t-lg rounded-b-[100%] shadow-xl overflow-hidden">
                    <Image
                        className="h-full w-full object-cover object-center"
                        src={UserImage}
                        alt="Minha foto"
                    />
                </div>

                <div className="w-full h-[45%] mt-8 flex items-center flex-col flex-1 gap-y-3">
                    <h1 className="text-3xl text-center text-zinc-700 font-semibold">Victor S. Fernandes</h1>
                    <p className="text-md text-center text-blue-500 font-semibold">Desenvolvedor Fullstack</p>
                    <div className="flex flex-row justify-center gap-x-5 mt-2">
                        <LinkSocial icon='/assets/icons/github_line.svg' link="#" />
                        <LinkSocial icon='/assets/icons/instagram_line.svg' link="#" />
                        <LinkSocial icon='/assets/icons/linkedin_line.svg' link="#" />
                        <LinkSocial icon='/assets/icons/twitter_line.svg' link="#" />
                        <LinkSocial icon='/assets/icons/whatsapp_line.svg' link="#" />
                    </div>
                </div>
                
                <div className="w-full flex flex-row">
                    <Link className="uppercase flex-1 border-t hover:bg-sky-200 duration-500 p-6 text-center" href='#'>Baixar CV</Link>
                    <Link className="uppercase flex-1 border-t hover:bg-sky-200 duration-500 border-l p-6 text-center" href='#'>Entrar em Contato</Link>
                </div>
            </div>
            <div className="bg-sky-200 opacity-50 h-full w-full rounded-lg -top-3 -left-4 absolute z-0"></div>
        </section>
    )
} 