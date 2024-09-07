"use client";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-h-full z-0 absolute">
        <HoverCard>
          <HoverCardTrigger>
            <Document file="/JoshKahlbaughResume.pdf">
              <Page className="mt-16" pageNumber={1} scale={0.95} />
            </Document>
          </HoverCardTrigger>
          <a href="/JoshKahlbaughResume.pdf" download>
            <HoverCardContent sideOffset={4} className="flex w-32 rounded-full border-none h-14 items-center shadow-none bg-blue-900 text-white justify-center">
                Download
            </HoverCardContent>
          </a>
        </HoverCard>
      </div>
    </div>
  );
};

export default Resume;
