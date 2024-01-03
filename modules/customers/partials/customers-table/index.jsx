import Button from "@/components/button"

function CustomerRow(props) {
    const { name, email, contactNumber, interactionWith, id } = props
    return (
        <div className="table-row w-full">
            <div className="col-span-1">
                <p>{id}</p>
            </div>
            <div className="col-span-3">
                <p className="text-base font-semibold">{name}</p>
                <p className="text-sm">{email}</p>
                <p className="text-sm">{contactNumber}</p>
            </div>
            <div className="col-span-3">
                <p>{interactionWith}</p>
            </div>
            <div className="col-span-3">
                <Button text="Add remarks" leftIcon="plus"/>
            </div>
            <div className="col-span-2 flex items-center gap-x-3">
                <Button icon="edit"/>
                <Button icon="delete-red"/>
            </div>
        </div>
    )
}

export default function CustomersTable(props) {
    const { CUSTOMERS } = props
    return (
        <div className="table mt-5">
            <div className="table-head">
                <div className="col-span-1">
                    <p>ID</p>
                </div>
                <div className="col-span-3">
                    <p>Person info</p>
                </div>
                <div className="col-span-3">
                    <p>Interacted via</p>
                </div>
                <div className="col-span-3">
                    <p>Remarks</p>
                </div>
                <div className="col-span-2">
                    <p>Actions</p>
                </div>
            </div>
            <div>
                {
                    CUSTOMERS.map((item, key) => <CustomerRow {...item} key={key} id={key + 1} />)
                }
            </div>
        </div>
    )
}