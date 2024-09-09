import { Header, CAScene, EarlyDays, MadeWith } from "@/components/home";
import HeaderSection from "@/components/utils/HeaderSection";

export default function Home() {
  return (
    <div className="flex flex-col space-y-10 py-28 pl-48">
      <Header />
      <div className="animate-fade-right space-y-10 animate-delay-[2400ms] animate-duration-1000 animate-once">
        <HeaderSection
          title="myCV"
          contrast="/^.*$/gi"
          description="<WorkShowcase>"
        />
        <CAScene />
        <EarlyDays />
      </div>
      <MadeWith />
    </div>
  );
}
