import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardHeader className="p-0">
        {/* project image / screenshot */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-card-header rounded-t-2xl">
          <Image
            className="absolute bottom-0 shadow-xl"
            src={project.image}
            width={233}
            height={250}
            alt="project"
            priority
          />
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6 dark:bg-background">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg ">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
