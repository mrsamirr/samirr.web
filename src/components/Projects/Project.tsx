import Image from 'next/image';
import { projects } from '@/data/projects';
import { GithubIcon, Globe } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimationContainer from '../ui/AnimationContainer';

export default function Project() {
    return (
        <AnimationContainer>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}>
                        <div className="group relative overflow-hidden flex flex-col  rounded-[0.800rem] dark:text-white shadow-[6px_6px_0px_1px_#000000a6] dark:shadow-[6px_6px_0px_1px_#ffffffa6] bg-neutral-100 dark:bg-black border-white transition-colors duration-150 border p-2 md:p-3 max-w-2xl">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={300}
                                className="h-48 w-full object-cover"
                            />
                            <div className="bg-background p-4">
                                <h3 className="text-xl font-bold dark:text-white ">{project.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground dark:text-white text-[clamp(.75rem,1.5vw,.875rem)] line-clamp-2 ">{project.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tech.map((proj) => (
                                        <Image src={proj} alt={proj} width={20} height={20} key={proj} />
                                    ))}
                                </div>
                                <div className="mt-4 flex gap-2">
                                    <Link
                                        href={project.live}
                                        className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-white/90 text-black"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <Globe className="mr-2 h-4 w-4" />  Live Link
                                    </Link>
                                    <Link
                                        href={project.github}
                                        className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent dark:hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring dark:text-white"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <GithubIcon className="mr-2 h-4 w-4" />
                                        GitHub
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </AnimationContainer>
    )
}