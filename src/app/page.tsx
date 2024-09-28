import { Header, ColArqScene, EarlyDays, MadeWith } from "@/components/home";
import { Reveal } from "@/components/motion";

export default function Home() {
  return (
    <div>
      <Header />

      {/* myCV - WorkShowcase */}
      <div className="flex h-screen items-center">
        <Reveal>
          <div>
            <h3 className="text-3xl font-black md:text-5xl lg:text-6xl">
              myCV(<span className="text-violet-800">/^.*$/gi</span>)
            </h3>
            <p className="text-base text-neutral-500 md:text-xl">
              {"<WorkShowcase>"}
            </p>
          </div>
        </Reveal>
      </div>

      <ColArqScene />
      <EarlyDays />

      <div className="flex h-screen items-center">
        <span className="text-4xl font-black text-violet-800 md:text-5xl lg:text-6xl">
          {"</wrapper>"}
        </span>
      </div>

      <MadeWith />
    </div>
  );
}
