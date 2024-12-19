import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

type ProjectCardProps = {
  projectPic: string;
  title: string;
  description: string;
  techStack?: string[];
};

const ProjectCard = (props: ProjectCardProps) => {
  const { projectPic, title, description, techStack } = props;

  return (
    <div className="w-full flex flex-col items-start space-y-3">
      <Image
        // className="w-full"
        src={projectPic}
        alt="hero"
        width={900}
        height={100}
      />
      <h2 className="text-xl font-bold">{title}</h2>
      {techStack && (
        <div className="flex space-x-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      )}
      <p className="text-gray-700">{description}</p>
      <div className="flex gap-2">
        <Button className="rounded-full">
          View Project
          <ExternalLink />
        </Button>
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
      </div>
    </div>
  );
};

export default ProjectCard;
