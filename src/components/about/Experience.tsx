import { Reveal } from "@/components/motion";

export default function Experience() {
  return (
    <div className="flex flex-col space-y-4">
      <Reveal>
        <h2 className="text-start text-2xl font-semibold">Experience</h2>
      </Reveal>

      {/* cambiar el valor del grid-col-4 para que se adapten bien los textos de cada ul */}
      <div className="grid grid-cols-3 gap-6 text-neutral-500">
        <ul className="text-neutral-500">
          <Reveal>
            <li className="text-lg font-semibold text-violet-800">
              Frontend engineer
            </li>
          </Reveal>
          <Reveal>
            <li>@ Colegio de arquitectos </li>
          </Reveal>
          <Reveal>
            <li>2023 - 2024</li>
          </Reveal>
        </ul>
      </div>
    </div>
  );
}
