import FiberWrapper from "@/components/fiber-wrapper";
import { renderSocials } from "@/components/Socials/Socials";
import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <main className="min-h-screen pt-32" >
                <section className="flex flex-col items-center gap-5">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold dark:text-white text-center">
                        About Me
                    </h1>

                    <div className="dark:bg-black bg-white max-w-lg dark:text-white text-xl p-5 font-thin flex flex-col items-center rounded-lg border-2 gap-9 m-1">
                        <Image
                            src={"https://creatorspace.imgix.net/users/clc4w34xr00lfju0yz7hwvcfp/E4O6bTcBeQCAicYg-5hn0oo.jpg?w=300&h=300"}
                            alt="samirr's image"
                            className="rounded-full border-blue-500 border-4"
                            width={200}
                            height={200}
                        />
                        <p className="font-bold"> I&apos;m Md Samer Ansari</p>
                        <div className="mt-0 flex animate-fade-in flex-wrap items-center justify-center gap-6 font-display font-medium text-zinc-500 md:mt-0 pb-4">
                            {renderSocials()}
                        </div>
                        <p>I&apos;m a Full-Stack Developer with expertise in Next.js, React.js, and Typescript, specializing in web development and software architecture. I enjoy solving complex problems and building efficient, scalable applications.I&apos;ve also solved over 300+ DSA problems on LeetCode using C++.
                        </p>
                        <p>
                            I spend a lot of time on GitHub. It&apos;s a place where I work on projects and help make free software for everyone to use.
                        </p>
                        <p>
                            Now I&apos;ve learned a lot and now feel ready to give back to the community. I enjoy supporting others who are starting their journey in this field.
                        </p>

                    </div>
                </section>
                <FiberWrapper />

            </main >
        </>

    )
}