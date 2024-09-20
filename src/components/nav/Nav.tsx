"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin } from "lucide-react";

export default function Nav() {
  const pathName = usePathname();

  // Mapeo de rutas a nombres específicos
  const pageTitle: { [key: string]: string } = {
    "/": ".dev()",
    "/about": ".about()",
    // Agrega más rutas aquí si es necesario
  };

  const title = pageTitle[pathName] || ".err(404)";

  return (
    <nav className="fixed left-0 top-0 z-50 flex h-fit w-full items-center bg-custom-dark py-2 shadow-xl shadow-custom-dark backdrop:opacity-15">
      <div className="container mx-auto flex animate-fade-down items-center justify-between px-4 animate-duration-1000 animate-once md:p-0.5">
        <h2 className="select-none text-xl font-semibold text-violet-800">
          {title}
        </h2>

        <div className="hidden flex-row items-center space-x-4 md:flex">
          <Link
            href={"/"}
            className={
              pathName == "/"
                ? "text-neutral-500 transition-colors duration-500 hover:text-violet-800"
                : "text-white transition-colors duration-500 hover:text-violet-800"
            }
          >
            .dev()
          </Link>
          <Link
            href={"/about"}
            className={
              pathName == "/about"
                ? "text-neutral-500 transition-colors duration-500 hover:text-violet-800"
                : "text-white transition-colors duration-500 hover:text-violet-800"
            }
          >
            .about()
          </Link>
          <Link
            href={"mailto:florees.leo@gmail.com"}
            className="transition-colors duration-500 hover:text-violet-800"
          >
            .email()
          </Link>

          <Link
            href="https://www.linkedin.com/in/flores-leonardo"
            target="_blank"
          >
            <Linkedin
              className="text-violet-800 transition-colors duration-500 hover:text-white"
              size={23}
              absoluteStrokeWidth={false}
              strokeWidth={2}
            />
          </Link>
          <Link href="https://github.com/floreesleo" target="_blank">
            <Github
              className="text-violet-800 transition-colors duration-500 hover:text-white"
              size={23}
              absoluteStrokeWidth={false}
              strokeWidth={2}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
