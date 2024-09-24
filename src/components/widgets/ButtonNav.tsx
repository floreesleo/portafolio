"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Github, Linkedin, EllipsisVertical, X } from "lucide-react";

export default function ButtonNav() {
  const pathName = usePathname();
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <>
      <div className="block md:hidden">
        <EllipsisVertical
          onClick={handleToggleNav}
          size={28}
          absoluteStrokeWidth={false}
          strokeWidth={2}
          className="cursor-pointer text-white"
        />
      </div>

      {toggleNav && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute right-4 top-1 flex h-screen w-full flex-col items-end bg-custom-dark p-4 opacity-25"
        >
          <ul className="flex flex-col items-end justify-end space-y-8 text-2xl font-semibold">
            <li>
              <X
                onClick={handleToggleNav}
                size={28}
                absoluteStrokeWidth={false}
                strokeWidth={3}
                className="cursor-pointer text-violet-800 transition-colors duration-500 hover:text-white"
              />
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
              <Link
                href={"mailto:florees.leo@gmail.com"}
                className="transition-colors duration-500 hover:text-violet-800"
              >
                .email()
              </Link>
            </li>
            <li className="flex flex-row space-x-4 text-violet-800">
              <Link
                href="https://www.linkedin.com/in/flores-leonardo"
                target="_blank"
              >
                <Linkedin
                  size={30}
                  absoluteStrokeWidth={false}
                  strokeWidth={2}
                  className="text-violet-800 transition-colors duration-500 hover:text-white"
                />
              </Link>
              <Link href="https://github.com/floreesleo" target="_blank">
                <Github
                  size={30}
                  absoluteStrokeWidth={false}
                  strokeWidth={2}
                  className="text-violet-800 transition-colors duration-500 hover:text-white"
                />
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
}
