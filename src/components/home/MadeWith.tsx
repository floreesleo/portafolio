import { Music } from "lucide-react";

export default function MadeWith() {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-start text-base text-neutral-700 md:text-xl">
        {"// Made with"}
      </h2>

      <div className="grid grid-cols-1 gap-10 text-violet-800 md:grid-cols-3">
        <div className="space-y-5">
          <span>{"(){</>}"}</span>

          <ul>
            <li>Next.JS</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
            <li>Figma</li>
          </ul>
        </div>
        <div className="space-y-5">
          <span>{"~"}</span>

          <ul>
            <li>+24 cups of coffee</li>
            <li>2 easter eggs</li>
            <li>Nsqk</li>
          </ul>
        </div>
        <div className="space-y-5">
          <span>
            <Music strokeWidth={2} size={17} />
          </span>

          <ul>
            <li className="transition-colors duration-500 hover:text-white">
              <a
                href="https://open.spotify.com/intl-es/track/5DtnCKnQ8nmRX1JL8N90Ua?si=9e9890abd7c44af3"
                target="_blank"
              >
                NADIE MÁS!
              </a>
            </li>
            <li className="transition-colors duration-500 hover:text-white">
              <a
                href="https://open.spotify.com/intl-es/track/5SuMst3sQt8wf94iGoXXLw?si=a29afac5ffce40e5"
                target="_blank"
              >
                LOVELANGUAGE
              </a>
            </li>
            <li className="transition-colors duration-500 hover:text-white">
              <a
                href="https://open.spotify.com/intl-es/track/0DxSLqLCJAtYD8XqF1xdhU?si=f65ab866b2da4946"
                target="_blank"
              >
                Moldes
              </a>
            </li>
            <li className="transition-colors duration-500 hover:text-white">
              <a
                href="https://open.spotify.com/intl-es/track/5BwJIBeUgerlyYADTvRctX?si=aedc429c206f4ea7"
                target="_blank"
              >
                BAD INTENCIONES
              </a>
            </li>
            <li className="transition-colors duration-500 hover:text-white">
              <a
                href="https://open.spotify.com/intl-es/track/7yjSJCFHonG9hz1A8WHHbn?si=4695624c986b4942"
                target="_blank"
              >
                BOBOMENSOTONTO
              </a>
            </li>
            <li className="transition-colors duration-500 hover:text-white">
              <a
                href="https://open.spotify.com/intl-es/track/6EjBcoyPVn99cpRfoDiuRf?si=9f9ee1a8c139432b"
                target="_blank"
              >
                Si En Tu Mente Estuve
              </a>
            </li>
            <li className="transition-colors duration-500 hover:text-white">
              <a
                href="https://open.spotify.com/intl-es/track/6AebAAfoIjSRsARv6p05kS?si=f498e39fea944741"
                target="_blank"
              >
                misa
              </a>
            </li>
            <li className="transition-colors duration-500 hover:text-white">
              <a
                href="https://open.spotify.com/intl-es/track/09np8TCtg5O6yYsaxKJlJ0?si=8c72a2ac7183479e"
                target="_blank"
              >
                Tarde o temprano
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
