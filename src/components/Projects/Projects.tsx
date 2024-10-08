"use client";

import Project from "./Project";

export default function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center space-y-4">
      <div className="container px-4 md:px-6">
        <div className="relative mx-auto max-w-7xl">
          <div id="projects" className="relative -top-16"></div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold dark:text-white text-center mb-8">
            Projects
          </h2>
        </div>
        <Project />
      </div>
    </section>
  );
}
