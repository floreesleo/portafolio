import React from "react";

export default function Header() {
  return (
    <div>
      {/* Titulo */}
      <h1 className="animate-flip-down text-5xl font-black animate-delay-700 animate-duration-[2000ms] animate-once">
        leo<span className="text-violet-800">.dev()</span>
      </h1>

      {/* Nombre */}
      <h4 className="mt-2 animate-fade-right text-2xl font-medium text-violet-800 animate-delay-[3000ms] animate-duration-1000 animate-once">
        Leonardo Flores
      </h4>

      {/* breve descripcion */}
      <p className="mt-4 animate-fade-right text-xl font-light animate-delay-[3000ms] animate-duration-1000 animate-once">
        Creative frontend developer
      </p>
    </div>
  );
}
