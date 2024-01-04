import DashboardWrapper from "@/components/dashboard-wrapper";

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

            {/* <CustomersTable CUSTOMERS={CUSTOMERS} /> */}
        </DashboardWrapper>
        </>
    )
}