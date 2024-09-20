import { Reveal } from "@/components/motion";

export default function CAScene() {
  return (
    <div className="flex flex-col items-start justify-center space-y-8">
      <div className="flex h-screen items-center">
        <Reveal>
          <h3 className="text-2xl font-bold lg:text-5xl">
            Colegio de arquitectos(<span className="text-violet-800">2023</span>
            )
          </h3>
        </Reveal>
      </div>

      <div className="flex h-screen flex-col items-center space-y-3 pr-8 lg:space-y-0 lg:pr-32">
        <Reveal>
          <h4 className="text-xl font-bold lg:text-4xl">
            In my university internship, I was the{" "}
            <span className="text-violet-800">Head of the development</span> @
            ColArq web.
          </h4>
        </Reveal>
        <Reveal>
          <p className="text-base text-neutral-400 lg:text-xl">
            A web platform focused on simplifying document management for
            members and publishing articles.
          </p>
        </Reveal>
      </div>

      <div className="h-screen items-center space-y-2">
        <Reveal>
          <p className="text-base lg:text-2xl">
            I develope tools for managing private documents,
          </p>
        </Reveal>
        <Reveal>
          <h4 className="text-xl font-bold text-violet-800 lg:text-5xl">
            Enabling secure access and efficient workflows
          </h4>
        </Reveal>
        <Reveal>
          <p className="text-base lg:text-2xl">
            through custom modules and integrations.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
