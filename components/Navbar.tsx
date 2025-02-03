"use client";

import React from "react";
import { Button } from "./ui/button";
import { handleGetInTouch } from "@/utils/functions";

export default function Navbar() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/RASOLOMANANA_Herimanitra_Olivier.pdf";
    link.download = "Olivier_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="flex justify-between items-center py-5">
      <h1 className="text-2xl font-bold ml-2">
        Olivier<span className="text-violet-600">Dev</span>.
      </h1>

      <div className="flex space-x-4">
        <Button variant="outline" className="rounded-full" onClick={downloadCV}>
          Download CV
        </Button>
        <Button className="rounded-full" onClick={handleGetInTouch}>
          Get in touch
        </Button>
      </div>
    </nav>
  );
}
