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
