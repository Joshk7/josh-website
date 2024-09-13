"use client";

import { Document, Page, pdfjs } from "react-pdf";
import React, { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.mjs",
      import.meta.url
    ).toString();
  }, []);

  return (
    <Document file="/JoshKahlbaughResume.pdf">
      <Page className="" pageNumber={1} scale={0.9} />
    </Document>
  );
};

export default Resume;
