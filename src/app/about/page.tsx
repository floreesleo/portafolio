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
      <div className="space-y-10">
        <MainSkills />
        <Experience />
        <Languages />
        <Hobbies />
      </div>
    </div>
  );
}
