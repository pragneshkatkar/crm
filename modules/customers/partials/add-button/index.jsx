"use client"
import Button from "@/components/button";
import Modal from "@/components/modal";
import useToggle from "@/utils/hooks/toggle";
import BulkUpload from "../bulk-upload";
import SingleForm from "../single-form";

export default function AddButton(){
    
    const {isTrue: isAddCustomerPopupOpen, setTrue: openAddCustomerPopup, setFalse: closeAddCustomerPopup} = useToggle()
    const {isTrue: isBulkSelected, setTrue: selectBulk, setFalse: selectSingle} = useToggle()

    const addOptions = [
        {
            type: "radio",
            name: "add-option",
            label: "Single",
            defaultChecked: true,
            onClick: selectSingle
        },
        {
            type: "radio",
            name: "add-option",
            label: "Bulk upload",
            onClick: selectBulk
        }
    ]
    return (
        <>
            <Button text="Add customer" variant="outline" attrs={{onClick: openAddCustomerPopup}}/>

            <Modal onClose={closeAddCustomerPopup} isOpen={isAddCustomerPopupOpen}>
                <div className="bg-white px-5 py-8 w-[500px] rounded-xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-4">
                            {
                                addOptions.map((item, key) => {
                                    return (
                                        <label className="flex items-center gap-x-2 text-sm font-semibold cursor-pointer" key={key} onClick={item.onClick}>
                                            <input {...item}/>
                                            {item.label}
                                        </label>
                                    )
                                })
                            }
                        </div>

                        <Button icon="close" attrs={{onClick: closeAddCustomerPopup}}/>
                    </div>

                    {
                        isBulkSelected ? <BulkUpload/> : <SingleForm/>
                    }
                </div>
            </Modal>
        </>
    )
}