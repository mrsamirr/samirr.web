import {
    BashIcon,
    DockerIcon,
    ExpressIcon,
    GitIcon,
    JavascriptIcon,
    MongoIcon,
    NeovimIcon,
    NextIcon,
    PostgresIcon,
    ReactIcon,
    TailwindIcon,
    TypescriptIcon
} from "@/components/icons";
import { LinuxIcon } from "@/components/icons/linux";
import { Url } from "next/dist/shared/lib/router/router";


export type SkillProps = {
    name: string,
    icon: JSX.Element;
}

export const LANGUAGES: SkillProps[] = [
    {
        name: 'Javascript',
        icon: <JavascriptIcon />
    },
    {
        name: 'Typescript',
        icon: <TypescriptIcon />
    },
    {
        name: 'Bash',
        icon: <BashIcon />
    },
]

export const FRAMEWORKS: SkillProps[] = [
    {
        name: 'Nextjs',
        icon: <NextIcon />
    },
    {
        name: 'Express',
        icon: <ExpressIcon />
    },
    {
        name: 'React',
        icon: <ReactIcon />
    },
    {
        name: 'Tailwindcss',
        icon: <TailwindIcon />
    }
]

export const DATABASES: SkillProps[] = [
    {
        name: 'Postgres',
        icon: <PostgresIcon />
    },
    {
        name: 'Mongodb',
        icon: <MongoIcon />
    }
]
export const TOOLS: SkillProps[] = [
    {
        name: 'neovim',
        icon: <NeovimIcon />
    },
    {
        name: 'git',
        icon: <GitIcon />
    },
    {
        name: 'docker',
        icon: <DockerIcon />
    },
    {
        name: 'linux',
        icon: <LinuxIcon />
    }
]