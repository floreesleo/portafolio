import { Reveal } from "@/components/motion";

export default function Languages() {
  return (
    <div className="flex flex-col space-y-4">
      <Reveal>
        <h2 className="text-start text-2xl font-semibold">Languages</h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <div className="flex flex-col">
          <Reveal>
            <h4 className="text-neutral-700">{"// fluent"}</h4>
          </Reveal>
          <ul className="flex flex-row space-x-2">
            <Reveal>
              <li className="mr-1 italic text-violet-800">es-ES</li>
            </Reveal>
            <Reveal>
              <li className="text-neutral-500">Español</li>
            </Reveal>
          </ul>
        </div>

        <div className="flex flex-col">
          <Reveal>
            <h4 className="text-neutral-700">{"// intermediate"}</h4>
          </Reveal>
          <ul className="flex flex-row space-x-2">
            <Reveal>
              <li className="mr-1 italic text-violet-800">en-US</li>
            </Reveal>
            <Reveal>
              <li className="text-neutral-500">English</li>
            </Reveal>
          </ul>
        </div>

        <div className="flex flex-col">
          <Reveal>
            <h4 className="text-neutral-700">{"// basic"}</h4>
          </Reveal>

          <ul className="flex flex-row space-x-2">
            <Reveal>
              <li className="mr-1 italic text-violet-800">pt-BR</li>
            </Reveal>
            <Reveal>
              <li className="text-neutral-500">Português</li>
            </Reveal>
          </ul>
        </div>
      </div>
    </div>
  );
}
