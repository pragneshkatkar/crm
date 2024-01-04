import Button from "@/components/button"
import Input from "@/components/input"
import { validations } from "@/utils/validations"
import { useForm } from "react-hook-form"

export default function FollowupPopup(props) {
    const {name, contactNumber, email} = props

    const { register, handleSubmit, formState: { errors } } = useForm()

    const inputs = [
        {
            label: "Date",
            attrs: {
                type: "date",
                ...register("date", {
                    required: true,
                    pattern: validations.date,
                }),
                form: "add-followup-form"
            },
            err: errors.date && (
                errors.date.type == "required" && "Please enter the date" ||
                errors.date.type == "pattern" && "Please enter valid date"
            )
        },
        {
            label: "time",
            attrs: {
                type: "time",
                ...register("time", {
                    required: true,
                    pattern: validations.number,
                }),
                form: "add-followup-form"
            },
            err: errors.time && (
                errors.time.type == "required" && "Please enter the time" ||
                errors.time.type == "pattern" && "Please enter valid time"
            )
        },
        {
            label: "Followup about",
            attrs: {
                type: "text",
                ...register("followup_about", {
                    required: true,
                    pattern: validations.number,
                }),
                form: "add-followup-form"
            },
            err: errors.followup_about && (
                errors.followup_about.type == "required" && "Please enter the followup about" ||
                errors.followup_about.type == "pattern" && "Please enter valid followup about"
            )
        },
    ]

    const addContact = (data) => {
        alert("ds")
    }
    return (
        <>
            <div className="flex flex-col gap-4 mt-5">
                <form id="add-followup-form" onSubmit={handleSubmit(addContact)}></form>
                {
                    inputs.map((item, key) => <Input {...item} key={key} />)
                }

                <Button text="Add" variant="primary" attrs={{type: "submit", form: "add-followup-form"}}/>
            </div>
        </>
    )
}