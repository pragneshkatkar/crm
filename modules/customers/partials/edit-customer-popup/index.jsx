import Button from "@/components/button"
import Input from "@/components/input"
import { validations } from "@/utils/validations"
import { useForm } from "react-hook-form"

export default function EditCustomerPopup(props) {
    const {name, contactNumber, email} = props

    const { register, handleSubmit, formState: { errors } } = useForm()

    const inputs = [
        {
            label: "Name",
            attrs: {
                defaultValue: name,
                type: "text",
                ...register("name", {
                    required: true,
                    pattern: validations.text,
                    value: name
                }),
                form: "add-contact-form"
            },
            err: errors.name && (
                errors.name.type == "required" && "Please enter the name" ||
                errors.name.type == "pattern" && "Please enter valid name"
            )
        },
        {
            label: "Contact number",
            attrs: {
                defaultValue: contactNumber,
                type: "number",
                ...register("contact_number", {
                    required: true,
                    pattern: validations.number,
                    value: contactNumber
                }),
                form: "add-contact-form"
            },
            err: errors.contact_number && (
                errors.contact_number.type == "required" && "Please enter the contact number" ||
                errors.contact_number.type == "pattern" && "Please enter valid contact number"
            )
        },
        {
            label: "Email",
            attrs: {
                defaultValue: email,
                type: "text",
                ...register("email", {
                    required: true,
                    pattern: validations.email,
                    value: email
                }),
                form: "add-contact-form"
            },
            err: errors.email && (
                errors.email.type == "required" && "Please enter the email" ||
                errors.email.type == "pattern" && "Please enter valid email"
            )
        }
    ]

    const addContact = (data) => {
        alert("ds")
    }
    return (
        <>
            <div className="flex flex-col gap-4 mt-5">
                <form id="add-contact-form" onSubmit={handleSubmit(addContact)}></form>
                {
                    inputs.map((item, key) => <Input {...item} key={key} />)
                }

                <Button text="Add" variant="primary" attrs={{type: "submit", form: "add-contact-form"}}/>
            </div>
        </>
    )
}