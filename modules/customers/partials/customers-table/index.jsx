"use client"
import Button from "@/components/button"
import Input from "@/components/input"
import Select from "@/components/select"
import { useState } from "react"
import EditCustomerPopup from "../edit-customer-popup"
import Modal from "@/components/modal"
import useToggle from "@/utils/hooks/toggle"
import RemarksPopup from "@/modules/interactions/partials/remarks-popup"

function CustomerRow(props) {
    const { name, email, contactNumber, interactionWith, id, type, openEditCustomerPopup, openRemarksPopup } = props
    return (
        <tr className="table-row w-full group">
            <td>
                <p>{id}</p>
            </td>
            <td>
                <p className="text-base font-semibold">{name}</p>
                <p className="text-sm">{email}</p>
                <p className="text-sm">{contactNumber}</p>
            </td>
            <td className="flex items-center">
                <p className={`block px-3 text-xs uppercase font-semibold py-1 rounded-full ${interactionWith ? "bg-green-200" : "bg-red-200"}`}>{interactionWith || "Not contacted yet"}</p>
            </td>
            <td>
                <p>{type}</p>
            </td>
            <td className="opacity-0 group-hover:opacity-100">
                <Button text="Add remarks" leftIcon="plus" attrs={{onClick: openRemarksPopup}} />
            </td>
            <td className="flex items-center gap-x-3 opacity-0 group-hover:opacity-100">
                <Button icon="edit" attrs={{ onClick: () => openEditCustomerPopup(id) }} />
                <Button icon="delete-red" />
            </td>
        </tr>
    )
}

export default function CustomersTable(props) {
    const { CUSTOMERS } = props

    const [customers, setCustomers] = useState(CUSTOMERS)

    const onChangeSearchInput = (e) => {
        const keyword = e.target.value
        if (keyword == "" || keyword == null) {
            setCustomers(CUSTOMERS)
            return
        }

        let filteredCustomers = CUSTOMERS.filter(contact => {
            const name = contact.name.toLowerCase();
            const email = contact.email.toLowerCase();
            const contactNumber = contact.contactNumber.toLowerCase();

            return name.includes(keyword) || email.includes(keyword) || contactNumber.includes(keyword);
        });

        setCustomers(filteredCustomers)
    }
    const searchInput = {
        attrs: {
            placeholder: "Search for customers",
            onChange: onChangeSearchInput
        }
    }

    const onChangeInteractionSelect = (e) => {
        const interaction = e.target.value
        if (interaction == "" || interaction == null) {
            setCustomers(CUSTOMERS)
            return
        }

        let filteredCustomers = CUSTOMERS.filter(contact => {
            const interactionWith = contact?.interactionWith?.toLowerCase();

            return interaction == "not" ? !interactionWith : interactionWith?.includes(interaction);
        });

        setCustomers(filteredCustomers)

    }

    const interactionOptions = [
        {
            text: "Call",
            value: "call"
        },
        {
            text: "Email",
            value: "email"
        },
        {
            text: "Meeting",
            value: "meeting"
        },
        {
            text: "Not interacted",
            value: "not"
        }
    ]
    const interactionSelect = {
        label: "select interaction",
        attrs: {
            onChange: onChangeInteractionSelect
        },
        options: interactionOptions
    }
    

    const onChangeTypeSelect = (e) => {
        const type = e.target.value
        if (type == "" || type == null) {
            setCustomers(CUSTOMERS)
            return
        }

        let filteredCustomers = CUSTOMERS.filter(contact => {
            return contact?.type == type;
        });

        setCustomers(filteredCustomers)

    }

    const typeOptions = [
        {
            text: "All",
            value: ""
        },
        {
            text: "Potential",
            value: "potential"
        },
        {
            text: "Past",
            value: "past"
        },
        {
            text: "Current",
            value: "current"
        }
    ]
    const typeSelect = {
        label: "select type",
        attrs: {
            onChange: onChangeTypeSelect
        },
        options: typeOptions
    }
    
    const [activeId, setActiveId] = useState(null)
    const isEditCustomerPopupOpen = activeId != null
    const openEditCustomerPopup = (id) => setActiveId(id)
    const closeEditCustomerPopup = () => setActiveId(null)

    const {isTrue: isRemarksPopupShown, setTrue: openRemarksPopup, setFalse: closeRemarksPopup} = useToggle()
    return (
        <>
            <div className="table-section">
                <div className="flex items-center border-b border-gray-300">
                    <div className="p-3">
                        <Input {...searchInput} />
                    </div>
                    <div className="p-3">
                        <Select {...interactionSelect} />
                    </div>
                    <div className="p-3">
                        <Select {...typeSelect} />
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <p>ID</p>
                            </th>
                            <th>
                                <p>Person info</p>
                            </th>
                            <th>
                                <p>Last Interacted via</p>
                            </th>
                            <th>
                                <p>Type</p>
                            </th>
                            <th>
                                <p>Remarks</p>
                            </th>
                            <th>
                                <p>Actions</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map((item, key) => <CustomerRow openEditCustomerPopup={openEditCustomerPopup} openRemarksPopup={openRemarksPopup} {...item} key={key} id={key + 1} />)
                        }
                    </tbody>
                </table>
            </div>

            <Modal isOpen={isEditCustomerPopupOpen} onClose={closeEditCustomerPopup}>
                <div className="bg-white px-5 py-8 w-[500px] rounded-xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-4">
                            <p>Edit customer</p>
                        </div>

                        <Button icon="close" attrs={{ onClick: closeEditCustomerPopup }} />
                    </div>
                    <EditCustomerPopup {...customers.filter((item, key) => key + 1 == activeId)[0]}/>
                </div>
            </Modal>
            
            <Modal isOpen={isRemarksPopupShown} onClose={closeRemarksPopup}>
                <div className="bg-white px-5 py-8 w-[500px] rounded-xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-4">
                            <p className="text-lg font-semibold">Add remarks</p>
                        </div>

                        <Button icon="close" attrs={{ onClick: closeRemarksPopup }} />
                    </div>
                    <RemarksPopup/>
                </div>
            </Modal>
        </>
    )
}