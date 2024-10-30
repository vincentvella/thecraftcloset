"use client";
import { useTheme } from "next-themes";
import { type PropsWithChildren } from "react";

type CardProps = {
  title: string;
  url: string;
  Icon: React.ReactElement;
  darkColor: string;
  lightColor: string;
};

export default function Card({
  title,
  url,
  Icon,
  darkColor,
  lightColor,
}: PropsWithChildren<CardProps>) {
  const { resolvedTheme } = useTheme();
  return (
    <a
      href={url}
      target="_blank"
      className="group transition-color bg-neutral-200/50 dark:bg-zinc-800/50 duration-300 w-full rounded-lg shadow-lg flex items-center justify-between"
      rel="noreferrer"
    >
      <div className="px-5 md:px-10 text-neutral-500 dark:text-neutral-200 text-2xl transition-transform duration-300 md:group-hover:scale-110">
        {title}
      </div>

      <div className="flex items-center group-hover:shadow-lg transition-all duration-200 justify-center h-16 w-20 m-2 rounded-lg mask mask-squircle px-5 md:px-10">
        <div className="text-4xl md:group-hover:scale-[120%] transition-transform duration-500">
          <Icon.type
            {...Icon.props}
            color={resolvedTheme === "dark" ? darkColor : lightColor}
          />
        </div>
      </div>
    </a>
  );
}
