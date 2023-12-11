// components
import DevImg from "@/components/DevImg";
import FormContact from "@/components/form/FormContact";

// icons
import { MailIcon, HomeIcon } from "lucide-react";
import { RiDiscordFill } from "react-icons/ri";

const Contactpage = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & photo */}
        <div className="grid md:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-8 h-0.5 bg-primary"></span>
              Don't be shy &#128526;
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together !</h1>
            <p className="subtitle max-w-[400px]">
              Bring your project ideas to life more easily with me.
            </p>
          </div>
          {/* photo */}
          <div className="flex justify-center items-center">
            <DevImg
              containerStyle="dark:hidden xl:w-[602px] xl:h-[474px] lg:w-[470px] lg:h-[370px] md:w-[282px] md:h-[222px] relative"
              imgSrc="/contact/fauzan-contact-light.png"
            />
            <DevImg
              containerStyle="hidden dark:flex xl:w-[602px] xl:h-[474px] lg:w-[470px] lg:h-[370px] md:w-[282px] md:h-[222px] dark:relative"
              imgSrc="/contact/fauzan-contact-dark.png"
            />
          </div>
        </div>
        {/* info text & form */}
        <div className="grid md:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-10 text-base xl:text-lg mb-8 lg:mb-0">
            {/* discord */}
            <div className="flex items-center gap-x-4 lg:gap-x-8">
              <RiDiscordFill size={18} className="text-primary" />
              <div>zann_00</div>
            </div>
            {/* mail */}
            <div className="flex items-center gap-x-4 lg:gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>fauzanjumdinharm@gmail.com</div>
            </div>
            {/* home */}
            <div className="flex items-center gap-x-4 lg:gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Central Java, Indonesia</div>
            </div>
          </div>
          {/* form */}
          <FormContact />
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
