import { Header, ColArqScene, EarlyDays, MadeWith } from "@/components/home";
import { Reveal } from "@/components/motion";

export default function Home() {
  return (
    <div className="flex flex-col space-y-10 py-28 pl-48">
      <Header />

      {/* myCV - WorkShowcase */}
      <div className="flex h-screen items-center">
        <Reveal>
          <div>
            <h3 className="text-6xl font-black">
              myCV(<span className="text-violet-800">/^.*$/gi</span>)
            </h3>
            <p className="text-xl text-neutral-500">{"<WorkShowcase>"}</p>
          </div>
        </Reveal>
      </div>

      <ColArqScene />
      <EarlyDays />
      <MadeWith />
    </div>
  );
}
