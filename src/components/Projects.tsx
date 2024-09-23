"use client";

import Image from 'next/image';
import { motion } from "framer-motion";
import { GithubIcon, ExternalLinkIcon, SendIcon, Github, Globe } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-10 container mx-auto">

            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col dark:text-white">

                  <CardContent className="flex-grow">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-md mb-4"
                      width={500}
                      height={160}
                    />

                    <p className="text-[clamp(.75rem,1.5vw,.875rem)] line-clamp-2 max-w-xs">
                      {/* {trimDescriptionToWords(project.desc, 20)}... */}
                      {project.description}
                    </p>
                  </CardContent>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-0 h-5 w-5" />

                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="mr-0 h-5 w-5" />

                      </a>
                    </Button>
                    <div className="flex flex-wrap gap-3 items-center justify-start sm:justify-stretch">
                      {project.tech.map((proj) => (
                        <Image src={proj} alt={proj} width={20} height={20} key={proj} />
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
