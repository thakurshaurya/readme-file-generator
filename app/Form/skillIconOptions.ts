import deviconData from "devicon/devicon.json";

export type SkillOption = {
  id: string;
  name: string;
  logo: string;
  color: string;
};

export type SkillGroup = {
  title: string;
  skills: SkillOption[];
};

type DeviconEntry = {
  name: string;
  altnames?: string[];
  tags?: string[];
  color?: string;
};

const categoryRules = [
  {
    title: "Languages",
    tags: ["language"],
  },
  {
    title: "Frameworks, Platforms & Libraries",
    tags: ["framework", "library", "frontend", "ui", "web-development"],
  },
  {
    title: "Databases / ORM",
    tags: ["database", "sql", "nosql", "data"],
  },
  {
    title: "Hosting / SaaS",
    tags: ["cloud", "hosting", "platform", "deployment"],
  },
  {
    title: "Design",
    tags: ["design", "graphic", "graphics", "3d", "animation"],
  },
  {
    title: "ML/DL",
    tags: ["machine-learning", "data-science"],
  },
  {
    title: "CI/CD VCS",
    tags: ["version-control", "git", "integration", "devops"],
  },
  {
    title: "Testing",
    tags: ["testing"],
  },
  {
    title: "Servers & Tools",
    tags: ["server", "container", "automation", "monitoring", "build", "package"],
  },
];

const logoOverrides: Record<string, string> = {
  amazonwebservices: "amazonwebservices",
  cplusplus: "cplusplus",
  csharp: "csharp",
  css3: "css3",
  dotnetcore: "dotnet",
  githubactions: "githubactions",
  googlecloud: "googlecloud",
  html5: "html5",
  materialui: "mui",
  microsoftsqlserver: "microsoftsqlserver",
  nodejs: "nodedotjs",
  postgresql: "postgresql",
  tailwindcss: "tailwindcss",
  vuejs: "vuedotjs",
};

function formatName(name: string) {
  return name
    .replace(/([a-z])([0-9])/g, "$1 $2")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/js$/i, " JS")
    .replace(/css$/i, " CSS")
    .replace(/sql$/i, " SQL")
    .replace(/api$/i, " API")
    .replace(/ui$/i, " UI")
    .replace(/aws/i, "AWS")
    .replace(/gcp/i, "GCP")
    .replace(/php/i, "PHP")
    .replace(/html/i, "HTML")
    .replace(/css/i, "CSS")
    .replace(/svg/i, "SVG")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => {
      if (/^(api|aws|css|gcp|html|js|php|sql|svg|ui)$/i.test(word)) {
        return word.toUpperCase();
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function toSkill(entry: DeviconEntry): SkillOption {
  const displayName = entry.altnames?.[0] ?? entry.name;

  return {
    id: entry.name,
    name: formatName(displayName),
    logo: logoOverrides[entry.name] ?? entry.name,
    color: (entry.color ?? "#4ade80").replace("#", ""),
  };
}

const devicons = deviconData as DeviconEntry[];
const assignedSkillIds = new Set<string>();

export const skillGroups: SkillGroup[] = categoryRules
  .map((category) => {
    const skills = devicons
      .filter((entry) => {
        if (assignedSkillIds.has(entry.name)) {
          return false;
        }

        return entry.tags?.some((tag) => category.tags.includes(tag));
      })
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((entry) => {
        assignedSkillIds.add(entry.name);
        return toSkill(entry);
      });

    return {
      title: category.title,
      skills,
    };
  })
  .filter((group) => group.skills.length > 0);

export const skillOptions = skillGroups.flatMap((group) => group.skills);
