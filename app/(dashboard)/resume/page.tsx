"use client";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import dynamic from "next/dynamic";

const Resume = dynamic(() => import("../../../components/resume"), {
  ssr: false,
});

const ResumePage = () => {
  return (
    <div className="w-full h-full relative justify-center items-center">
      <div className="relative top-16">
        <div className="flex top-12 justify-center items-center">
          <HoverCard openDelay={50} closeDelay={200}>
            <HoverCardTrigger>
              <Resume />
            </HoverCardTrigger>
            <a href="/JoshKahlbaughResume.pdf" download>
              <HoverCardContent
                sideOffset={8}
                className="flex w-32 h-12 rounded-full border-none items-center font-bold shadow-none bg-white text-blue-900 justify-center"
              >
                Download
              </HoverCardContent>
            </a>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
