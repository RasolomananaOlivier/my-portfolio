import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { Project } from "@/utils/types";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;

  return (
    <div className="w-full flex flex-col items-start space-y-3">
      <Image
        className="rounded-lg"
        src={project.projectPic}
        alt="hero"
        width={900}
        height={100}
      />
      <h2 className="text-xl font-bold">{project.title}</h2>
      {project.techStack && (
        <div className="flex space-x-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      )}
      <p className="text-gray-700">{project.description}</p>
      <div className="flex gap-2">
        {project.previewUrl && (
          <Button asChild className="rounded-full">
            <Link href={project.previewUrl} target="__blank">
              View Project <ExternalLink />
            </Link>
          </Button>
        )}

        {project.codeAvailable && (
          <Button variant="outline" className="rounded-full">
            Code
            <Image
              src="/github.svg"
              alt="github"
              className="w-4 h-4"
              width={24}
              height={24}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
