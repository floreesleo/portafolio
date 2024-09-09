import {
  MyDescription,
  Experience,
  Hobbies,
  Languages,
  MainSkills,
} from "@/components/about";

export default function AboutPage() {
  return (
    <div className="flex flex-col space-y-10 py-28 pl-48">
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
