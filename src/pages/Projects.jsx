import React, { useState } from "react";
import { ExpandableCardDemo } from "../components/ui/ExpandableCardDemo";
import { Cover } from "../components/ui/cover";

function Projects() {
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white transition-all duration-500 ease-in-out">
            <div className="w-full h-full overflow-y-auto">
                <div className="text-center relative z-10 pt-10">
                    <h1 className="flex items-center justify-center text-4xl md:text-5xl font-bold gap-2 leading-tight">
                        <span className="text-gray-500">Amazing Projects At</span>
                        <span className="text-blue-500">
                            <Cover>Rapid Speed</Cover>
                        </span>
                    </h1>
                </div>
                <div className="mt-10">
                    <ExpandableCardDemo />
                </div>
            </div>
        </div>
    );
}

export default Projects;
