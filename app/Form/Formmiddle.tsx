"use client";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { ReadmeFormData } from "./readmeFormSchema";

type FormMiddleProps = {
    register: UseFormRegister<ReadmeFormData>;
    errors: FieldErrors<ReadmeFormData>;
};

function FormTop({ register, errors }: FormMiddleProps) {
    return (
        <div className="h-full w-full">
            <textarea className="textarea h-3/4 text-xl font-semibold w-full text-emerald-200"
                placeholder="🔭 About Yourself"
                {...register("about")} />
            {errors.about && (
                <p className="text-red-500 mt-2">{errors.about.message}</p>
            )}
        </div>
    )
}

export default FormTop;
