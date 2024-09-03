import React from "react";

export default function Hobbies() {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-start text-2xl font-semibold">Also busy with</h2>
      <div className="grid grid-cols-4 gap-4 text-neutral-500">
        <span>Pet my dogs</span>
        <span>Games</span>
      </div>
    </div>
  );
}
