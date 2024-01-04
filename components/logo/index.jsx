import Image from "next/image";
import Link from "next/link";

export default function Logo(){
    return (
        <>
            <Link href="/" className="w-[100px] h-10 relative">
                <Image src="/images/logo.png" alt="logo" fill objectFit="contain" objectPosition="left"/>
            </Link>
        </>
    )
}