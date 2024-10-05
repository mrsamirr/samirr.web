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
import { GitHubActionsIcon } from "@/components/icons/githubactions";
import { LinuxIcon } from "@/components/icons/linux";
import { RedisIcon } from "@/components/icons/redis";


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
        name: 'Redis',
        icon: <RedisIcon />
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
    },
    {
        name: 'github actions',
        icon: <GitHubActionsIcon />
    }
]