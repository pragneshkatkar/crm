import Button from "@/components/button"
import Input from "@/components/input"
import Select from "@/components/select"
import Textarea from "@/components/textarea"
import { CUSTOMERS } from "@/utils/globals"
import { validations } from "@/utils/validations"
import { useForm } from "react-hook-form"

export default function SingleForm() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const inputs = [
        {
            label: "Name",
            attrs: {
                type: "text",
                ...register("name", {
                    required: true,
                    pattern: validations.text
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
                type: "number",
                ...register("contact_number", {
                    required: true,
                    pattern: validations.number
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
                type: "text",
                ...register("email", {
                    required: true,
                    pattern: validations.email
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

    const customerOptions = CUSTOMERS.map((item, key) => {
        return {
            text: item.name,
            value: key + 2
        }
    })
    const customerSelect = {
        label: "Select customer",
        options: customerOptions
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
        options: interactionOptions
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
            text: "Not potential",
            value: "not potential"
        },
    ]
    const typeSelect = {
        label: "select type",
        options: typeOptions
    }

    const remarksTextarea = {
        attrs: {
            placeholder: "Add remarks"
        }
    }
    return (
        <>
            <div className="flex flex-col gap-4 mt-5">
                <form id="add-contact-form" onSubmit={handleSubmit(addContact)}></form>
                <Select {...customerSelect}/>
                <Select {...interactionSelect}/>
                <Select {...typeSelect}/>
                <Textarea {...remarksTextarea}/>

                <Button text="Add" variant="primary" attrs={{type: "submit", form: "add-contact-form"}}/>
            </div>
        </>
    )
}