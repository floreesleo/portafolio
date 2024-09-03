import {
  MyDescription,
  MainSkills,
  Experience,
  Languages,
  Hobbies,
} from "@/components/single-use";

export default function AboutPage() {
  return (
    <div className="flex flex-col space-y-10 px-48 py-28">
      <MyDescription />
      <div className="animate-fade-right space-y-10 animate-delay-[2400ms] animate-duration-1000 animate-once">
        <MainSkills />
        <Experience />
        <Languages />
        <Hobbies />
      </div>
    </div>
  );
}
