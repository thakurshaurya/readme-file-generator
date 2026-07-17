import type { FieldErrors, UseFormRegister } from "react-hook-form";
import FormSocial from "../Form/FormSocial";
import type { ReadmeFormData } from "../Form/readmeFormSchema";

type PageSocial1Props = {
  register: UseFormRegister<ReadmeFormData>;
  errors: FieldErrors<ReadmeFormData>;
};

function PageSocial1({ register, errors }: PageSocial1Props) {
  return (
    <section className="min-h-screen w-full px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-center text-4xl font-bold text-emerald-200">
          Add Your Social Links
        </h1>
        <div className="mt-16">
          <FormSocial register={register} errors={errors} />
        </div>
      </div>
    </section>
  );
}

export default PageSocial1;
