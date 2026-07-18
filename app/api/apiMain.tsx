export type ReadmeGenerationPayload = {
    github: {
        username: string;
    };
    about: {
        about: string;
    };
    socials: Record<string, string>;
    skills: {
        selected: string[];
        badges: string[];
        markdown: string;
    };
};

export function normalizeReadmePayload(payload?: Partial<ReadmeGenerationPayload>): ReadmeGenerationPayload {
    return {
        github: {
            username: payload?.github?.username?.trim() || "developer",
        },
        about: {
            about: payload?.about?.about?.trim() || "A passionate developer building great things.",
        },
        socials: payload?.socials || {},
        skills: {
            selected: payload?.skills?.selected || [],
            badges: payload?.skills?.badges || [],
            markdown: payload?.skills?.markdown || "",
        },
    };
}

export function buildReadmePrompt(payload: ReadmeGenerationPayload) {
    const username = payload.github.username.trim() || "developer";
    const about = payload.about.about.trim() || "A passionate developer building great things.";

    // Build social badges markdown
    const socialBadges = Object.entries(payload.socials)
        .filter(([, value]) => value.trim() !== "")
        .map(([name, value]) => {
            const lower = name.toLowerCase();
            if (lower === "instagram") return `[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/${value})`;
            if (lower === "linkedin") return `[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/${value})`;
            if (lower === "email") return `[![Email](https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white)](mailto:${value})`;
            if (lower === "x") return `[![X](https://img.shields.io/badge/X-black.svg?logo=X&logoColor=white)](https://x.com/${value})`;
            if (lower === "youtube") return `[![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://youtube.com/${value})`;
            if (lower === "discord") return `[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?logo=discord&logoColor=white)](https://discord.gg/${value})`;
            if (lower === "twitch") return `[![Twitch](https://img.shields.io/badge/Twitch-%239146FF.svg?logo=Twitch&logoColor=white)](https://twitch.tv/${value})`;
            if (lower === "reddit") return `[![Reddit](https://img.shields.io/badge/Reddit-FF4500?logo=reddit&logoColor=white)](https://reddit.com/user/${value})`;
            if (lower === "facebook") return `[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white)](https://facebook.com/${value})`;
            if (lower === "pinterest") return `[![Pinterest](https://img.shields.io/badge/Pinterest-%23E60023.svg?logo=Pinterest&logoColor=white)](https://pinterest.com/${value})`;
            if (lower === "stackoverflow") return `[![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?logo=stack-overflow&logoColor=white)](https://stackoverflow.com/users/${value})`;
            if (lower === "behance") return `[![Behance](https://img.shields.io/badge/Behance-1769ff?logo=behance&logoColor=white)](https://behance.net/${value})`;
            if (lower === "codepen") return `[![CodePen](https://img.shields.io/badge/Codepen-000000?logo=codepen&logoColor=white)](https://codepen.io/${value})`;
            if (lower === "mastodon") return `[![Mastodon](https://img.shields.io/badge/-MASTODON-%232B90D9?logo=mastodon&logoColor=white)](https://mastodon.social/@${value})`;
            if (lower === "bluesky") return `[![Bluesky](https://img.shields.io/badge/Bluesky-0285FF?logo=bluesky&logoColor=white)](https://bsky.app/profile/${value})`;
            if (lower === "quora") return `[![Quora](https://img.shields.io/badge/Quora-%23B92B27.svg?logo=Quora&logoColor=white)](https://quora.com/profile/${value})`;
            return `[![${name}](https://img.shields.io/badge/${name}-blue?style=for-the-badge)](${value})`;
        })
        .join(" ");

    const skillsMarkdown = payload.skills.markdown.trim() || "";

    return `You are an expert GitHub profile README generator.
Generate a polished GitHub profile README in raw Markdown. Return ONLY the markdown, no explanations.

User details:
- GitHub username: ${username}
- About: ${about}

Use this EXACT structure:

1. Start with: # Hi 👋, I'm ${username}
2. Then the about section as a paragraph.
3. "## 🌐 Socials:"section with these exact badge links (one line, space-separated):
in next line after the Social Heading:
${socialBadges || "No socials provided, skip this section entirely."}
4. "## 💻 Tech Stack:" section with these exact badge images (one line, space-separated):
in next Line after the Tech Stacks Heading:
${skillsMarkdown || "No skills provided, skip this section entirely."}
5. "## 📊 GitHub Stats:" section with this exact HTML block:
<div align="center">
//Maintain a single line gap here 
![](https://github-readme-stats.shion.dev/api?username=${username}&theme=radical&hide_border=false&include_all_commits=true&count_private=true)
![](https://streak-stats.demolab.com/?user=${username}&theme=radical&hide_border=false)
![](https://github-readme-stats.shion.dev/api/top-langs/?username=${username}&theme=radical&include_all_commits=true&count_private=true&layout=compact)

</div>

6. End with a centered, VISIBLE visitor counter badge (do NOT put this inside an HTML comment):
<div>
  <img src="https://komarev.com/ghpvc/?username=${username}&label=Profile%20Views&color=0e75b6&style=flat" alt="Profile views" />
</div>

Return ONLY the raw markdown. Do not wrap in code fences. Do not add any explanation.`;
}

export function buildFallbackReadme(payload: ReadmeGenerationPayload) {
    const username = payload.github.username.trim() || "developer";
    const about = payload.about.about.trim() || "A passionate developer creating useful products.";

    // Build social badges
    const socialBadges = Object.entries(payload.socials)
        .filter(([, value]) => value.trim() !== "")
        .map(([name, value]) => {
            const lower = name.toLowerCase();
            if (lower === "instagram") return `[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/${value})`;
            if (lower === "linkedin") return `[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/${value})`;
            if (lower === "email") return `[![Email](https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white)](mailto:${value})`;
            if (lower === "x") return `[![X](https://img.shields.io/badge/X-black.svg?logo=X&logoColor=white)](https://x.com/${value})`;
            return `[![${name}](https://img.shields.io/badge/${encodeURIComponent(name)}-blue?logoColor=white)](${value})`;
        })
        .join(" ");

    const skillsLine = payload.skills.markdown.trim() || "";

    let readme = `# Hi 👋, I'm ${username}\n\n${about}\n`;

    if (socialBadges) {
        readme += `\n## 🌐 Socials:\n${socialBadges}\n`;
    }

    if (skillsLine) {
        readme += `\n## 💻 Tech Stack:\n${skillsLine}\n`;
    }

    readme += `\n## 📊 GitHub Stats:\n<div align="center">\n\n![](https://github-readme-stats.shion.dev/api?username=${username}&theme=radical&hide_border=false&include_all_commits=true&count_private=true)\n![](https://streak-stats.demolab.com/?user=${username}&theme=radical&hide_border=false)\n![](https://github-readme-stats.shion.dev/api/top-langs/?username=${username}&theme=radical&include_all_commits=true&count_private=true&layout=compact)\n\n</div>\n`;

    readme += `\n## 👀 Profile Views:\n<div align="center">\n  <img src="https://komarev.com/ghpvc/?username=${username}&label=Profile%20Views&color=0e75b6&style=flat" alt="Profile views" />\n</div>\n`;

    return readme;
}

