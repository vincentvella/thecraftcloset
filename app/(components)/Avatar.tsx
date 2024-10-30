export default function Avatar() {
  return (
    <>
      <a href="/">
        <div className="avatar md:hover:scale-[102%] transition-all duration-300 bg-transparent">
          <div className="w-60">
            <img
              alt="The Craft Closet Logo"
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
