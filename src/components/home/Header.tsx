import { Reveal } from "@/components/motion";

export default function Header() {
  return (
    <div className="flex h-screen flex-col justify-center space-y-3 lg:space-y-0">
      <Reveal>
        {/* Titulo */}
        <h1 className="text-4xl font-black lg:text-7xl">
          flores<span className="text-violet-800">.dev()</span>
        </h1>
      </Reveal>

      <Reveal>
        {/* Nombre */}
        <h4 className="text-base text-violet-800 lg:text-3xl">
          Leonardo Azael Hernández Flores
        </h4>
      </Reveal>

      <Reveal>
        {/* breve descripcion */}
        <p className="text-base text-neutral-500 lg:text-xl">
          Creative frontend developer
        </p>
      </Reveal>
    </div>
  );
}
