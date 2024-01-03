import DashboardWrapper from "@/components/dashboard-wrapper";
import { CUSTOMERS } from "@/utils/globals";
import CustomersTable from "./partials/customers-table";
import AddButton from "./partials/add-button";

export default function Customers() {
    return (
        <>
            <DashboardWrapper active="Customers">
                <div className="main-section-header flex items-center justify-between">
                    <div>
                        <h2>Customers</h2>
                        <p>People that have purchased the product</p>
                    </div>
                    <div>
                        <AddButton/>
                    </div>
                </div>

                <CustomersTable CUSTOMERS={CUSTOMERS} />
            </DashboardWrapper>
        </>
    )
}