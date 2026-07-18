import Image from "next/image"
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import FormMiddle from "../Form/Formmiddle"
import type { ReadmeFormData } from "../Form/readmeFormSchema";

type PagemiddleProps = {
  register: UseFormRegister<ReadmeFormData>;
  errors: FieldErrors<ReadmeFormData>;
};

function Pagemiddle({ register, errors }: PagemiddleProps) {
  return (
    <>
      <div className="page-split flex w-full justify-around min-h-[82vh] p-5 gap-5 mt-5">
        <div className="hover-3d h-1/2">
          <figure className=" rounded-xl">
            <Image src="/Webinar-amico.png" alt="Card image" width={600} height={600} />
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
        <div className="flex flex-col items-start justify-center w-1/2">
          <div className="text-4xl font-bold text-left text-emerald-200 mb-10">
            <p>Tell Us Something About Yourself</p>
          </div>
          <FormMiddle register={register} errors={errors} />
        </div>
      </div>
    </>
  )
}

export default Pagemiddle
