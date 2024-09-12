"use client";

import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "I",
    },
    {
      text: "'m",
    },
    {
      text: "Full",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Stack",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Web",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Devloper.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="h-[5rem] ">
      <TypewriterEffect words={words} />
    </div>
  );
}
