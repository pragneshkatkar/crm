import DashboardWrapper from "@/components/dashboard-wrapper";
import AddButton from "./partials/add-button";
import InteractionsTable from "./partials/interactions-table";
import { INTERACTIONS } from "@/utils/globals";

export default function Interactions(){
    return (
        <>
            <DashboardWrapper active="Interactions">
                <div className="main-section-header flex items-center justify-between">
                    <div>
                        <h2>Interactions</h2>
                        <p>People that we have interacted with</p>
                    </div>
                    <div>
                        <AddButton/>
                    </div>
                </div>

                <InteractionsTable INTERACTIONS={INTERACTIONS} />
            </DashboardWrapper>
        </>
    )
}