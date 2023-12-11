import Image from "next/image";

// component / ui
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

// icons
import {
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  User2,
  Sparkles,
} from "lucide-react";
import { RiDiscordFill } from "react-icons/ri";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Fauzan Jumdinhar Marsha",
  },
  {
    icon: <RiDiscordFill size={20} />,
    text: "zann_00",
  },
  {
    icon: <MailIcon size={20} />,
    text: "fauzanjumdinharm@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 14 January 2000",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Universitas Gadjah Mada",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Central Java, Indonesia",
  },
];

const qualificationData = [
  // education
  {
    title: "education",
    data: [
      {
        university: "harisenin.com",
        qualification: "Full-Stack Web Developer",
        years: "June - December 2023",
      },
      {
        university: "Universitas Gadjah Mada",
        qualification: "Bachelor in Aquatic Resource Management",
        years: "Aug 2018 - April 2022",
      },
    ],
  },
  // projects
  {
    title: "projects",
    data: [
      {
        projectName: "Portfolio Website",
        technologies: "Next js",
        years: "December 2023",
      },
      {
        projectName: "Coming Soon",
        technologies: "Coming Soon",
        years: "On Progress",
      },
    ],
  },
];

const skillData = [
  // skills
  {
    title: "skills",
    data: [
      {
        skillName: "1. Front-end Development",
        technologies:
          "- HTML, CSS, Tailwind, JavaScript, React-js, Vite, Next-js",
      },
      {
        skillName: "2. Back-end Development",
        technologies: "- Node-js, Express-js, Prisma, XAMPP, MySql",
      },
    ],
  },
  // tools
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/canva.svg",
      },
      {
        imgPath: "/about/notion.svg",
        imgPathDark: "/about/notion-white.svg",
      },
    ],
  },
];

const AboutMe = () => {
  const getData = (arr, title) => {
    return arr.find(item => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 py-10 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-0 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyle="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/fauzan-about.png"
            />
          </div>
          {/* image mobile view */}
          <div className="xl:hidden flex flex-1 relative justify-center my-16">
            <Image src="/about/fauzan-about.png" width={350} height={350} />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal info */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Web Development Enthusiast</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I have no computer science degree but I am confident in my
                      ability and passion to learn something new and become good
                      at it. An open-to-criticism individual who will adapt
                      quickly and take any chance to gain more software
                      engineering knowledge.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 xl:gap-x-14 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b-2 border-border dark:border-b-muted-foreground/70"></div>
                      <div>English, Bahasa, Javanese</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Coding Journey
                    </h3>
                    {/* education and projects wrapper*/}
                    <div className="grid md:grid-cols-2 gap-y-8 xl:gap-x-4">
                      {/* education */}
                      <div className="flex flex-col gap-y-6 xl:min-w-[350px]">
                        <div className="flex gap-x-4 items-center text-2xl text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list - education */}
                        <div className="flex flex-col gap-y-4">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div
                                  className="flex gap-x-10 group"
                                  key={index}
                                >
                                  <div className="h-[100px] w-[1px] bg-border relative ml-2 dark:bg-secondary"></div>
                                  <div className="w-[12px] h-[12px] rounded-full bg-primary absolute -left-[-34px] xl:left-[50.2%]  group-hover:translate-y-[100px] transition-all duration-500"></div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* projects */}
                      <div className="flex flex-col gap-y-6 xl:ml-2">
                        <div className="flex gap-x-4 items-center text-2xl text-primary">
                          <Sparkles size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "projects").title}
                          </h4>
                        </div>
                        {/* list - projects */}
                        <div className="flex flex-col gap-y-4">
                          {getData(qualificationData, "projects").data.map(
                            (item, index) => {
                              const { projectName, technologies, years } = item;
                              return (
                                <div
                                  className="flex gap-x-10 xl:gap-x-3.5 group"
                                  key={index}
                                >
                                  <div className="h-[100px] w-[1px] bg-border relative ml-2 dark:bg-secondary"></div>
                                  <div className="w-[12px] h-[12px] rounded-full bg-primary absolute xl:relative -left-[-34px] md:left-[50.4%] xl:-left-[20px] group-hover:translate-y-[100px] transition-all duration-500"></div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {projectName}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {technologies}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I'm Good At</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b-2 border-border dark:border-b-muted-foreground/70 mb-4"></div>
                      {/* list skills */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { skillName, technologies } = item;
                            return (
                              <div
                                className="text-center xl:text-left mx-auto xl:mx-0 mb-4"
                                key={index}
                              >
                                <div className="font-medium">{skillName}</div>
                                <div className="xl:ml-4">{technologies}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools icon */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b-2 border-border dark:border-b-muted-foreground/70 mb-4"></div>
                      {/* list icons */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath, imgPathDark } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt="tools"
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
