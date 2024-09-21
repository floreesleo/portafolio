import { Reveal } from "@/components/motion";

export default function Hobbies() {
  return (
    <div className="flex flex-col space-y-4">
      <Reveal>
        <h2 className="text-start text-2xl font-semibold">Also busy with</h2>
      </Reveal>
      <div className="grid grid-cols-1 gap-4 text-neutral-500 lg:grid-cols-4">
        <Reveal>
          <span>Pet my dogs</span>
        </Reveal>
        <Reveal>
          <span>Games</span>
        </Reveal>
        <Reveal>
          <span>Listening to music</span>
        </Reveal>
      </div>
    </div>
  );
}
