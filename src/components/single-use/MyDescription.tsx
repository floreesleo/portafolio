import Image from "next/image";
import vercel from "@/icons/vercel.svg";

export default function MyDescription() {
  return (
    <div className="flex flex-col items-start space-y-6 text-lg">
      <h1 className="animate-flip-down select-none text-5xl font-black animate-delay-[1500ms] animate-duration-[1200ms] animate-once">
        about(<span className="text-violet-800">azael</span>)
      </h1>

      {/* Este div solo se usa para dividir los elementos verticalmente y darle una animación en general al contenedor completo */}
      <div className="animate-fade-right space-y-6 animate-delay-[2400ms] animate-duration-1000 animate-once">
        {/* Enlaces a mis redes */}
        <div className="flex flex-row items-center space-x-3">
          <Image src="next.svg" alt="nextjs icon" width={24} height={24} />
          <Image src={vercel} alt="vercel icon" width={24} height={24} />
          <span>Download my</span>
          <span className="rounded-xl bg-violet-800 px-3 py-1">CV</span>
        </div>

        {/* Descripción */}
        <div className="text-violet-800">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aut,
            harum quos, eaque temporibus repudiandae, officiis porro velit
            possimus minima praesentium totam sint blanditiis laboriosam earum
            natus aliquid id vitae.
          </p>
          <p>From México.</p>
        </div>

        <div>
          {/* Sexo */}
          <p className="text-neutral-700">{"// he/him"}</p>

          {/* Puesto */}
          <p className="text-neutral-700">{"// Junior Frontend Developer @"}</p>
        </div>
      </div>
    </div>
  );
}
