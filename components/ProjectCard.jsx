import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* project image / screenshot */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-card-header rounded-t-2xl overflow-hidden">
          <Image
            className="absolute bottom-0"
            src={project.image}
            width={233}
            height={250}
            alt="project"
            priority
          />
          <div className="flex gap-x-2">
            {/* button links */}
            <Link
              href={project.link}
              className="bg-secondary w-14 h-14 rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
            {/* button github */}
            <Link
              href={project.github}
              className="bg-secondary w-14 h-14 rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Github className="text-white" />
            </Link>
          </div>
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
