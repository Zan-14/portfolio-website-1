"use clients";

import Link from "next/link";
// icons
import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from "react-icons/ri";

const icons = [
  {
    path: "https://www.linkedin.com/in/fauzan-jumdinhar-marsha/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/Zan-14",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/fauzanjumdinhar/",
    name: <RiInstagramFill />,
  },
];

const SocialMedia = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMedia;
