"use client";

import Project from './Project';

const trimDescriptionToWords = (description: string, limit: number) => {
  const words = description.split(' ');
  const trimmedWords = words.slice(0, limit);
  return trimmedWords.join(' ');
};

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div id="projects" className="relative -top-16"></div>
      <section id="projects" className="mb-16">
        <div className="relative mx-auto max-w-7xl">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold dark:text-white text-center mb-8">
            Projects
          </h2>
          <div>
            <Project />
          </div>
        </div>
      </section>
    </div>
  );
}
