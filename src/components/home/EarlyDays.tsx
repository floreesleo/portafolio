import { Reveal } from "@/components/motion";

export default function EarlyDays() {
  return (
    <div className="flex flex-col items-start justify-center space-y-8">
      <div className="flex h-screen items-center">
        <Reveal>
          <div className="space-y-1">
            <h3 className="text-5xl font-bold">
              earlyDays(
              <span className="font-normal text-violet-800">2017,2020</span>)
            </h3>
            <p className="text-xl text-neutral-500">{"<table><tr><td>..."}</p>
          </div>
        </Reveal>
      </div>

      <div className="flex h-screen flex-col items-start pr-32">
        <Reveal>
          <p className="text-xl text-neutral-400">
            Before programming and design.
          </p>
        </Reveal>
        <Reveal>
          <h4 className="text-6xl font-bold">
            A younger Leo{" "}
            <span className="text-violet-800">
              with one foothold in arts and music.
            </span>
          </h4>
        </Reveal>
      </div>

      <div className="h-screen items-center space-y-2">
        <Reveal>
          <h4 className="text-5xl font-bold">
            Since my firsts years,{" "}
            <span className="text-violet-800">
              I have been fascinated my the creative process.
            </span>
          </h4>
        </Reveal>
        <Reveal>
          <p className="pr-28 text-xl">
            Before discovering my passion for development and design, I was
            obsessed with art, music and video games. I always sought perfection
            in what i created, exploring shapes and colors through illustration
            and visual design.
          </p>
        </Reveal>
      </div>

      <div className="h-screen items-center">
        <Reveal>
          <p className="text-xl text-neutral-300">
            This love fot detail and creativity led me, eventually,
          </p>
        </Reveal>
        <Reveal>
          <h4 className="text-5xl font-bold">
            to discover that i wanted to dedicated myself to{" "}
            <span className="text-violet-800">design and programming,</span>
          </h4>
        </Reveal>
        <Reveal>
          <p className="text-xl text-neutral-300">
            a space where i merge all these passions.
          </p>
        </Reveal>
      </div>

      <div className="h-screen">
        <Reveal>
          <h4 className="text-5xl font-bold">
            To create something{" "}
            <span className="text-violet-800">like this...</span>
          </h4>
        </Reveal>
      </div>
    </div>
  );
}
