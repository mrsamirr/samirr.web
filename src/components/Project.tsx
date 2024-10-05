import Image from 'next/image';
import { Github, Globe } from "lucide-react";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import Link from './Shared/Link';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';

export default function Project() {
    return <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-10 container mx-auto'>
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
                            className="w-full h-80 object-cover rounded-md mb-4"
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
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="mr-0 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                            <Link
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Globe className="mr-0 h-5 w-5" />
                            </Link>
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
}