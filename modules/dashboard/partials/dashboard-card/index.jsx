import Icon from "@/components/icon";

export default function DashboardCard(props){
    const {icon, text, number} = props
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-xl mt-4">
            <Icon xl icon={icon}/>
            <p className="text-sm font-semibold mt-4">{text}</p>
            <p className="text-4xl font-bold text-right">{number}</p>
        </div>
    )
}