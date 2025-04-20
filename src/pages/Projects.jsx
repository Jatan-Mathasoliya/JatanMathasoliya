import React, { useState, useEffect } from "react";
import { ExpandableCardDemo } from "../components/ui/ExpandableCardDemo";
import { Cover } from "../components/ui/cover";
import { motion } from "framer-motion";

function Projects() {
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        // Staggered animation entrance effect
        setIsLoaded(true);
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
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

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 py-16">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16"
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

                {/* Projects Grid Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-20"
                >
                    <ExpandableCardDemo />
                </motion.div>

                {/* View All Projects Button */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center mt-12"
                >
                    
                </motion.div>
            </div>

            {/* Project count indicator dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {[...Array(3)].map((_, i) => (
                    <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-blue-500' : 'bg-gray-600'}`}
                    />
                ))}
            </div>

            {/* Global animation styles */}
            <style jsx global>{`
                @keyframes floatBubble {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(-20px, 30px) scale(1.05); }
                    50% { transform: translate(20px, -20px) scale(0.95); }
                    75% { transform: translate(40px, 20px) scale(1.1); }
                }
            `}</style>
        </div>
    );
}

export default Projects;