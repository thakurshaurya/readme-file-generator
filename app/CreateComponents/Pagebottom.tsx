"use client";

import { useMemo, useState } from "react";
import { skillGroups } from "../Form/skillIconOptions";

type PagebottomProps = {
  selectedSkills: string[];
  onToggleSkill: (skillId: string) => void;
};

function Pagebottom({ selectedSkills, onToggleSkill }: PagebottomProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const visibleSkillGroups = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    if (!normalizedSearchTerm) {
      return skillGroups;
    }

    return skillGroups
      .map((group) => ({
        ...group,
        skills: group.skills.filter((skill) =>
          skill.name.toLowerCase().includes(normalizedSearchTerm),
        ),
      }))
      .filter((group) => group.skills.length > 0);
  }, [searchTerm]);

  return (
    <section className="min-h-screen w-full px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-center text-4xl font-bold text-emerald-200">
          Add Tech That You Use
        </h1>

        <div className="mx-auto mt-10 max-w-md">
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search tech"
            className="w-full rounded-full border-2 border-emerald-200 bg-transparent px-6 py-4 text-lg font-semibold text-emerald-100 outline-none transition placeholder:text-slate-500 focus:border-emerald-100"
          />
        </div>

        <div className="mt-6 text-center text-sm font-semibold text-emerald-100">
          {selectedSkills.length} skill{selectedSkills.length === 1 ? "" : "s"} selected
        </div>

        <div className="mt-14 space-y-16">
          {visibleSkillGroups.length === 0 && (
            <p className="text-center text-lg font-semibold text-emerald-100">
              No matching tech found.
            </p>
          )}

          {visibleSkillGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-center text-2xl font-bold uppercase text-emerald-100">
                {group.title}
              </h2>

              <div className="mt-7 flex flex-wrap justify-center gap-4">
                {group.skills.map((skill) => {
                  const isSelected = selectedSkills.includes(skill.id);

                  return (
                    <button
                      key={skill.id}
                      type="button"
                      onClick={() => onToggleSkill(skill.id)}
                      aria-pressed={isSelected}
                      className={`overflow-hidden rounded-md border text-sm font-bold uppercase transition ${
                        isSelected
                          ? "border-emerald-200 bg-emerald-300 text-slate-950 shadow-lg shadow-emerald-950/40"
                          : "border-emerald-200/60 bg-emerald-100 text-slate-700 hover:bg-emerald-200"
                      }`}
                    >
                      <span className="inline-flex items-center">
                        <span className="px-3 py-1.5">{skill.name}</span>
                        <span className="border-l border-emerald-900/10 px-3 py-1.5 text-lg leading-none">
                          {isSelected ? "-" : "+"}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pagebottom;
