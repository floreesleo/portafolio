"use client";

import React from "react";
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

  const title = pageTitle[pathName] || pathName;

  return (
    <nav className="fixed left-0 top-0 z-50 flex h-fit w-full items-center py-2 backdrop:opacity-15">
      <div className="container mx-auto flex animate-fade-down items-center justify-between p-4 font-medium animate-duration-1000 animate-once">
        <h2 className="text-2xl font-black">{title}</h2>

        <div className="flex flex-row items-center space-x-4">
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
          <Link href="https://github.com/floreesleo" target="_blank">
            <Github
              className="text-violet-800 transition-colors duration-500 hover:text-white"
              size={23}
              absoluteStrokeWidth={false}
              strokeWidth={2}
            />
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
        </div>
      </div>
    </nav>
  );
}
