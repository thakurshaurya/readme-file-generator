import { z } from "zod";

const usernameMessage = "Use letters, numbers, dots, underscores, or hyphens only";

const optionalUsername = z
  .string()
  .trim()
  .max(60, "Keep this under 60 characters")
  .refine(
    (value) => value === "" || /^[a-zA-Z0-9._-]+$/.test(value),
    usernameMessage,
  );

const optionalInviteCode = z
  .string()
  .trim()
  .max(80, "Keep this under 80 characters")
  .refine(
    (value) => value === "" || /^[a-zA-Z0-9-]+$/.test(value),
    "Enter a valid invite code",
  );

export const readmeFormSchema = z.object({
  username: z.string().min(1, "Github Username is Required"),
  about: z.string().min(5, "Write atleast 5 words about yourself"),
  skills: z.array(z.string()),
  bluesky: optionalUsername,
  discord: optionalInviteCode,
  instagram: optionalUsername,
  quora: optionalUsername,
  stackOverflow: z
    .string()
    .trim()
    .refine((value) => value === "" || /^\d+$/.test(value), "Enter numbers only"),
  twitch: optionalUsername,
  youtube: optionalUsername,
  mastodon: optionalUsername,
  behance: optionalUsername,
  facebook: optionalUsername,
  linkedin: optionalUsername,
  pinterest: optionalUsername,
  reddit: optionalUsername,
  x: optionalUsername,
  codepen: optionalUsername,
  email: z
    .string()
    .trim()
    .refine(
      (value) => value === "" || z.string().email().safeParse(value).success,
      "Enter a valid email",
    ),
});

export type ReadmeFormData = z.infer<typeof readmeFormSchema>;

export type SocialFieldName = Exclude<keyof ReadmeFormData, "username" | "about" | "skills">;

export const defaultReadmeFormValues: ReadmeFormData = {
  username: "",
  about: "",
  skills: [],
  bluesky: "",
  discord: "",
  instagram: "",
  quora: "",
  stackOverflow: "",
  twitch: "",
  youtube: "",
  mastodon: "",
  behance: "",
  facebook: "",
  linkedin: "",
  pinterest: "",
  reddit: "",
  x: "",
  codepen: "",
  email: "",
};
