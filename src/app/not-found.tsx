import Link from "next/link";
import { Reveal } from "@/components/motion";
import { UndoDot } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col py-28 pl-48">
      <Reveal>
        <h4 className="text-6xl font-black">
          <span className="font-normal text-violet-800">new</span> Error(
          <span className="font-normal text-violet-800">404</span>)
        </h4>
      </Reveal>
      <Reveal>
        <p>The page you requested could not be found.</p>
      </Reveal>
      <Reveal>
        <Link
          href="/"
          className="mt-6 flex cursor-pointer select-none items-center space-x-3 rounded-3xl bg-violet-800 px-5 py-1.5 text-black transition-colors duration-500 hover:bg-white"
        >
          <UndoDot />
          <span>Back to home</span>
        </Link>
      </Reveal>
    </div>
  );
}
