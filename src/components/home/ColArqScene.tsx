import { Reveal } from "@/components/motion";

export default function CAScene() {
  return (
    <div className="flex flex-col items-start justify-center space-y-8">
      <div className="flex h-screen items-center">
        <Reveal>
          <h3 className="text-5xl font-bold">
            Colegio de arquitectos(<span className="text-violet-800">2023</span>
            )
          </h3>
        </Reveal>
      </div>

      <div className="flex h-screen flex-col items-center pr-32">
        <Reveal>
          <h4 className="text-4xl font-bold">
            In my university internship, I was the{" "}
            <span className="text-violet-800">Head of the development</span> @
            Colegio de {"Arquitectos'"} web application.
          </h4>
        </Reveal>
        <Reveal>
          <p className="text-xl text-neutral-400">
            A web platform focused on simplifying document management for
            members and publishing articles.
          </p>
        </Reveal>
      </div>

      <div className="h-screen items-center space-y-2">
        <Reveal>
          <p className="text-2xl">
            Throughout these days I delivered hundred of
          </p>
        </Reveal>
        <Reveal>
          <h4 className="text-5xl font-bold text-violet-800">
            tools, modules, integrations, and custom projects
          </h4>
        </Reveal>
        <Reveal>
          <p className="text-2xl">for online stores and service providers.</p>
        </Reveal>
      </div>
    </div>
  );
}
