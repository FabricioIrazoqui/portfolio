import React from "react";
import Image, { StaticImageData } from "next/image";

interface Skill {
    name: string;
    icon?: JSX.Element | StaticImageData;
}

interface SkillSectionProps {
    title: string;
    logo?: StaticImageData;
    skills: Skill[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, logo, skills }) => {
    return (
        <div className="md:p-10 p-4">
            <div>
                <div className="flex gap-4 md:mb-8 mb-4 p-4 border-b-[0.5px]">
                    <h2 className="md:text-4xl text-3xl TextShadow font-medium">
                        {title}
                    </h2>
                    {logo && (
                        <Image
                            src={logo}
                            alt={`${title} logo`}
                            width={45}
                            height={25}
                            className="rounded-full bg-slate-100 p-2"
                        />
                    )}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-2 bg-color3 p-2 md:p-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-1 md:gap-4 w-3/4 m-auto"
                        >
                            {skill.icon ? (
                                React.isValidElement(skill.icon) ? (
                                    skill.icon
                                ) : (
                                    <Image
                                        src={skill.icon as StaticImageData}
                                        alt={`${skill.name} icon`}
                                        width={100}
                                        height={100}
                                        className="filter drop-shadow-[2px_3px_5px_rgba(0,0,0,0.9)] md:size-[50px] size-[35px] md:mb-4 mb-2"
                                    />
                                )
                            ) : null}
                            <p translate="no">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillSection;
