"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, EllipsisVertical, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ButtonNav() {
  const pathName = usePathname();
  const [toggleNav, setToggleNav] = useState(false);

  const router = useRouter();
  const handleLinkClick = (path: string) => {
    setToggleNav(false);
    router.push(path);
  };

  return (
    <>
      <div className="block md:hidden">
        <AnimatePresence>
          {!toggleNav && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <EllipsisVertical
                onClick={() => setToggleNav(true)}
                size={28}
                absoluteStrokeWidth={false}
                strokeWidth={2}
                className="cursor-pointer text-white"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {toggleNav && (
          <motion.div
            key="nav-menu"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute -right-0 -top-3 flex h-screen w-full flex-col items-end bg-custom-dark/90 p-4"
          >
            <ul className="flex flex-col items-end justify-end space-y-8 text-2xl font-semibold">
              <li>
                <X
                  onClick={() => setToggleNav(false)}
                  size={28}
                  absoluteStrokeWidth={false}
                  strokeWidth={3}
                  className="cursor-pointer text-violet-800 transition-colors duration-500 hover:text-white"
                />
              </li>
              <li className="cursor-pointer">
                <span
                  onClick={() => handleLinkClick("/")}
                  className={
                    pathName == "/"
                      ? "text-neutral-500 transition-colors duration-500 hover:text-violet-800"
                      : "text-white transition-colors duration-500 hover:text-violet-800"
                  }
                >
                  .dev()
                </span>
              </li>
              <li className="cursor-pointer">
                <span
                  onClick={() => handleLinkClick("/about")}
                  className={
                    pathName == "/about"
                      ? "text-neutral-500 transition-colors duration-500 hover:text-violet-800"
                      : "text-white transition-colors duration-500 hover:text-violet-800"
                  }
                >
                  .about()
                </span>
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
      </AnimatePresence>
    </>
  );
}
