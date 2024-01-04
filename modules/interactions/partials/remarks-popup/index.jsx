import Button from "@/components/button"
import Input from "@/components/input"
import Textarea from "@/components/textarea"
import { validations } from "@/utils/validations"
import { useForm } from "react-hook-form"

export default function RemarksPopup(props) {
    const {name, contactNumber, email} = props

    const { register, handleSubmit, formState: { errors } } = useForm()

    const addContact = (data) => {
        alert("ds")
    }

    const remarksTextarea = {
        attrs: {
            placeholder: "Add remarks"
        }
    }
    return (
        <>
            <div className="flex flex-col gap-4 mt-5">
                <form id="add-followup-form" onSubmit={handleSubmit(addContact)}></form>
                <Textarea {...remarksTextarea} />

                <Button text="Add" variant="primary" attrs={{type: "submit", form: "add-followup-form"}}/>
            </div>
        </>
    )
}