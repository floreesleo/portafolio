import { Reveal } from "@/components/motion";

export default function MainSkills() {
  return (
    <div className="flex flex-col space-y-4">
      <Reveal>
        <h2 className="text-start text-2xl font-semibold">Main skills</h2>
      </Reveal>
      <div className="grid grid-cols-4 gap-4 text-neutral-500">
        <Reveal>
          <span>Web app architecture, Strategic thinking, Problem solving</span>
        </Reveal>
        <Reveal>
          <span>Frontend, UX/UI</span>
        </Reveal>
        <Reveal>
          <span>JavaScript, HTML, CSS, React, Next.js, Astro</span>
        </Reveal>
        <Reveal>
          <span>Figma, Git</span>
        </Reveal>
      </div>
    </div>
  );
}
