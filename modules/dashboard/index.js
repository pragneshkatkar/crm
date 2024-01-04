import DashboardWrapper from "@/components/dashboard-wrapper";
import DashboardCard from "./partials/dashboard-card";

export default function Dashboard(){
    return (
        <>
        <DashboardWrapper active="Dashboard">
            <div className="main-section-header flex items-center justify-between">
                <div>
                    <h2>Dashboard</h2>
                    <p>Overview of your CRM</p>
                </div>
                <div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <DashboardCard icon="customers" text="Total customers" number={50}/>
                <DashboardCard icon="not-contacted" text="Not contacted yet" number={30}/>
                <DashboardCard icon="potential" text="Potential customers" number={20}/>
            </div>
        </DashboardWrapper>
        </>
    )
}