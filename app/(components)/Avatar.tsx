import Image from "next/image";

export default function Avatar() {
  return (
    <>
      <a href="/">
        <div className="avatar md:hover:scale-[102%] transition-all duration-300 bg-transparent">
          <div className="w-60">
            <Image
              priority={true}
              alt="user avatar"
              src="/logo.png"
              width={100}
              height={100}
            />
          </div>
        </div>
      </a>
    </>
  );
}
