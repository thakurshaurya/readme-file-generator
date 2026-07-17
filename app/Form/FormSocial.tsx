"use client";
import type { ComponentType } from "react";
import {
    SiBluesky,
    SiDiscord,
    SiInstagram,
    SiMastodon,
    SiQuora,
    SiStackoverflow,
    SiTwitch,
    SiYoutube,
    SiBehance,
    SiFacebook,
    SiPinterest,
    SiReddit,
} from "react-icons/si";
import { FaCodepen, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { ReadmeFormData, SocialFieldName } from "./readmeFormSchema";

const socialFields: { name: SocialFieldName; label: string; icon: ComponentType<{ className?: string }> }[] = [
    { name: "bluesky", label: "Bluesky Username (without @)", icon: SiBluesky },
    { name: "discord", label: "Discord Invite Code", icon: SiDiscord },
    { name: "instagram", label: "Instagram Username", icon: SiInstagram },
    { name: "quora", label: "Quora Username", icon: SiQuora },
    { name: "stackOverflow", label: "StackOverflow UserID only", icon: SiStackoverflow },
    { name: "twitch", label: "Twitch Username", icon: SiTwitch },
    { name: "youtube", label: "YouTube Channel ID", icon: SiYoutube },
    { name: "mastodon", label: "Mastodon Username", icon: SiMastodon },
    { name: "behance", label: "Behance Username", icon: SiBehance },
    { name: "facebook", label: "Facebook Username", icon: SiFacebook },
    { name: "linkedin", label: "LinkedIn Username", icon: FaLinkedin },
    { name: "pinterest", label: "Pinterest Username", icon: SiPinterest },
    { name: "reddit", label: "Reddit Username", icon: SiReddit },
    { name: "x", label: "X Username", icon: FaXTwitter },
    { name: "codepen", label: "Codepen Username", icon: FaCodepen },
    { name: "email", label: "Email id", icon: MdEmail },
];

type FormSocialProps = {
    register: UseFormRegister<ReadmeFormData>;
    errors: FieldErrors<ReadmeFormData>;
};

function FormSocial({ register, errors }: FormSocialProps) {
    return (
        <div className="w-full">
            <div className="grid gap-x-24 gap-y-9 lg:grid-cols-2">
                {socialFields.map((field) => {
                    const Icon = field.icon;

                    return (
                        <label key={field.name} className="block">
                            <div className="flex items-center gap-5">
                                <div className="min-w-0 flex-1">
                                    <input
                                        className="mt-3 w-full border-0 border-b-4 border-emerald-300 bg-transparent px-2 py-2 text-lg font-semibold text-emerald-100 outline-none transition placeholder:text-slate-600 focus:border-emerald-100"
                                        placeholder={field.label}
                                        {...register(field.name)}
                                    />
                                </div>
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center text-emerald-400">
                                    <Icon className="h-7 w-7" />
                                </span>
                            </div>
                            {errors[field.name] && (
                                <p className="mt-2 text-sm font-semibold text-red-400">
                                    {errors[field.name]?.message}
                                </p>
                            )}
                        </label>
                    );
                })}
            </div>
        </div>
    );
}

export default FormSocial;
