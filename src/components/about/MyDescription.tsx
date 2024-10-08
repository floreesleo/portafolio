import Link from "next/link";
import { Github, Linkedin, Download } from "lucide-react";
import { Reveal } from "@/components/motion";

export default function MyDescription() {
  return (
    <div className="flex h-screen flex-col justify-center space-y-6 lg:items-start">
      <Reveal>
        <h1 className="text-3xl font-black md:text-5xl lg:text-6xl">
          about(<span className="text-violet-800">flores</span>)
        </h1>
      </Reveal>

      {/* Este div solo se usa para dividir los elementos verticalmente */}
      <div className="space-y-6">
        {/* Enlaces a mis redes */}

        <div className="grid grid-cols-1 space-y-2 md:flex md:flex-row md:items-center md:space-x-2 md:space-y-0">
          <Reveal>
            <div className="flex flex-row items-center space-x-3">
              <Link
                href="https://www.linkedin.com/in/flores-leonardo"
                target="_blank"
              >
                <Linkedin
                  className="text-violet-800 transition-colors duration-500 hover:text-white"
                  size={23}
                />
              </Link>
              <Link href="https://github.com/floreesleo" target="_blank">
                <Github
                  className="text-violet-800 transition-colors duration-500 hover:text-white"
                  size={23}
                />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-row items-center justify-center space-x-2">
              <span>Download my</span>
              <a
                href="/flores.leonardo.cv.es.pdf"
                download="flores.leonardo.cv.es.pdf"
                className="flex cursor-pointer select-none items-center rounded-3xl bg-violet-800 px-5 py-1 text-black transition-colors duration-500 hover:bg-white"
              >
                {/* revisar como hacer para que se descargue el pdf de mi cv */}
                CV <Download size={20} className="ml-2" strokeWidth={2} />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Descripción */}
        <div>
          <Reveal>
            <p className="pr-6 text-base text-violet-800 md:text-xl lg:pr-0">
              Frontend developer heavily influenced by art, interactions, and
              UX. Adiccted to music, visual arts, and games.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-sm text-neutral-500 md:text-base">
              From México. 🇲🇽
            </p>
          </Reveal>
        </div>
        <div className="text-sm text-neutral-700 md:text-base">
          <Reveal>
            {/* Sexo */}
            <p>{"// he/him"}</p>
          </Reveal>

          <Reveal>
            {/* Puesto */}
            <p>{"// Junior Frontend Developer @"}</p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
