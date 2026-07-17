"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import Pagebottom from "./Pagebottom";
import Pagemiddle from "./Pagemiddle";
import PageSocial1 from "./PageSocial1";
import Pagetop from "./Pagetop";
import { skillOptions } from "../Form/skillIconOptions";
import {
  defaultReadmeFormValues,
  readmeFormSchema,
  type ReadmeFormData,
  type SocialFieldName,
} from "../Form/readmeFormSchema";
import { useRouter } from "next/navigation";

const socialFieldNames: SocialFieldName[] = [
  "bluesky",
  "discord",
  "instagram",
  "quora",
  "stackOverflow",
  "twitch",
  "youtube",
  "mastodon",
  "behance",
  "facebook",
  "linkedin",
  "pinterest",
  "reddit",
  "x",
  "codepen",
  "email",
];

function formatBadgeName(name: string) {
  return encodeURIComponent(name.replace(/-/g, "--"));
}

function createSkillBadgeMarkdown(skillId: string) {
  const skill = skillOptions.find((option) => option.id === skillId);

  if (!skill) {
    return null;
  }

  return `![${skill.name}](https://img.shields.io/badge/${formatBadgeName(skill.name)}-${skill.color}?style=for-the-badge&logo=${skill.logo}&logoColor=white)`;
}

function CreateReadmeForm() {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ReadmeFormData>({
    defaultValues: defaultReadmeFormValues,
    resolver: zodResolver(readmeFormSchema),
  });

  const selectedSkills = useWatch({ control, name: "skills" });

  function toggleSkill(skillId: string) {
    const nextSkills = selectedSkills.includes(skillId)
      ? selectedSkills.filter((selectedSkill) => selectedSkill !== skillId)
      : [...selectedSkills, skillId];

    setValue("skills", nextSkills, { shouldDirty: true, shouldValidate: true });
  }

  async function generateReadme(data: ReadmeFormData) {
    const socials = Object.fromEntries(
      socialFieldNames
        .map((fieldName) => [fieldName, data[fieldName]] as const)
        .filter(([, value]) => value.trim() !== ""),
    );

    const skillBadges = data.skills
      .map(createSkillBadgeMarkdown)
      .filter((badge): badge is string => badge !== null);

    const readmeData = {
      github: {
        username: data.username,
      },
      about: {
        about: data.about,
      },
      socials,
      skills: {
        selected: data.skills,
        badges: skillBadges,
        markdown: skillBadges.join("\n"),
      },
    };

    try {
      const response = await fetch("/api/generate-readme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(readmeData),
      });

      const result = await response.json();
      const finalReadmeData = {
        ...readmeData,
        generatedMarkdown: result.markdown || "",
      };

      sessionStorage.setItem("readmeData", JSON.stringify(finalReadmeData));
      router.push("/File");
    } catch (error) {
      console.error("README generation failed", error);
      sessionStorage.setItem("readmeData", JSON.stringify(readmeData));
      router.push("/File");
    }
  }

  return (
    <form onSubmit={handleSubmit(generateReadme)}>
      <Pagetop register={register} errors={errors} />
      <Pagemiddle register={register} errors={errors} />
      <PageSocial1 register={register} errors={errors} />
      <Pagebottom selectedSkills={selectedSkills} onToggleSkill={toggleSkill} />

      <section className="flex w-full justify-center px-6 pb-20">
        <div className="aura aura-dual">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn font-bold text-emerald-200"
          >
            {isSubmitting ? "Generating..." : "Generate README"}
          </button>
        </div>
      </section>
    </form>
  );
}

export default CreateReadmeForm;
