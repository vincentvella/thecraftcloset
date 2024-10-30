import Image from "next/image";
import { FaPaypal } from "react-icons/fa";
import { items } from "../../data/data";

export default function PayMe() {
  return (
    <>
      <div className="h-16 w-full flex items text-xl font-semibold gap-2">
        <a
          href={items.venmo.url}
          target="_blank"
          className="group text-4xl w-full bg-[#008CFF] hover:bg-[#008CFF] rounded-lg flex items-center justify-center transition-colors duration-300"
          rel="noreferrer"
        >
          <div className="md:group-hover:scale-[110%] transition-transform duration-500">
            <Image src="/venmo.webp" alt="venmo" width={50} height={50} />
          </div>
        </a>
        <a
          href={items.paypal.url}
          target="_blank"
          className="group text-4xl w-full bg-[#00457C] hover:bg-[#00457C] rounded-lg flex items-center justify-center transition-colors duration-300"
          rel="noreferrer"
        >
          <div className="md:group-hover:scale-[110%] transition-transform duration-500">
            <FaPaypal />
          </div>
        </a>
      </div>
    </>
  );
}
