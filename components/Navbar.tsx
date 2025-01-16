"use client";

import React from "react";
import { Button } from "./ui/button";
import { handleGetInTouch } from "@/utils/functions";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-5">
      <h1 className="text-2xl font-bold ml-2">Olivier.</h1>

      <div className="flex space-x-4">
        <Button variant="outline" className="rounded-full">
          Download CV
        </Button>
        <Button className="rounded-full" onClick={handleGetInTouch}>
          Get in touch
        </Button>
      </div>
    </nav>
  );
}
