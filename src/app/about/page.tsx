import {
  MyDescription,
  Experience,
  Hobbies,
  Languages,
  MainSkills,
} from "@/components/about";

export default function AboutPage() {
  return (
    <div>
      {/* <div className="fixed -left-24 top-52 z-50 h-[450px] w-[450px] rounded-full bg-violet-800/55 backdrop-blur-md" /> */}
      <MyDescription />
      <div className="space-y-10">
        <MainSkills />
        <Experience />
        <Languages />
        <Hobbies />
      </div>
    </div>
  );
}
