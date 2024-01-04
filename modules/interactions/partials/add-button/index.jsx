"use client"
import Button from "@/components/button";
import Modal from "@/components/modal";
import useToggle from "@/utils/hooks/toggle";
import SingleForm from "../single-form";

export default function AddButton(){
    
    const {isTrue: isAddCustomerPopupOpen, setTrue: openAddCustomerPopup, setFalse: closeAddCustomerPopup} = useToggle()
    return (
        <>
            <Button text="Add interaction" variant="outline" attrs={{onClick: openAddCustomerPopup}}/>

            <Modal onClose={closeAddCustomerPopup} isOpen={isAddCustomerPopupOpen}>
                <div className="bg-white px-5 py-8 w-[500px] rounded-xl">
                    <div className="flex items-center justify-between">
                        <p className="text-xl font-bold">Add interaction</p>

                        <Button icon="close" attrs={{onClick: closeAddCustomerPopup}}/>
                    </div>
                    <SingleForm/>
                </div>
            </Modal>
        </>
    )
}