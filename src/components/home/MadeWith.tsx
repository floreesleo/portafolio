import { Music } from "lucide-react";

export default function MadeWith() {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-start text-xl text-neutral-700">{"// Made with"}</h2>
      <div className="grid select-none grid-cols-4 gap-4 text-violet-800">
        <span>{"(){</>}"}</span>
        <span>{"~"}</span>
        <span>
          <Music strokeWidth={2} size={17} />
        </span>
      </div>
      <div className="grid grid-cols-4 gap-4 text-violet-800">
        <ul>
          <li>Next.JS</li>
          <li>Tailwind CSS</li>
        </ul>

        <ul>
          <li>+3 playlists</li>
        </ul>

        <ul className="space-y-2">
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
              href="https://open.spotify.com/intl-es/track/44XjoNvtwevktFKjvVe1vH?si=45d8806458d444db"
              target="_blank"
            >
              Andrea
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
