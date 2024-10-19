"use client"
import Link from "@/components/Shared/Link";
import AnimationContainer from "../ui/AnimationContainer";

export const Footer = () => {
    return <footer className="mx-auto pb-16 flex max-w-3xl flex-col items-center space-y-4 px-8 text-center dark:text-white">
        <AnimationContainer>

            <p>
                Made by <Link className="text-red-400"
                    href="https://www.linkedin.com/in/mrsamirr/">Md Samer Ansari</Link>
            </p>
        </AnimationContainer>
        <AnimationContainer>
            <p>
                feel free to checkout the source code can be found{" "}
                <Link className="text-red-400"
                    href="https://github.com/mrsamirr/samirr.web">on GitHub</Link>
            </p>
        </AnimationContainer>
    </footer>
};
