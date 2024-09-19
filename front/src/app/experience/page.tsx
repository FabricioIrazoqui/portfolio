import "./experience.css";

const Experience = () => {
    return (
        <div className="relative md:max-w-[75%] w-full m-auto">
            <div className=" md:p-10 p-2 border-b-[0.5px]">
                <h2 className="md:text-5xl text-4xl TextShadow font-medium md:text-left text-center">
                    Other Experiences
                </h2>
            </div>
            <h2 className="md:text-2xl text-xl TextShadow font-medium md:pt-8  pl-3 pt-4">
                2022 - 2023 - Salesperson / Team Supervisor
            </h2>
            <ul className="list">
                <li>Responsible for the sale of new vehicles (0 km).</li>
                <li>
                    Supervised and managed a customer database to ensure
                    efficient and personalized follow-up.
                </li>
                <li>
                    Generated new leads through prospecting and networking
                    strategies.
                </li>
                <li>Supervised a sales team of 4 members.</li>
                <li>
                    Trained and guided new team members, helping them integrate
                    and achieve their individual goals.
                </li>
            </ul>
        </div>
    );
};

export default Experience;
