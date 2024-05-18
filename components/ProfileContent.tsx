'use client';
import Image from "next/image";
import LinkSocial from "./LinkSocial";
import UserImage from "@/public/assets/images/eu3.jpg";
import Link from "next/link";
import NavLink from "./NavLink";

export default function ProfileContent() {
    function openDrawer() {
        alert('abrindo')
    }

    return (
        <section className="h-full w-full md:w-[480px] rounded-lg relative">
            <div className="bg-white shadow h-full w-full rounded-lg overflow-hidden relative z-[1] flex flex-col flex-grow">
                <div className="w-full h-[55%] rounded-t-lg rounded-b-[100%] shadow-xl overflow-hidden">
                    <Image
                        className="h-auto max-h-[350px] w-full object-cover object-center"
                        src={UserImage}
                        alt="Minha foto"
                    />
                </div>

                <div className="w-full h-[45%] mt-8 flex items-center flex-col flex-1 gap-y-3">
                    <h1 className="text-3xl text-center font-semibold">Victor S. Fernandes</h1>
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
                    <Link className="uppercase flex-1 border-t hover:bg-sky-200 duration-500 border-l p-6 text-center" href='/contato'>Entrar em Contato</Link>
                </div>
            </div>
            <div className="bg-sky-200 opacity-50 h-full w-full rounded-lg -top-3 -left-4 absolute z-0"></div>

            <div className="absolute md:-left-2 md:-translate-x-full md:top-4 flex flex-col gap-y-4 -top-4 -translate-y-full md:-translate-y-0">
                <div className="w-20 bg-white rounded-md shadow-lg">
                    <button onClick={() => openDrawer()}>
                        <NavLink title={null} icon='/assets/icons/navIcons/menu.svg' link='#' />
                    </button>
                </div>

                <div className="md:w-20 bg-white rounded-md shadow-lg overflow-hidden flex flex-row md:flex-col">
                    <NavLink title={'sobre'} icon='/assets/icons/navIcons/user.svg' link='/' />
                    <NavLink title={'curriculo'} icon='/assets/icons/navIcons/web_13011352.svg' link='/curriculo' />
                    <NavLink title={'trabalhos'} icon='/assets/icons/navIcons/layers_563119.svg' link='/trabalhos' />
                    <NavLink title={'postagens'} icon='/assets/icons/navIcons/note_15006934.svg' link='/postagens' />
                    <NavLink title={'contato'} icon='/assets/icons/navIcons/email.svg' link='/contato' />
                </div>
            </div>
        </section>
    )
} 