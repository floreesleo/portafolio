import Link from "next/link";
import { Github, Linkedin, Download } from "lucide-react";
import { Reveal } from "@/components/motion";

export default function MyDescription() {
  return (
    <div className="text-lg flex h-screen flex-col items-start space-y-6">
      <Reveal>
        <h1 className="text-6xl font-black">
          about(<span className="text-violet-800">azael</span>)
        </h1>
      </Reveal>

      {/* Este div solo se usa para dividir los elementos verticalmente y darle una animación en general al contenedor completo */}
      <div className="space-y-6">
        {/* Enlaces a mis redes */}

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
            <span>Download my</span>
            <a
              href="/leonardo.azael.cv.pdf"
              download="leonardo.azael.cv.pdf"
              className="flex cursor-pointer select-none items-center rounded-3xl bg-violet-800 px-5 py-0.5 text-black transition-colors duration-500 hover:bg-white"
            >
              {/* revisar como hacer para que se descargue el pdf de mi cv */}
              CV <Download size={20} className="ml-2" strokeWidth={2} />
            </a>
          </div>
        </Reveal>
        {/* Descripción */}
        <div>
          <Reveal>
            <p className="text-xl text-violet-800">
              Frontend developer heavily influenced by art, interactions, and
              UX. Adiccted to music, visual arts, and games.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-neutral-500">From México. 🇲🇽</p>
          </Reveal>
        </div>
        <div className="text-neutral-700">
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
