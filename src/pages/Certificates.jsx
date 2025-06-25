import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card.jsx";
import { PointerHighlight } from "@/components/ui/pointer-highlight.jsx";

function Certificates() {
  const items = [
    {
      title: "Odoo Hackathon",
      image:
        "https://res.cloudinary.com/dv0dqqcbi/image/upload/v1750749067/1742837061209_jg2dng.jpg",
      description: "Hands-on participation in ERP-based development during Odoo Hackathon.",
      link: "https://www.odoo.com/",
      className: "absolute top-15 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Infosys - Github Copilot",
      image:
        "https://res.cloudinary.com/dv0dqqcbi/image/upload/v1750749067/1748236322210_gxfq0i.jpg",
      description: "Trained on GitHub Copilot to accelerate coding with AI assistance.",
      link: "https://github.com/features/copilot",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Microsoft Azure Fundamentals",
      image:
        "https://res.cloudinary.com/dv0dqqcbi/image/upload/v1750749068/1748327717557_lanksi.jpg",
      description: "Certified in cloud concepts, core Azure services, and pricing models.",
      link: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "IBM Generative AI",
      image:
        "https://res.cloudinary.com/dv0dqqcbi/image/upload/v1750854341/Untitled_design_14_pcgvet.png",
      description: "Certified in Generative AI for Software Development.",
      link: "https://ole03.yourlearning.ibm.com/mod/scorm/player.php?cat=72725e47db738bd385d1669b2e515712&a=1422&currentorg=articulate_rise&scoid=4373&display=popup&mode=normal&lang=en",
      className: "absolute top-29 left-[35%] rotate-[-9deg]",
    },
    {
      title: "Infosys - AWS Certified Developer",
      image:
        "https://res.cloudinary.com/dv0dqqcbi/image/upload/v1750749067/1748067108794_muoiic.jpg",
      description: "Validated skills in building cloud applications using AWS services.",
      link: "https://aws.amazon.com/certification/certified-developer-associate/",
      className: "absolute top-20 right-[25%] rotate-[2deg]",
    },
    {
      title: "Infosys - OpenAI GPT-4",
      image:
        "https://res.cloudinary.com/dv0dqqcbi/image/upload/v1750749067/1749556839841_jt3lsb.jpg",
      description: "Mastered GPT-4 use cases and AI productivity through Infosys training.",
      link: "https://openai.com/",
      className: "absolute top-32 left-[60%] rotate-[10deg]",
    },
  ];

  return (
    <div className="bg-black">
      <DraggableCardContainer className="relative min-h-[200vh] w-full overflow-y-auto overflow-x-hidden p-4 pb-40">
        {/* Heading */}
        <p className="absolute mx-auto text-center text-2xl font-black text-neutral-100 md:text-4xl dark:text-neutral-500">
          Move Certificates Slowly
        </p>

        {/* Certificate Cards */}
        {items.map((item, index) => (
          <DraggableCardBody key={index} className={item.className}>
            <div className="max-w-[90vw] md:max-w-[360px] bg-white dark:bg-neutral-900 rounded-xl shadow-xl flex flex-col items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto rounded-md object-contain shadow-md"
              />
              <h3 className="mt-4 text-center text-2xl font-semibold text-neutral-900 dark:text-white">
                {item.title}
              </h3>
              {item.description && (
                <p className="mt-2 text-sm text-center text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              )}
              {item.link && (
                <div className="mt-3 text-center">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Official Link
                  </a>
                </div>
              )}
            </div>

          </DraggableCardBody>
        ))}
      </DraggableCardContainer>

      {/* Footer Message */}
      <div className="mx-auto max-w-lg py-20 text-2xl font-bold tracking-tight md:text-4xl text-white">
        The best way to grow is to{" "}
        <PointerHighlight>
          <span>collaborate</span>
        </PointerHighlight>
      </div>
    </div>
  );
}

export default Certificates;
