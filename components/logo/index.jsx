import Image from "next/image";

export default function Logo(){
    return (
        <>
            <div className="w-[100px] h-10 relative">
                <Image src="/images/logo.png" fill objectFit="contain" objectPosition="left"/>
            </div>
        </>
    )
}