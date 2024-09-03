export default function Languages() {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-start text-2xl font-semibold">Languages</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col">
          <h4 className="text-neutral-700">{"// fluent"}</h4>
          <ul className="flex flex-row space-x-2">
            <li className="italic text-violet-800">es-ES</li>
            <li className="text-neutral-500">Español</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="text-neutral-700">{"// intermediate"}</h4>
          <ul className="flex flex-row space-x-2">
            <li className="italic text-violet-800">en-US</li>
            <li className="text-neutral-500">English</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="text-neutral-700">{"// basic"}</h4>
          <ul className="flex flex-row space-x-2">
            <li className="italic text-violet-800">pt-BR</li>
            <li className="text-neutral-500">Português</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
