import Button from "@/components/button"
import { useForm } from "react-hook-form"

export default function BulkUpload(){

    const { register, handleSubmit, formState: { errors } } = useForm()

    const addBulk = (data) => {
        alert("successfully uploaded bulk")
    }
    return (
        <>
            <div className="flex flex-col gap-4">
                <form id="add-bulk-form" onSubmit={handleSubmit(addBulk)}></form>
                <label className="flex w-full h-40 rounded-md border-2 border-dashed border-primary items-center justify-center mt-5">
                    <p className="text-primary font-semibold">Drop your Excel or CSV file here</p>
                    <input type="file" className="hidden" form="add-bulk-form"/>
                </label>

                <Button text="Add" variant="primary" attrs={{type: "submit", form: "add-bulk-form"}}/>
            </div>
        </>
    )
}