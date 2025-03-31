"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./use-outside-click";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

export function ExpandableCardDemo() {
    const [active, setActive] = useState(null);
    const id = useId();
    const ref = useRef(null);

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(null);
            }
        }

        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/30 backdrop-blur-md z-10"
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {active ? (
                    <div className="fixed inset-0 flex items-center justify-center z-[100] overflow-auto">
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[90%] md:max-w-[700px] h-full md:h-fit md:max-h-[90%] flex flex-col 
                                       bg-white/30 dark:bg-neutral-900/30 backdrop-blur-lg border border-white/20 
                                       sm:rounded-3xl shadow-2xl overflow-y-auto transform transition-all duration-300"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <img
                                    width={200}
                                    height={200}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-auto max-h-[400px] object-cover rounded-t-3xl shadow-lg"
                                />
                            </motion.div>

                            <div className="p-6">
                                <motion.h3
                                    layoutId={`title-${active.title}-${id}`}
                                    className="font-semibold text-neutral-700 dark:text-neutral-200 text-xl mb-2"
                                >
                                    {active.title}
                                </motion.h3>

                                <motion.p
                                    layoutId={`description-${active.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-base"
                                >
                                    {active.description}
                                </motion.p>

                                {active.content && (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="mt-4 text-neutral-600 dark:text-neutral-400"
                                    >
                                        {active.content()}
                                    </motion.div>
                                )}

                                {/* Buttons */}
                                <div className="flex gap-3 mt-6">
                                    <motion.a
                                        layout
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-6 py-3 text-sm rounded-full font-bold bg-green-500 text-white shadow-lg 
                                                   hover:bg-green-600 transition duration-200 hover:scale-105"
                                    >
                                        {active.ctaText}
                                    </motion.a>

                                    {active.githubLink && (
                                        <motion.a
                                            layout
                                            href={active.githubLink}
                                            target="_blank"
                                            className="px-6 py-3 text-sm rounded-full font-bold bg-gray-800 text-white flex items-center gap-2 
                                                       shadow-lg hover:bg-gray-900 transition duration-200 hover:scale-105"
                                        >
                                            <FaGithub size={18} />
                                            GitHub
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            {/* Cards List */}
            <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                {cards.map((card) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col bg-white dark:bg-neutral-900 rounded-xl shadow-lg 
                                   hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                    >
                        <motion.div layoutId={`image-${card.title}-${id}`}>
                            <img
                                width={100}
                                height={100}
                                src={card.src}
                                alt={card.title}
                                className="h-60 w-full rounded-lg object-cover object-top"
                            />
                        </motion.div>

                        <div className="flex flex-col items-center mt-3">
                            <motion.h3
                                layoutId={`title-${card.title}-${id}`}
                                className="font-medium text-neutral-800 dark:text-neutral-200 text-lg"
                            >
                                {card.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`description-${card.description}-${id}`}
                                className="text-neutral-600 dark:text-neutral-400 text-base text-center"
                            >
                                {card.description}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

const cards = [
    {
        title: "Blink Chat",
        description: "A real-time chat application built with MERN stack.",
        src: "https://res.cloudinary.com/dv0dqqcbi/image/upload/v1740977370/Screenshot_2025-03-03_101848_hepome.png",
        ctaText: "Visit",
        ctaLink: "https://blink-chat-frontend.onrender.com",
        githubLink: "https://github.com/Jatan-Mathasoliya/blink_chat",
        content: () => (
            <div className="flex flex-col gap-3">
                <p>
                    <strong>Blink Chat</strong> is a modern, real-time messaging platform developed using the <strong>MERN stack</strong>.
                </p>
                <p><strong>Problem Statement:</strong> A chat application with full functionalities that address gaps in platforms like WhatsApp and Telegram.</p>
                <p><strong>Key Features:</strong></p>
                <ul className="list-disc pl-5">
                    <li>One-to-One Chatting: Real-time private messaging.</li>
                    <li>Group Chatting: Create and manage group conversations.</li>
                    <li>File Sharing: Supports media files, documents, and more.</li>
                    <li>Secure Login: Authentication with JWT and bcrypt.</li>
                    <li>Fully Responsive Design: Works across all screen sizes.</li>
                </ul>
                <p><strong>Technology Stack:</strong></p>
                <ul className="list-disc pl-5 flex flex-col gap-3">
                    <li className=" flex items-center gap-2">
                        <span className=" text-md font-bold">
                            Frontend:
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                            {[
                                { name: "React", icon: "React" },
                                { name: "Vite", icon: "Vite.js" },
                                { name: "Tailwind-CSS", icon: "Tailwind-CSS" },
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
                    </li>
                    <li className=" flex items-center gap-2">
                        <span className=" text-md font-bold">
                            Backend:
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                            {[
                                { name: "Node.js", icon: "Node.js" },
                                { name: "Express ", icon: "Express" },
                                { name: "Postman ", icon: "Postman" },
                                { name: "MongoDB ", icon: "MongoDB" },
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
                    </li>
                    <li><strong>Other Tools:</strong> Postman, JWT, Bcrypt</li>
                </ul>
            </div>
        ),
    },
];

