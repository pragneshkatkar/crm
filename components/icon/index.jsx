import Image from "next/image";

export default function Icon(props){
    const {icon, additionalClasses} = props
    return (
        <div className={`${additionalClasses} flex-shrink-0`}>
            <Image src={`/images/icons/${icon}.svg`} width={24} height={24} alt={icon}/>
        </div>
    )
}