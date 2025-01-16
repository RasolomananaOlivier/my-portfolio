"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { BicepsFlexed } from "lucide-react";
import { handleGetInTouch } from "@/utils/functions";
import SocialNetwork from "./SocialNetwork";
import { SocialLink } from "@/utils/types";

const socialNetworks: SocialLink[] = [
  {
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white h-6 w-6"
      >
        <title>GitHub</title>
        <path
          fill="currentColor"
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        />
      </svg>
    ),
    label: "Github",
    url: "https://github.com/RasolomananaOlivier",
  },
  {
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white h-6 w-6"
      >
        <title>LinkedIn</title>
        <path
          fill="currentColor"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        />
      </svg>
    ),
    label: "Linkedin",
    url: "https://www.linkedin.com/in/rasolomanana-herimanitra-olivier",
  },
  {
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white h-6 w-6"
      >
        <title>X</title>
        <path
          fill="currentColor"
          d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
        />
      </svg>
    ),
    label: "Twitter",
    url: "https://x.com/OlivierFullDev",
  },
];

export default function Footer() {
  return (
    <section className="flex flex-col md:flex-row gap-5 p-4 md:p-10 bg-neutral-950 rounded-3xl my-20">
      <Image
        src="/hero.png"
        alt="web"
        width={400}
        height={400}
        className="object-cover rounded-2xl"
      />
      <div className="flex flex-col space-y-5 text-white">
        <h1 className="font-bold text-3xl"> Hello world !</h1>
        <p className="text-gray-200">
          I’m Olivier, a passionate and highly skilled Full Stack Developer with
          over 2 years of experience in designing, developing, and maintaining
          robust web applications. Proficient in both front-end and back-end
          technologies, with a keen eye for detail and a commitment to
          delivering high-quality, scalable solutions. Adept at working in
          fast-paced environments and collaborating effectively with
          cross-functional teams to drive project success.
        </p>
        <p className="text-gray-200">
          I am always eager to learn new technologies and take on challenging
          projects. If you're looking for a dedicated developer who can bring
          your vision to life and ensure the technical excellence of your
          projects.
        </p>
        <div>
          <Button
            className="rounded-full bg-violet-800 hover:bg-violet-700"
            onClick={handleGetInTouch}
          >
            <BicepsFlexed />
            Let's work together
          </Button>
        </div>

        <div className="flex gap-3">
          {socialNetworks.map((social) => (
            <SocialNetwork key={social.label} social={social} />
          ))}
        </div>
      </div>
    </section>
  );
}
