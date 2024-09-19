import SkillSection from "../SkillsContent/SkillsContent";
import SoftSkillsLogo from "@/assets/SoftSkill.webp";
import TeamPlayer from "@/assets/people-teamwork-svgrepo-com.svg";
import ProblemSolving from "@/assets/problem-solving-fix-offer-solution-solve-svgrepo-com.svg";
import Proactive from "@/assets/idea-light-bulb-svgrepo-com.svg";
import PositiveAttitude from "@/assets/positive-happy-excited-activist-svgrepo-com.svg";
import Leadership from "@/assets/hierarchical-structure-svgrepo-com.svg";
import Perseverance from "@/assets/perseverance-svgrepo-com.svg";

const SoftSkills: React.FC = () => {
    const softSkillsData = [
        { name: "Team Player", icon: TeamPlayer },
        { name: "Problem Solving", icon: ProblemSolving },
        { name: "Proactive", icon: Proactive },
        { name: "Positive Attitude", icon: PositiveAttitude },
        { name: "Dedication", icon: Perseverance },
        { name: "Leadership", icon: Leadership },
    ];
    return (
        <>
            <SkillSection
                title="Soft Skills"
                logo={SoftSkillsLogo}
                skills={softSkillsData}
            />
        </>
    );
};

export default SoftSkills;
