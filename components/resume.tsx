"use client";

import { Document, Page, pdfjs } from "react-pdf";
import React from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const screenWidth = screen.width;

const Resume = () => {

  return (
    <Document file="/JoshKahlbaughResume.pdf">
      <Page pageNumber={1} scale={screenWidth >= 320 ? 0.9 : 0.5} />
    </Document>
  );
};

export default Resume;
