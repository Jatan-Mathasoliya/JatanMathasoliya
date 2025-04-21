import React, { useState, useEffect } from "react";
import { ExpandableCardDemo } from "../components/ui/ExpandableCardDemo";
import { Cover } from "../components/ui/cover";
import { motion } from "framer-motion";

function Projects() {
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
            
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(3)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute rounded-full bg-blue-500/20 blur-3xl"
                        style={{
                            width: `${Math.random() * 300 + 200}px`,
                            height: `${Math.random() * 300 + 200}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: 0.05,
                            animation: `floatBubble ${Math.random() * 20 + 30}s infinite ease-in-out`
                        }}
                    />
                ))}
            </div>

            {/* Main content with proper scrolling */}
            <div className="relative z-10 h-screen w-full overflow-y-auto">
                <div className="container mx-auto px-4 py-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h1 className="flex flex-col md:flex-row items-center justify-center text-5xl md:text-6xl font-bold gap-3 mb-6">
                            <span className="text-gray-400">Amazing Projects At</span>
                            <span className="text-blue-500">
                                <Cover>Rapid Speed</Cover>
                            </span>
                        </h1>
                        
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
                            Explore my portfolio of innovative solutions and technical expertise
                        </p>
                    </motion.div>

                    <div className="min-h-[60vh]">
                        <ExpandableCardDemo />
                    </div>

                    <div className="h-20"></div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes floatBubble {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(-20px, 30px) scale(1.05); }
                    50% { transform: translate(20px, -20px) scale(0.95); }
                    75% { transform: translate(40px, 20px) scale(1.1); }
                }
                
                /* Custom scrollbar */
                ::-webkit-scrollbar {
                    width: 8px;
                }
                ::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                }
                ::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
            `}</style>
        </div>
    );
}

export default Projects;