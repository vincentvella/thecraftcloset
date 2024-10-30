import Image from "next/image";
import { config } from "../../data/data";

export default function Footer() {
  return (
    <div className="py-2 text-center bg-zinc-800">
      <a href={config.url}>
        <div className="flex justify-center items-center gap-1 py-2">
          <div>{config.footer}</div>
          <div className="items-center">
            <Image
              src="/vellapps.svg"
              alt="Vellapps Icon"
              className="invert"
              width={25}
              height={25}
              priority
            />
          </div>
        </div>
      </a>
    </div>
  );
}
