import Link from "next/link";
import { Github, Linkedin, Download } from "lucide-react";

export default function MyDescription() {
  return (
    <div className="flex flex-col items-start space-y-6 text-lg">
      <h1 className="animate-flip-down select-none text-5xl font-black animate-delay-[1500ms] animate-duration-[1200ms] animate-once">
        .about(<span className="text-violet-800">azael</span>)
      </h1>

      {/* Este div solo se usa para dividir los elementos verticalmente y darle una animación en general al contenedor completo */}
      <div className="animate-fade-right space-y-6 animate-delay-[2400ms] animate-duration-1000 animate-once">
        {/* Enlaces a mis redes */}
        <div className="flex flex-row items-center space-x-3">
          <Link href="https://github.com/floreesleo" target="_blank">
            <Github
              className="text-violet-800 transition-colors duration-500 hover:text-white"
              size={23}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/flores-leonardo"
            target="_blank"
          >
            <Linkedin
              className="text-violet-800 transition-colors duration-500 hover:text-white"
              size={23}
            />
          </Link>
          <span className="select-none">Download my</span>
          <a
            href="/leonardo.azael.cv.pdf"
            download="leonardo.azael.cv.pdf"
            className="flex cursor-pointer select-none items-center rounded-3xl bg-violet-800 px-3 py-1 text-black transition-colors duration-500 hover:bg-white"
          >
            {/* revisar como hacer para que se descargue el pdf de mi cv */}
            CV <Download size={20} className="ml-2" strokeWidth={2} />
          </a>
        </div>

        {/* Descripción */}
        <div>
          <p className="text-xl text-violet-800">
            Frontend developer heavily influenced by art, interactions, and UX.
            Adiccted to music, visual arts, and games.
          </p>
          <p className="text-neutral-500">From México. 🇲🇽</p>
        </div>

        <div className="text-neutral-700">
          {/* Sexo */}
          <p>{"// he/him"}</p>

          {/* Puesto */}
          <p>{"// Junior Frontend Developer @"}</p>
        </div>
      </div>
    </div>
  );
}
