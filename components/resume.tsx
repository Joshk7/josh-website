"use client";

import { Document, Page, pdfjs } from "react-pdf";
import React, { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();


const Resume = () => {
    const screenWidth = window.innerWidth;

    const scale = screenWidth / 700;
    
  return (
    <Document file="/JoshKahlbaughResume.pdf">
      <Page pageNumber={1} scale={screenWidth >= 1000 ? 1.4 : scale} />
    </Document>
  );
};

export default Resume;
