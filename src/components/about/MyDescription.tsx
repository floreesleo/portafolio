import Link from "next/link";
import { Github, Linkedin, Download } from "lucide-react";
import { Reveal } from "@/components/motion";

export default function MyDescription() {
  return (
    <div className="flex h-screen flex-col justify-center space-y-6 lg:items-start">
      <Reveal>
        <h1 className="text-3xl font-black lg:text-6xl">
          about(<span className="text-violet-800">flores</span>)
        </h1>
      </Reveal>

      {/* Este div solo se usa para dividir los elementos verticalmente */}
      <div className="space-y-6">
        {/* Enlaces a mis redes */}

        <div className="flex flex-col items-start space-y-2 lg:flex-row lg:space-x-2">
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
            <div className="flex flex-row items-center space-x-2">
              <span>Download my</span>
              <a
                href="/leonardo.azael.cv.pdf"
                download="leonardo.azael.cv.pdf"
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
            <p className="pr-6 text-base text-violet-800 lg:pr-0 lg:text-xl">
              Frontend developer heavily influenced by art, interactions, and
              UX. Adiccted to music, visual arts, and games.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-sm text-neutral-500 lg:text-base">
              From México. 🇲🇽
            </p>
          </Reveal>
        </div>
        <div className="text-sm text-neutral-700 lg:text-base">
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
