import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* social media */}
          <SocialMedia
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary text-2xl dark:text-white/70 hover:text-white dark:hover:text-primary transition-all"
          />
          {/* copyright */}
          <div className="text-muted-foreground text-center">
            Copyright &copy; Fauzan Jumdinhar Marsha. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
