"use client";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { ReadmeFormData } from "./readmeFormSchema";

type FormTopProps = {
    register: UseFormRegister<ReadmeFormData>;
    errors: FieldErrors<ReadmeFormData>;
};

function Formstyle({ register, errors }: FormTopProps) {
    return (
        <div className="w-full">
            <input {...register("username")}
                placeholder="Enter Github Username"
                className="border-b-2 text-2xl border-emerald-200 py-1 px-2 w-3/4 h-15" />
            {errors.username && (
                <p className="text-red-500 mt-2">{errors.username.message}</p>
            )}
        </div>
    )
}

export default Formstyle;
