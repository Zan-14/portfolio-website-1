import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import SocialMedia from "./SocialMedia";

// icons
import { RiTodoFill, RiArrowDownSLine } from "react-icons/ri";
import { PiCertificateFill } from "react-icons/pi";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[95vh] md:h-[90vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Fauzan J.M.</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Currently creating some projects with JavaScript. Graduated from
              HariSenin.com bootcamp for Full Stack Web Developer. My goal is to
              become a professional full-stack web developer
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div>
            {/* social media */}
            <SocialMedia
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[24px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge 1 finished projects*/}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiTodoFill />}
              endCountNum={3}
              badgeText="Finished Projects"
            />
            {/* badge 2 certificates */}
            <Badge
              containerStyles="absolute top-[70%] -right-8"
              icon={<PiCertificateFill />}
              endCountNum={1}
              badgeText="Certificates"
            />
            <div className="bg-hero_shape2_brown dark:bg-hero_shape4_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyle="w-[510px] h-[462px] relative"
              imgSrc="/hero/fauzan-home.png"
            />
          </div>
        </div>
        {/* down arrow icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
