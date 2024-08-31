"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathName = usePathname();

  // Mapeo de rutas a nombres específicos
  const pageTitle: { [key: string]: string } = {
    "/": ".is()",
    "/about": ".about()",
    // Agrega más rutas aquí si es necesario
  };

  const title = pageTitle[pathName] || pathName;

  return (
    <nav className="fixed left-0 top-0 z-50 flex h-fit w-full items-center py-2 backdrop:opacity-15">
      <div className="animated-fade-down animate-once animate-duration-[1000ms] container mx-auto flex items-center justify-between p-4 font-medium">
        <h2 className="text-2xl font-black">{title}</h2>

        <div className="flex flex-row space-x-4">
          <Link
            href={"/"}
            className={pathName == "/" ? "text-neutral-500" : "text-white"}
          >
            .is()
          </Link>
          <Link
            href={"/about"}
            className={pathName == "/about" ? "text-neutral-500" : "text-white"}
          >
            .about()
          </Link>
          <Link href={"#"}>.email()</Link>
        </div>
      </div>
    </nav>
  );
}
