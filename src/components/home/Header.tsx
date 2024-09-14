import { Reveal } from "@/components/motion";

export default function Header() {
  return (
    <div>
      <Reveal>
        {/* Titulo */}
        <h1 className="text-7xl font-black">
          flores<span className="text-violet-800">.dev()</span>
        </h1>
      </Reveal>

      <Reveal>
        {/* Nombre */}
        <h4 className="text-3xl font-medium text-violet-800">
          Leonardo Azael Hernández Flores
        </h4>
      </Reveal>

      <Reveal>
        {/* breve descripcion */}
        <p className="text-xl text-neutral-500">Creative frontend developer</p>
      </Reveal>
    </div>
  );
}
