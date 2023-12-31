"use client";
import Link from "next/link";
// ui
import { Button } from "./ui/button";
// swiper component from react
import { Swiper, SwiperSlide } from "swiper/react";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";
// swiper modules
import { Pagination } from "swiper/modules";
// components
import ProjectCard from "./ProjectCard";

// project data
export const projectData = [
  {
    image: "/myProjects/project-1.png",
    category: "next js",
    name: "Fauzan Website",
    description:
      "My first project, using React + Next js. Design with Figma. The purpose of this project is to show myself and my upcoming project",
    link: "/",
    github: "https://github.com/Zan-14/portfolio-website-1",
  },
  {
    image: "/myProjects/project-cs.png",
    category: "Coming Soon",
    name: "Coming Soon",
    description:
      "My upcoming project, trying to continuously create new projects. Exploring Frontend and Backend as web developer",
    link: "/",
    github: "/",
  },
  {
    image: "/myProjects/project-cs.png",
    category: "Coming Soon",
    name: "Coming Soon 2",
    description:
      "My upcoming project 2, trying to continuously create new projects. Exploring Frontend and Backend as web developer",
    link: "/",
    github: "/",
  },
  {
    image: "/myProjects/project-cs.png",
    category: "Coming Soon",
    name: "Coming Soon 3",
    description:
      "My upcoming project 3, trying to continuously create new projects. Exploring Frontend and Backend as web developer",
    link: "/",
    github: "/",
  },
  {
    image: "/myProjects/project-cs.png",
    category: "Coming Soon",
    name: "Coming Soon 4",
    description:
      "My upcoming project 4, trying to continuously create new projects. Exploring Frontend and Backend as web developer",
    link: "/",
    github: "/",
  },
  {
    image: "/myProjects/project-cs.png",
    category: "Coming Soon",
    name: "Coming Soon 5",
    description:
      "My upcoming project 5, trying to continuously create new projects. Exploring Frontend and Backend as web developer",
    link: "/",
    github: "/",
  },
];

const Projects = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto xl:flex xl:justify-between">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[540px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Collection of my web development projects.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[850px]">
          <Swiper
            className="h-[540px]"
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
