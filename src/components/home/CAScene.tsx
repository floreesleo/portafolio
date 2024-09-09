export default function CAScene() {
  return (
    <div className="flex h-screen flex-col items-start justify-center space-y-8">
      <h3 className="text-5xl font-bold">
        Colegio de arquitectos(<span className="text-violet-800">2023</span>)
      </h3>

      <div className="mr-40 space-y-3">
        <h4 className="text-4xl font-bold">
          As part of my university internship,{" "}
          <span className="text-violet-800">
            I was the head of the development
          </span>{" "}
          @ Colegio de {"Arquitectos'"} web application.
        </h4>
        <p className="text-lg text-neutral-300">
          A web platform focused on simplifying document management for members
          and publishing articles.
        </p>
      </div>

      <div className="space-y-2">
        <p>Throughout these days I delivered hundred of</p>
        <h4 className="text-6xl font-bold text-violet-800">
          tools, modules, integrations, and custom projects
        </h4>
        <p>for online stores and service providers.</p>
      </div>
    </div>
  );
}
