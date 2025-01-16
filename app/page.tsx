import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Project } from "@/utils/types";

const projects: Project[] = [
  {
    projectPic: "/Fedhubs.jpg",
    title: "Fedhubs",
    description:
      "A cross-plateform application that allows users to discover nearby restaurants " +
      "and seamlessly book tables based on their preferences. The app combines " +
      "location-based search with an intuitive user interface to enhance the dining experience." +
      " Users can browse restaurant details, view menus, check reviews and ratings, and reserve tables with just a few taps.",
    techStack: ["Flutter", "React js", "Laravel", "MySQL"],
    codeAvailable: false,
    previewUrl: "https://app.fedhubs.com",
  },
  {
    projectPic: "/Fedhubs_pro.png",
    title: "Fedhubs Pro",
    description:
      "A powerful mobile and web application designed for restaurateurs to efficiently manage their restaurant operations. " +
      "The app provides an all-in-one solution for handling menus, reservations, and fidelities, streamlining day-to-day tasks and enhancing operational efficiency.",
    techStack: ["Flutter", "Laravel", "MySQL"],
    codeAvailable: false,
    previewUrl: "https://pro.fedhubs.com",
  },
  {
    projectPic: "/hero.png",
    title: "Prompt AI",
    description:
      "Prompt AI is a platform designed to share and discover creative prompts for AI tools and applications. " +
      "It enables users to explore, contribute, and curate prompts that inspire innovation and streamline productivity across various domains, including art, writing, and development.",
    techStack: ["React", "Node", "MongoDB"],
    codeAvailable: true,
    previewUrl: null,
  },
  {
    projectPic: "/hero.png",
    title: "DevChronicles",
    description:
      "DevChronicles is a blog dedicated to exploring the world of development, from coding best practices to the latest trends in technology. " +
      "It offers insightful articles, tutorials, and personal experiences aimed at developers of all skill levels.",
    techStack: ["Under Development"],
    codeAvailable: true,
    previewUrl: null,
  },
];

export default function Home() {
  return (
    <div className="px-5 md:px-10">
      <Navbar />

      <main>
        <Hero />

        <section className="flex flex-col items-center justify-center space-y-5 pt-28 text-center">
          <h1 className="text-4xl font-bold max-w-60">
            A breakdown of what I do.
          </h1>
          <p className="text-gray-700 max-w-md">
            Your go-to solution for web and mobile applications, trusted by
            founders, startups, and agencies alike.
          </p>

          <Image
            className="py-5 h-36 md:h-full object-contain"
            src={"/arrow_down.png"}
            alt="arrow-down"
            width={162}
            height={162}
          />

          <div className="text-3xl md:text-5xl font-bold flex flex-col">
            <div>Expert Development</div>
            <div className="flex space-x-2 md:space-x-3">
              <Image
                src="/arrow.svg"
                alt="arrow"
                width={180}
                height={20}
                className="h-10 w-24 md:h-10 md:w-36"
              />
              <div>Crafting Quality</div>
            </div>
            <div>
              From <span className="text-violet-600">Frontend</span> to{" "}
              <span className="text-violet-600">Backend</span>
            </div>
            <div>and More</div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-3 items-center justify-center pt-10">
          <div className="bg-slate-100 rounded-lg max-w-full md:max-w-[300px] overflow-hidden">
            <Image
              src="/design.png"
              alt="web"
              width={350}
              height={200}
              className="rotate-6 relative bottom-5"
            />

            <div className="p-3 flex flex-col space-y-2">
              <h2 className="font-bold text-2xl">Design UI/UX.</h2>
              <p className="text-gray-700">
                Crafting Intuitive and Engaging User Experiences for Every
                Challenge
              </p>
            </div>
          </div>
          <div className="bg-slate-100 rounded-lg max-w-full md:max-w-[300px] overflow-hidden">
            <Image
              src="/web.png"
              alt="web"
              width={400}
              height={200}
              className="rotate-6 relative bottom-5"
            />

            <div className="p-3 flex flex-col space-y-2">
              <h2 className="font-bold text-2xl">Web apps.</h2>
              <p className="text-gray-700">
                Crafting Intuitive and Engaging User Experiences for Every
                Challenge
              </p>
            </div>
          </div>

          <div className="bg-slate-100 rounded-lg max-w-full md:max-w-[300px] overflow-hidden">
            <Image
              src="/mobile.png"
              alt="web"
              width={400}
              height={200}
              className="rotate-6 relative bottom-5"
            />

            <div className="p-3 flex flex-col space-y-2">
              <h2 className="font-bold text-2xl">Mobile apps.</h2>
              <p className="text-gray-700">
                Crafting Intuitive and Engaging User Experiences for Every
                Challenge
              </p>
            </div>
          </div>
        </section>

        <div className="text-center flex items-center content-center flex-col pt-28 space-y-5">
          <h1 className="text-4xl font-bold max-w-80">
            Selected works I've done.
          </h1>
          <p className="text-gray-700 max-w-md">
            Here are a few standout projects that showcase my expertise and
            dedication to delivering high-quality digital solutions.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-8 mt-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </section>

        <Footer />
      </main>
    </div>
  );
}
