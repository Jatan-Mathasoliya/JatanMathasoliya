import React from 'react';
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';
import { Timeline } from '../components/ui/timeline';
import { ContainerTextFlip } from '../components/ui/container-text-flip';
import ContactMe from '../components/ContactMe';
import { FileUser, Telescope } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
const AboutMe = () => {
    const navigate = useNavigate();
    const data = [
        {
            title: "Education",
            content: (
                <div>
                    <div className="flex flex-col w-[50vw] space-y-6 text-gray-300">
                        <div className="relative pb-6">
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-semibold text-white">Sarwa Mangal School</span>
                                <span className="text-lg text-gray-400">2017 - 2022</span>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                                <span className="text-gray-400">Secondary School (GSEB)</span>
                                <span className="font-semibold text-white">10th - 87%</span>
                            </div>
                            <div className="absolute left-0 w-full h-[1px] bg-gray-600 mt-6"></div>
                        </div>
                        <div className=' relative pb-6'>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-semibold text-white">Shree Swaminarayan High School</span>
                                <span className="text-lg text-gray-400">2022 - 2024</span>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                                <span className="text-gray-400">Higher Secondary School (GSEB)</span>
                                <span className="font-semibold text-white">12th - 78%</span>
                            </div>
                            <div className="absolute left-0 w-full h-[1px] bg-gray-600 mt-6"></div>
                        </div>
                        <div className=' relative pb-6'>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-semibold text-white">Rai University Ahemdabad</span>
                                <span className="text-lg text-gray-400">2024 - Present</span>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                                <span className="text-gray-400">B-Tech in Computer Science Engineering</span>
                                <span className="font-semibold text-white">
                                    SGPA : 9.81 - 1 sem
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            ),
        },
        {
            title: "Tech Stack",
            content: (
                <div>
                    <div className=" flex flex-col gap-5">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-300 border-b pb-2 w-fit">
                                Languages
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 mt-4">
                                {[
                                    { name: "HTML", icon: "HTML5" },
                                    { name: "CSS", icon: "CSS3" },
                                    { name: "JavaScript", icon: "JavaScript" },
                                    { name: "C++", icon: "C%2B%2B-%28CPlusPlus%29" },
                                    { name: "C", icon: "C" },
                                ].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="group flex items-center gap-2 border border-[#414141] w-fit px-4 py-1.5 rounded-full bg-gray-800/50 text-gray-200 shadow-md 
                                        hover:-rotate-6 hover:-translate-y-2 hover:scale-110 transition-transform duration-200 ease-in-out">
                                        <img
                                            src={`https://icon.icepanel.io/Technology/svg/${tech.icon}.svg`}
                                            alt={tech.name}
                                            className="w-4"
                                        />
                                        <p className="text-[14px]">{tech.name}</p>
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="border-t border-gray-700 w-full" />
                        <div>
                            <h1 className="text-2xl font-bold text-gray-300 border-b pb-2 w-fit">
                                Frontend
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 mt-4">
                                {[
                                    { name: "React", icon: "React" },
                                    { name: "Vite", icon: "Vite.js" },
                                    { name: "Tailwind-CSS", icon: "Tailwind-CSS" },
                                    { name: "Angular", icon: "Angular" },
                                    { name: "Material-UI", icon: "Material-UI" },
                                ].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="group flex items-center gap-2 border border-[#414141] w-fit px-4 py-1.5 rounded-full bg-gray-800/50 text-gray-200 shadow-md 
                                        hover:-rotate-6 hover:-translate-y-2 hover:scale-110 transition-transform duration-200 ease-in-out">
                                        <img
                                            src={`https://icon.icepanel.io/Technology/svg/${tech.icon}.svg`}
                                            alt={tech.name}
                                            className="w-4"
                                        />
                                        <p className="text-[14px]">{tech.name}</p>
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="border-t border-gray-700 w-full" />
                        <div>
                            <h1 className="text-2xl font-bold text-gray-300 border-b pb-2 w-fit">
                                Backend & Database
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 mt-4">
                                {[
                                    { name: "Node.js", icon: "Node.js" },
                                    { name: "Express ", icon: "Express" },
                                    { name: "Postman ", icon: "Postman" },
                                    { name: "MongoDB ", icon: "MongoDB" },
                                    { name: "Mongoose ", icon: "Mongoose.js" },
                                ].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="group flex items-center gap-2 border border-[#414141] w-fit px-4 py-1.5 rounded-full bg-gray-800/50 text-gray-200 shadow-md 
                                        hover:-rotate-6 hover:-translate-y-2 hover:scale-110 transition-transform duration-200 ease-in-out">
                                        <img
                                            src={`https://icon.icepanel.io/Technology/svg/${tech.icon}.svg`}
                                            alt={tech.name}
                                            className="w-4"
                                        />
                                        <p className="text-[14px]">{tech.name}</p>
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="border-t border-gray-700 w-full" />
                        <div>
                            <h1 className="text-2xl font-bold text-gray-300 border-b pb-2 w-fit">
                                Designing
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 mt-4">
                                {[
                                    { name: "Figma", icon: "Figma" },
                                    { name: "Canva", icon: "Canva" },
                                ].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="group flex items-center gap-2 border border-[#414141] w-fit px-4 py-1.5 rounded-full bg-gray-800/50 text-gray-200 shadow-md 
                                        hover:-rotate-6 hover:-translate-y-2 hover:scale-110 transition-transform duration-200 ease-in-out">
                                        <img
                                            src={`https://icon.icepanel.io/Technology/svg/${tech.icon}.svg`}
                                            alt={tech.name}
                                            className="w-4"
                                        />
                                        <p className="text-[14px]">{tech.name}</p>
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="border-t border-gray-700 w-full" />
                        <div>
                            <h1 className="text-2xl font-bold text-gray-300 border-b pb-2 w-fit">
                                Other Tech
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 mt-4">
                                {[
                                    { name: "Git", icon: "Git" },
                                    { name: "GitHub ", icon: "GitHub" },
                                    { name: "Vercel ", icon: "Vercel" },
                                ].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="group flex items-center gap-2 border border-[#414141] w-fit px-4 py-1.5 rounded-full bg-gray-800/50 text-gray-200 shadow-md 
                                        hover:-rotate-6 hover:-translate-y-2 hover:scale-110 transition-transform duration-200 ease-in-out">
                                        <img
                                            src={`https://icon.icepanel.io/Technology/svg/${tech.icon}.svg`}
                                            alt={tech.name}
                                            className="w-4"
                                        />
                                        <p className="text-[14px]">{tech.name}</p>
                                    </span>
                                ))}
                                <span className="group flex items-center gap-2 border border-[#414141] w-fit px-4 py-1.5 rounded-full bg-gray-800/50 text-gray-200 shadow-md 
                                        hover:-rotate-6 hover:-translate-y-2 hover:scale-110 transition-transform duration-200 ease-in-out">
                                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-netlify-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945045.png?f=webp&w=512" alt="" className="w-4" />
                                    <p className="text-[14px]">Netlify</p>
                                </span>
                                <span className="group flex items-center gap-2 border border-[#414141] w-fit px-4 py-1.5 rounded-full bg-gray-800/50 text-gray-200 shadow-md 
                                        hover:-rotate-6 hover:-translate-y-2 hover:scale-110 transition-transform duration-200 ease-in-out">
                                    <img src="https://us1.discourse-cdn.com/flex016/uploads/render/original/2X/1/11352202c8503f736bea5efb59684f678d7c860c.svg" alt="" className="w-4" />
                                    <p className="text-[14px]">Render</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Contact Me",
            content: (
                <div>
                    <ContactMe />
                </div>
            ),
        },
    ];

    return (
        <div className="h-screen overflow-auto bg-gradient-to-br bg-black text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="">
                <div className=" flex items-center justify-between mx-22">
                    <div className="">
                        <div className="flex flex-col items-start text-left px-6 md:px-12 py-10 space-y-4">

                            <div>
                                <span className="text-5xl font-bold text-gray-300">Hi! I'm</span>
                                <span className="text-6xl font-bold bg-gradient-to-r from-gray-300 via-gray-400 to-gray-800 text-transparent bg-clip-text ml-2">
                                    <ContainerTextFlip />
                                </span>
                            </div>


                            <div className="text-xl font-semibold text-gray-400">
                                Welcome to my Corner
                            </div>


                            <div className="relative text-left max-w-2xl">

                                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-800 to-gray-900 opacity-50 rounded-lg blur-xl"></div>

                                <p className="text-lg text-gray-300 leading-relaxed">
                                    I’m <span className="text-white font-semibold">Jatan Mathasoliya</span>, a{" "}
                                    <span className="text-gray-200 font-semibold">Full Stack Developer</span> blending{" "}
                                    <span className="text-gray-400">design, performance, and functionality</span>{" "}
                                    to craft seamless digital experiences. I thrive on{" "}
                                    <span className="text-gray-400">innovation and problem-solving</span>, turning ideas into reality with clean, scalable code.
                                </p>
                            </div>


                            <span className="text-xl font-bold text-white bg-gradient-to-r from-purple-500 to-blue-400 px-6 py-2 rounded-md shadow-lg">
                                Tech isn’t just my skill—it’s my playground. Let’s build something amazing.
                            </span>
                            <div className="flex items-center gap-5">
                                <button
                                    className="flex items-center rounded-full border border-[#414141] px-3 py-1.5 gap-1.5"
                                    onClick={() => navigate('/projects')}
                                >
                                    <Telescope color="#ffffff" />
                                    <span>Explore My Work</span>
                                </button>
                                <a
                                    href="https://drive.google.com/file/d/1BWrg0mpssouKpAxz28YyOK-efd986zzA/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center rounded-full border border-[#414141] px-3 py-1.5 gap-1.5"
                                >
                                    <FileUser color="#ffffff" />
                                    <span>Full-Stack Artisan</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <CardContainer>
                                <CardBody className="flex flex-col items-center">
                                    <CardItem
                                        translateZ={80}
                                        className="w-64 h-64 rounded-full overflow-hidden shadow-lg"
                                    >
                                        <img
                                            src="https://res.cloudinary.com/dv0dqqcbi/image/upload/v1740911083/jatan_mghewu.jpg"
                                            alt="Jatan Mathasoliya"
                                            className="w-full h-full object-cover"
                                        />
                                    </CardItem>
                                    <CardItem
                                        translateZ={50}
                                        className="mt-4 text-center"
                                    >
                                        <h2 className="text-xl font-semibold text-white">Jatan Mathasoliya</h2>
                                        <p className="text-gray-400">Full Stack Developer | Designer</p>
                                    </CardItem>
                                </CardBody>
                            </CardContainer>

                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <Timeline data={data} />
            </div>
        </div>
    );
};

export default AboutMe;