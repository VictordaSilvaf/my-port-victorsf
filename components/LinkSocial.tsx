import Image from "next/image";
import Link from "next/link";

interface LinkSocialProps {
    icon: string;
    link: string;
}

export default function LinkSocial({ icon, link }: LinkSocialProps) {
    return (
        <Link href={link} className="group">
            <Image
              src={icon}
              alt="imagem para link para rede social"
              className="group-hover:scale-110 duration-500"
              width={24}
              height={24}
              priority
            />
        </Link>
    )
}