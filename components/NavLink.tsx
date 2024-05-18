import Image from "next/image";
import Link from "next/link";

export default function NavLink({ title, icon, link }: { title: string | null, link: string, icon: string }) {
    return (
        <Link href={link} className="w-20 h-20 p-1 flex flex-col items-center justify-center hover:bg-sky-200 hover:fill-white duration-400 rounded-md gap-y-2">
            <div className="flex items-center justify-center">
                <Image
                    src={icon}
                    alt="imagem para link para rede social"
                    className="group-hover:scale-110 duration-500"
                    width={24}
                    height={24}
                    priority
                />
            </div>
            {title && <span className="uppercase text-[9px] font-semibold text-center">{title}</span>}
        </Link>
    )
}