const features = [
  {
    title: "Lightening fast Profile Creation",
    description:
      "Create your Profile ReadMe in just few clicks ! On an average, it takes less than one minute to create a perfect Profile ReadMe using GPRM",
    icon: "bolt",
  },
  {
    title: "Add all Social Links",
    description:
      "We have added an option to add your Social Links to increase your reach and promote your works at one place.",
    icon: "globe",
  },
  {
    title: "Flex Your GitHub Stats",
    description:
      "Be Honest, everyone loves to flex their achievements. With tools such as ReadMe Stats, Most Used Languages, Streak Stats you can show your achievements.",
    icon: "stats",
  },
  {
    title: "Show Your Tech Stack",
    description:
      "Select from over 300+ tech options and show your tech stack to everyone, Let them know what makes you awesome.",
    icon: "screen",
  },
  {
    title: "Visitor Counter",
    description:
      "With the use of Visitors Counter you can see how many people viewed your profile, this gives you an idea about how popular you are on GitHub.",
    icon: "users",
  },
  {
    title: "GitHub Trophies",
    description:
      "Got any trophies/medals but oops! how can you show them on your profile? Don't worry, GitHub Trophies are the virtual trophies for you. Showcase them by adding it to your profile.",
    icon: "flame",
  },
];

function FeatureIcon({ icon }: { icon: string }) {
  const iconClass = "h-8 w-8 text-slate-900";

  if (icon === "bolt") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
      </svg>
    );
  }

  if (icon === "globe") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.4 3 14.6 0 18M12 3c-3 3.4-3 14.6 0 18" />
      </svg>
    );
  }

  if (icon === "stats") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M5 20V10h4v10H5ZM10 20V6h4v14h-4ZM15 20V3h4v17h-4Z" />
      </svg>
    );
  }

  if (icon === "screen") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <rect x="4" y="5" width="16" height="11" rx="1.5" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    );
  }

  if (icon === "users") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20c.7-3.5 3-5 6-5s5.3 1.5 6 5M14 15.5c2.8.2 4.8 1.6 5.5 4.5" />
      </svg>
    );
  }

  if (icon === "donate") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M15 9.5c-.7-1-1.7-1.5-3-1.5-1.7 0-3 1-3 2.5s1.3 2 3 2 3 .5 3 2-1.3 2.5-3 2.5c-1.4 0-2.5-.5-3.2-1.6" />
      </svg>
    );
  }

  if (icon === "smile") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 10h.01M15.5 10h.01M8.5 14.5c1.8 2 5.2 2 7 0" />
      </svg>
    );
  }

  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M12 3c2 3 5 5.5 5 9a5 5 0 0 1-10 0c0-2 1-3.8 3-5.2-.2 2.4.5 4 2 5.2.8-1.8.8-3.8 0-9Z" />
      <path d="M9.5 16a2.8 2.8 0 0 0 5 0" />
    </svg>
  );
}

function Pagemiddle() {
  return (
    <section className="w-full px-4 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-lg font-bold uppercase tracking-[0.12em] text-emerald-300">
            Features
          </p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-emerald-100 sm:text-5xl lg:text-6xl">
            We got everything that you need !
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-2xl font-semibold leading-snug text-slate-500">
            Create your perfect GitHub Profile ReadMe in the best possible way.
            <br />
            Lots of features and tools included, all for free !
          </p>
        </div>

        <div className="mt-20 grid gap-x-20 gap-y-16 lg:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-emerald-300">
                <FeatureIcon icon={feature.icon} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-100">
                  {feature.title}
                </h3>
                <p className="mt-4 text-xl font-semibold leading-relaxed text-slate-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pagemiddle;
