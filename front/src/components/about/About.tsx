import { FC } from "react";
import Image from "next/image";
import Selfie from "@/assets/selfie.jpeg";

const About: React.FC = () => {
    return (
        <div className="">
            <h1 className="relative w-full text-center pt-4 md:pt-8 md:text-6xl text-4xl TextShadow font-medium">
                Full Stack Developer
            </h1>

            <div className="flex justify-center items-start md:pt-8 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center max-w-5xl">
                    <div className="md:col-span-3 flex flex-col items-start md:items-start">
                        <p className="text-left md:text-left max-w-2xl p-4">
                            <span className=" md:text-6xl text-2xl text-red-700 font-semibold">
                                I am{" "}
                            </span>
                            <span className=" md:text-4xl text-xl text-red-500 font-semibold">
                                a Full Stack developer{" "}
                            </span>
                            , and I love creating dynamic web applications. I am
                            passionate about working on both the front-end and
                            back-end, using modern technologies such as
                            JavaScript, TypeScript, React, Node.js, and NestJS.
                            I’m enthusiastic about designing attractive
                            interfaces and developing efficient solutions with
                            solid logic. I am constantly improving my skills to
                            face new challenges, and I enjoy collaborating on
                            innovative projects, always looking for
                            opportunities to keep learning and growing
                            professionally.
                        </p>
                    </div>
                    <div className="md:col-span-2 flex justify-evenly">
                        <Image
                            src={Selfie}
                            alt="Selfie"
                            width={200}
                            height={200}
                            className="rounded-full md:size-[190px] size-40 md:mr-2"
                            priority
                        />
                        <div className="flex flex-col justify-evenly items-start font-medium md:text-base text-sm">
                            <p>Fabricio Irazoqui</p>
                            <p>27/10/1988</p>
                            <p>fgi.fa2@hotmail.com</p>
                            <p>Buenos Aires,Argentina</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
