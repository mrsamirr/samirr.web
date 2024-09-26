"use client"
import Link from "./Shared/Link";

export const Contact = () => {
    return (
        <div className="pb-10 flex flex-col text-center">
            <div id="contact" className="relative -top-30"></div>
            <section id="contact" className="mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold dark:text-white text-center mb-8">
                    Contact Me
                </h2>
                <p className="text-lg font-normal text-gray-100">
                    You can send me over an e-mail on{" "}
                    <Link
                        href="mailto:mdsameransari45@gmail.com"
                        className="text-blue-300 hover:!text-blue-300"
                    >
                        mdsameransari45@gmail.com
                    </Link>
                </p>
            </section>
        </div>
    );
};