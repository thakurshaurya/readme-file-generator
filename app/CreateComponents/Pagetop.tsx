import Image from "next/image";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import FormTop from "../Form/FormTop";
import type { ReadmeFormData } from "../Form/readmeFormSchema";

type PagetopProps = {
    register: UseFormRegister<ReadmeFormData>;
    errors: FieldErrors<ReadmeFormData>;
};

function Pagetop({ register, errors }: PagetopProps) {
    return (
        <>
            <div className="page-split min-h-[83vh] w-full flex justify-around py-20 px-10 items-center">
                <div className="flex flex-col items-start justify-center ">
                    <div className="text-4xl font-bold text-left text-emerald-200 mb-5">
                        <p>Enter Your Github Username</p>
                    </div>
                    <FormTop register={register} errors={errors} />
                </div>
                <div className="hover-3d ">
                    <figure className=" rounded-xl ">
                        <Image src="/Telecommuting-pana.svg" alt="Card image" width={600} height={600} />
                    </figure>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Pagetop
