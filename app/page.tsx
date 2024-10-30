import Avatar from "./(components)/Avatar";
import Card from "./(components)/Card";
import PayMe from "./(components)/PayMe";

import { FaFacebook, FaTiktok } from "react-icons/fa";

import { items } from "../data/data";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto">
        <section className="flex flex-col items-center gap-5 justify-center my-10">
          <Avatar />
          <h1 className="text-zinc-500 flex justify-between gap-5 text-2xl">
            The Craft Closet
          </h1>
          <h2 className="text-zinc-500 flex justify-between gap-5">
            Local Crafts made in Oxford, PA
          </h2>
        </section>

        <PayMe />

        <div className="w-full flex gap-2 my-2 flex-col items-center justify-center pb-2 lg:pb-10">
          <Card
            title={items.facebook.title}
            Icon={<FaFacebook />}
            darkColor="#e5e5e5"
            lightColor="#1877F2"
            url={items.facebook.url}
          />
          <Card
            title={items.tiktok.title}
            Icon={<FaTiktok />}
            darkColor="#e5e5e5"
            lightColor="#000000"
            url={items.tiktok.url}
          />
        </div>
      </div>
    </>
  );
}
